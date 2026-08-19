import { useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import DailyInsight from './components/DailyInsight';
import CosmicMatch from './components/CosmicMatch';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('insight');

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-logo">
          <Sparkles color="var(--primary-color)" /> AstroSync
        </div>
        
        <div className="streak-badge" title="You've aligned with the stars 7 days in a row!">
          <Flame size={18} fill="currentColor" />
          7 Day Streak
        </div>
      </header>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'insight' ? 'active' : ''}`}
          onClick={() => setActiveTab('insight')}
        >
          Daily Alignment
        </button>
        <button 
          className={`nav-tab ${activeTab === 'match' ? 'active' : ''}`}
          onClick={() => setActiveTab('match')}
        >
          Cosmic Match
        </button>
      </div>

      <main>
        {activeTab === 'insight' && <DailyInsight />}
        {activeTab === 'match' && <CosmicMatch />}
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)' }}>
        <p>AstroHack 2026 Prototype • AstroLive Ecosystem</p>
      </footer>
    </div>
  );
}

export default App;
