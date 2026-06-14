import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Users, Send, Heart, Calendar } from 'lucide-react';
import './VJ.css';

export default function VJ() {
  const showComingSoon = true;

  const vjs = [
    {
      id: 'vj_miki',
      name: 'MIKI KOON',
      handle: '@miki_blt',
      status: 'LIVE NOW',
      desc: 'Known for her interactive DJ sets, music remixes, and late-night chat sessions. Over 2.1M followers.',
      schedule: 'Mon - Fri: 20:00 - 23:00',
      avatarInitial: 'M'
    },
    {
      id: 'vj_kenji',
      name: 'KENJI TOKYO',
      handle: '@kenji_vj',
      status: 'OFFLINE',
      desc: 'Lifestyle blogger, ASMR creator, and interactive gaming streamer. Known for relaxed chill streams.',
      schedule: 'Tue, Thu, Sat: 18:00 - 21:00',
      avatarInitial: 'K'
    },
    {
      id: 'vj_chloe',
      name: 'CHLOE VIBES',
      handle: '@chloe_live',
      status: 'LIVE NOW',
      desc: 'Acoustic guitar singer performing song requests live. Highly interactive Q&A stream.',
      schedule: 'Daily: 19:00 - 22:00',
      avatarInitial: 'C'
    }
  ];

  const [activeStreamVJ, setActiveStreamVJ] = useState(vjs[0]);
  const [chatMessages, setChatMessages] = useState([
    { user: 'fan_44', text: 'OMG Miki is live!!' },
    { user: 'sushi_chef', text: 'Greetings from Boruya Sushi!' },
    { user: 'neon_rider', text: 'Play the new NEO-V track!' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [hearts, setHearts] = useState([]);
  const chatEndRef = useRef(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  // Simulate incoming chat messages
  useEffect(() => {
    const randomComments = [
      'Amazing voice!',
      'Hello from Bangkok!',
      'Where is the merch available?',
      'You look stunning today!',
      'Can you sing Moonlight Requiem?',
      'Love the stream vibe!',
      'Sending stars ⭐️',
      'This is awesome!'
    ];

    const randomUsers = [
      'user_129', 'k_pop_lover', 'somchai_bkk', 'alice_in_wonder', 
      'cyber_punk', 'goth_dreamer', 'tiktok_user99', 'happy_vibes'
    ];

    const interval = setInterval(() => {
      const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
      const randomText = randomComments[Math.floor(Math.random() * randomComments.length)];
      setChatMessages((prev) => [...prev, { user: randomUser, text: randomText }]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setChatMessages((prev) => [...prev, { user: 'you_viewer', text: inputValue }]);
      setInputValue('');
    }
  };

  const handleAddHeart = () => {
    const id = Date.now();
    setHearts((prev) => [...prev, { id, left: Math.random() * 80 + 10 }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1500);
  };

  const selectVJStream = (vj) => {
    if (vj.status === 'LIVE NOW') {
      setActiveStreamVJ(vj);
      setChatMessages([
        { user: 'system', text: `Connected to ${vj.name}'s room.` },
        { user: 'moderator_bot', text: 'Welcome! Keep chats polite and supportive.' }
      ]);
    }
  };

  if (showComingSoon) {
    return (
      <div className="vj-page page-enter container vj-coming-soon-container">
        <div className="vj-coming-soon-card card-premium">
          <span className="coming-soon-badge">COMING SOON</span>
          <h1 className="coming-soon-title">VJ LIVE AGENCY</h1>
          <p className="coming-soon-desc">
            เตรียมพบกับแพลตฟอร์มไลฟ์สตรีมมิ่งของเหล่า VJ สังกัด BLT เร็วๆ นี้
            <br />
            ที่จะมาสร้างสีสัน ความบันเทิง และความสุขแบบเรียลไทม์ให้กับทุกคน
          </p>
          <div className="coming-soon-icon">
            <Radio size={48} className="pulse-icon-coming" />
          </div>
          <Link to="/" className="btn-primary coming-soon-btn">
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="vj-page page-enter container">
      {/* Page Header */}
      <div className="section-header vj-header">
        <h1>VJ LIVE AGENCY</h1>
        <p className="section-subtitle">Our roster of premium digital creators broadcasting live on TikTok.</p>
      </div>

      {/* Main Grid: Stream Simulator & Roster */}
      <div className="vj-grid">
        {/* Stream Simulator Panel */}
        <div className="stream-simulator card-premium">
          <div className="simulator-header">
            <span className="live-pill">
              <Radio size={14} className="pulse-icon" /> SIMULATED BROADCAST
            </span>
            <span className="viewer-count">
              <Users size={14} /> 12.4K Watching
            </span>
          </div>

          {/* Video Player Box */}
          <div className="video-player">
            <div className="video-graphic">
              {/* Abstract Minimal design representing stream */}
              <div className="spinning-ring"></div>
              <span className="streamer-logo">{activeStreamVJ.avatarInitial}</span>
              <div className="streamer-tag">
                <h5>{activeStreamVJ.name}</h5>
                <p>{activeStreamVJ.handle}</p>
              </div>
            </div>

            {/* Heart Animations Overlay */}
            <div className="hearts-container">
              {hearts.map((h) => (
                <div key={h.id} className="heart-icon-fly" style={{ left: `${h.left}%` }}>
                  <Heart size={20} fill="#ffffff" color="#ffffff" />
                </div>
              ))}
            </div>

            {/* Chat Box Overlay */}
            <div className="stream-chat">
              <div className="chat-messages-container">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`chat-message ${msg.user === 'system' ? 'system-msg' : ''}`}>
                    <strong>{msg.user}:</strong> <span>{msg.text}</span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat & Heart Inputs */}
              <div className="chat-input-row">
                <form onSubmit={handleSendMessage} className="chat-form">
                  <input
                    type="text"
                    placeholder="Type a comment..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button type="submit" aria-label="Send message">
                    <Send size={14} />
                  </button>
                </form>
                <button className="heart-btn" onClick={handleAddHeart} aria-label="Send Heart">
                  <Heart size={16} fill="#ffffff" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Roster */}
        <div className="vj-roster">
          <h3>TALENT DIRECTORY</h3>
          <div className="roster-list">
            {vjs.map((vj) => (
              <div
                key={vj.id}
                className={`roster-card card-premium ${vj.status === 'LIVE NOW' ? 'live' : ''} ${activeStreamVJ.id === vj.id ? 'active-room' : ''}`}
                onClick={() => selectVJStream(vj)}
              >
                <div className="roster-avatar">
                  {vj.avatarInitial}
                </div>
                <div className="roster-details">
                  <div className="roster-top">
                    <h4>{vj.name}</h4>
                    <span className={`status-tag ${vj.status === 'LIVE NOW' ? 'tag-live' : 'tag-offline'}`}>
                      {vj.status}
                    </span>
                  </div>
                  <span className="roster-handle">{vj.handle}</span>
                  <p className="roster-desc-text">{vj.desc}</p>
                  <div className="roster-schedule">
                    <Calendar size={12} /> <span>{vj.schedule}</span>
                  </div>
                  {vj.status === 'LIVE NOW' && activeStreamVJ.id !== vj.id && (
                    <span className="click-to-watch">CLICK TO CONNECT STREAM &rarr;</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
