import { auth } from './stores/auth';
import { get } from 'svelte/store';
import { PUBLIC_FLASK_API_URL } from '$env/static/public';

const API_URL = PUBLIC_FLASK_API_URL || 'http://127.0.0.1:5000';

/**
 * Makes an authenticated request to the Flask API
 */
export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const authState = get(auth);
  
  const headers = new Headers(options.headers);
  
  // Add auth token if available
  if (authState.token) {
    headers.set('Authorization', `Bearer ${authState.token}`);
  }
  
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });
  
  if (!response.ok) {
    // Handle authentication errors
    if (response.status === 401) {
      auth.clearAuth();
      throw new Error('Authentication failed');
    }
    throw new Error(`API request failed: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Creates an authenticated EventSource connection
 */
export function createAuthenticatedEventSource(url: string): EventSource {
  const authState = get(auth);
  
  // Add token to URL as a query parameter
  const separator = url.includes('?') ? '&' : '?';
  const authenticatedUrl = authState.token 
    ? `${url}${separator}token=${encodeURIComponent(authState.token)}`
    : url;
    
  return new EventSource(authenticatedUrl);
} 