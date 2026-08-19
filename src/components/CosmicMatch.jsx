import { useState } from 'react';
import { Share2, Heart, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CosmicMatch() {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cosmic-match">
      <div className="glass-panel" style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'rgba(233, 196, 106, 0.1)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: 'var(--accent-gold)'
        }}>
          <Heart size={40} />
        </div>
        
        <h2 style={{ marginBottom: '1rem' }}>Cosmic Match</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Discover your astrological compatibility. Send a unique link to a friend or partner to see how your stars align.
        </p>

        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem', textAlign: 'left' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Their Name (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Alex" 
                style={{ 
                  width: '100%', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid var(--border-color)', 
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }} 
              />
            </div>
            <button className="btn-primary animate-pulse-glow" onClick={() => setStep(2)} style={{ width: '100%' }}>
              <Share2 size={20} /> Generate Compatibility Link
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(123,44,191,0.2), rgba(233,196,106,0.1))',
              border: '1px dashed var(--accent-gold)',
              padding: '2rem 1.5rem',
              borderRadius: '1rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Your Link is Ready!</h3>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: 'rgba(0,0,0,0.3)', 
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--text-muted)', paddingLeft: '0.5rem', fontSize: '0.9rem' }}>
                  https://astrolive.app/match/u/8f92a1
                </div>
                <button 
                  onClick={handleCopy}
                  style={{ 
                    background: 'var(--primary-color)', 
                    color: 'white', 
                    padding: '0.5rem', 
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
              <button className="btn-primary">Share via WhatsApp</button>
            </div>
          </motion.div>
        )}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          When they open the link, they'll see your compatibility score, and we'll notify you!
        </p>
      </div>
    </div>
  );
}
