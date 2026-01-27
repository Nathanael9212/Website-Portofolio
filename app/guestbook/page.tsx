'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp;
}

export default function GuestbookPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Real-time listener untuk ambil data dari Firestore
  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Message));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  // Handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Nama dan pesan tidak boleh kosong!');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: Timestamp.now()
      });

      // Reset form
      setName('');
      setMessage('');
      alert('Pesan berhasil dikirim! 🎉');
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pesan. Coba lagi!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="pageTitle">
        <h1>Guestbook</h1>
        <p className="lead">Tinggalkan pesan atau saran untuk saya</p>
      </div>

      {/* Form Kirim Pesan */}
      <section className="contentSection">
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: 'var(--text)'
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
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '15px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: 'var(--text)'
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
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '15px',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 32px',
              background: loading ? 'var(--muted)' : 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>
      </section>

      {/* Daftar Pesan */}
      <section className="contentSection">
        <h2>Pesan dari Pengunjung ({messages.length})</h2>
        <div style={{ display: 'grid', gap: '16px', marginTop: '24px' }}>
          {messages.length === 0 ? (
            <p style={{
              textAlign: 'center',
              color: 'var(--muted)',
              padding: '40px 0'
            }}>
              Belum ada pesan. Jadilah yang pertama! 🎉
            </p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  padding: '20px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <strong style={{
                    color: 'var(--accent)',
                    fontSize: '16px'
                  }}>
                    {msg.name}
                  </strong>
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--muted)'
                  }}>
                    {msg.createdAt?.toDate().toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <p style={{
                  color: 'var(--text)',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {msg.message}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
