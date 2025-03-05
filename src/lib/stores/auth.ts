import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
}

const createAuthStore = () => {
  const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false
  };
  
  const { subscribe, set, update } = writable<AuthState>(initialState);
  
  return {
    subscribe,
    setAuth: (user: any, token: string) => {
      if (browser) {
        localStorage.setItem('auth_token', token);
      }
      set({ user, token, isAuthenticated: true });
    },
    clearAuth: () => {
      if (browser) {
        localStorage.removeItem('auth_token');
      }
      set(initialState);
    },
    // Initialize auth from localStorage on app load
    initialize: () => {
      if (browser) {
        const token = localStorage.getItem('auth_token');
        if (token) {
          update(state => ({ ...state, token, isAuthenticated: true }));
        }
      }
    }
  };
};

export const auth = createAuthStore(); 