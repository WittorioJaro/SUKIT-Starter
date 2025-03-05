import type { Session } from '@supabase/supabase-js';

/**
 * Generates a JWT token from a Supabase session
 * This token will be sent to the Flask API for authentication
 */
export function jwtFromSession(session: Session): string {
  // We'll use the existing Supabase JWT as our token
  // This is secure because:
  // 1. It's already a valid JWT
  // 2. It has an expiration time
  // 3. It contains the user's ID and other metadata
  // 4. Our Flask server can verify it using the same JWT secret
  return session.access_token;
} 