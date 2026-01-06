// src/lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/database'

// Check if Supabase is configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const isSupabaseConfigured =
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== 'your_supabase_project_url'

export function createClient() {
    if (!isSupabaseConfigured) {
        // Return a mock client that won't throw errors
        return {
            auth: {
                getUser: async () => ({ data: { user: null }, error: null }),
                getSession: async () => ({ data: { session: null }, error: null }),
                signUp: async () => ({ data: { user: null, session: null }, error: { message: 'Supabase not configured' } }),
                signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Supabase not configured' } }),
                signInWithOAuth: async () => ({ data: { provider: '', url: '' }, error: { message: 'Supabase not configured' } }),
                signOut: async () => ({ error: null }),
                onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
            },
            from: () => ({
                select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
                insert: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
                update: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
                delete: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
            }),
        } as unknown as ReturnType<typeof createBrowserClient<Database>>
    }

    return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
}

export { isSupabaseConfigured }
