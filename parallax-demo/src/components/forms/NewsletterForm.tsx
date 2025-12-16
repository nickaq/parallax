'use client';

import { useState, FormEvent } from 'react';
import { subscribe } from '@/services/api';
import styles from './forms.module.css';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const result = await subscribe({ email });
      if (result.success) {
        setStatus('success');
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Failed to subscribe');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Is the backend running?');
    }
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <div className={styles.newsletterRow}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={styles.newsletterInput}
        />
        <button 
          type="submit" 
          className={styles.newsletterButton}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </div>
      
      {message && (
        <p className={`${styles.message} ${styles[status]}`}>
          {message}
        </p>
      )}
    </form>
  );
}
