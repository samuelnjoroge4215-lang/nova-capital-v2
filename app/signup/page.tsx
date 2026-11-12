
'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Registration successful! Check your email to confirm your account.');
    }
  }

  return (
    <main style={{ maxWidth: 420, margin: '60px auto', padding: 24 }}>
      <h1>Join Nova Capital</h1>
      <p>Create your trader account</p>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 12, marginBottom: 12 }}
        />

        <input
          type="password"
          placeholder="Password (minimum 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
          style={{ width: '100%', padding: 12, marginBottom: 12 }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: 14 }}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Already registered? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
