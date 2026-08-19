import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Sun, Star } from 'lucide-react';

export default function DailyInsight() {
  const [cardDrawn, setCardDrawn] = useState(false);

  return (
    <div className="daily-insight">
      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
          <Sparkles size={24} />
          Your Cosmic Alignment
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
          The Moon in Scorpio forms a trine with Neptune today, heightening your intuition. Trust your gut feelings in financial matters.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '1rem', flex: 1, minWidth: '120px' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Lucky Color</div>
            <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#48bfe3' }}></div>
              Cyan
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '1rem', flex: 1, minWidth: '120px' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Power Hour</div>
            <div style={{ fontWeight: 'bold' }}>2:00 PM - 3:00 PM</div>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Daily Oracle Pull</h3>
        
        {!cardDrawn ? (
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCardDrawn(true)}
            className="animate-float animate-pulse-glow"
            style={{
              width: '180px',
              height: '280px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, var(--surface-highlight), var(--bg-color))',
              border: '2px dashed var(--accent-gold)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ color: 'var(--accent-gold)', textAlign: 'center' }}>
              <Star size={48} style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontWeight: '600' }}>Tap to Reveal</div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '200px',
                height: '320px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #2a0845 0%, #6441A5 100%)',
                border: '2px solid var(--accent-gold)',
                borderRadius: '1rem',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 0 40px rgba(123, 44, 191, 0.6)'
              }}
            >
              <div style={{ textAlign: 'center', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(233,196,106,0.3)', paddingBottom: '0.5rem' }}>
                <Sun size={24} style={{ margin: '0 auto' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>The Sun</h2>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Success, radiance, and abundance are flowing towards you today.</div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--accent-gold)', borderTop: '1px solid rgba(233,196,106,0.3)', paddingTop: '0.5rem' }}>
                <Moon size={24} style={{ margin: '0 auto' }} />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: '2rem' }}
            >
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Want a deeper reading on this energy?</p>
              <button className="btn-primary" style={{ width: '100%', maxWidth: '300px' }}>
                Talk to a Tarot Expert
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
