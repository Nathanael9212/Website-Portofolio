'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Message {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function GuestbookPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch initial messages
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setMessages(data);
      }
      setFetching(false);
    };

    fetchMessages();

    // Realtime subscription — replace Firebase onSnapshot
    const channel = supabase
      .channel('guestbook-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'guestbook' },
        (payload) => {
          setMessages((prev) => [payload.new as Message, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Nama dan pesan tidak boleh kosong!');
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('guestbook')
      .insert([{ name: name.trim(), message: message.trim() }]);

    if (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pesan. Coba lagi!');
    } else {
      setName('');
      setMessage('');
      // No need to manually update state — realtime subscription handles it
    }

    setLoading(false);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="pageTitle">
        <h1>Guestbook</h1>
        <p className="lead">Tinggalkan pesan atau saran untuk saya</p>
      </div>

      {/* Form */}
      <section className="contentSection">
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: 'var(--text)',
            }}>
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama kamu"
              required
              maxLength={50}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                background: 'var(--surface2)',
                color: 'var(--text)',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--text)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: 'var(--text)',
            }}>
              Pesan
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan kamu di sini..."
              required
              maxLength={500}
              rows={4}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                background: 'var(--surface2)',
                color: 'var(--text)',
                fontSize: '15px',
                resize: 'vertical',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--text)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            />
            <div style={{
              textAlign: 'right',
              fontSize: '12px',
              color: 'var(--muted)',
              marginTop: '6px',
            }}>
              {message.length}/500
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btnPrimary"
            style={{
              opacity: loading ? 0.6 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%',
            }}
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan 🎉'}
          </button>
        </form>
      </section>

      {/* Messages List */}
      <section className="contentSection">
        <h2>
          Pesan dari Pengunjung
          <span style={{
            marginLeft: '10px',
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--muted)',
          }}>
            ({messages.length})
          </span>
        </h2>

        <div style={{ display: 'grid', gap: '14px', marginTop: '24px' }}>
          {fetching ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{
                padding: '20px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface2)',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}>
                <div style={{ height: '14px', width: '30%', background: 'var(--border)', borderRadius: '4px', marginBottom: '12px' }} />
                <div style={{ height: '12px', width: '80%', background: 'var(--border)', borderRadius: '4px', marginBottom: '8px' }} />
                <div style={{ height: '12px', width: '60%', background: 'var(--border)', borderRadius: '4px' }} />
              </div>
            ))
          ) : messages.length === 0 ? (
            <p style={{
              textAlign: 'center',
              color: 'var(--muted)',
              padding: '48px 0',
              fontSize: '16px',
            }}>
              Belum ada pesan. Jadilah yang pertama! 🎉
            </p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="messageCard"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Avatar initial */}
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--text)',
                      color: 'var(--bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '700',
                      flexShrink: 0,
                    }}>
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <strong style={{ color: 'var(--text)', fontSize: '15px' }}>
                      {msg.name}
                    </strong>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    {formatDate(msg.created_at)}
                  </span>
                </div>
                <p style={{
                  color: 'var(--muted)',
                  lineHeight: '1.7',
                  margin: 0,
                  fontSize: '15px',
                  paddingLeft: '46px',
                }}>
                  {msg.message}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </main>
  );
}