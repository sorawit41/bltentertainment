import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleOpenCookieSettings = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open_cookie_settings'));
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <h3 className="footer-logo">
              <img src={logoImg} alt="BLT WORLD ENTERTAINMENT" className="footer-logo-img" />
            </h3>
            <p className="footer-desc">
              เอเจนซี่สื่อบันเทิงมัลติฟังก์ชันระดับพรีเมียม ขับเคลื่อนวัฒนธรรมร่วมสมัยผ่านผลงานศิลปินไอดอล วีเจสตรีมมิ่ง และร้านอาหารญี่ปุ่นชั้นเลิศ
            </p>
          </div>

          {/* Nav Col */}
          <div className="footer-col links-col">
            <h4>แผนกธุรกิจ</h4>
            <ul>
              <li><Link to="/idols">กลุ่มศิลปินไอดอล</Link></li>
              <li><Link to="/vj">วีเจ TikTok</Link></li>
              <li><Link to="/#restaurant">ร้านอาหารญี่ปุ่น</Link></li>

            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col links-col">
            <h4>ติดต่อสอบถาม</h4>
            <ul>
              <li><span style={{ fontSize: '13px', lineHeight: '1.5', display: 'block', opacity: 0.85 }}>ที่อยู่: MBK CENTER 7th Floor A17/1, 444 Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330</span></li>
              <li><span>อีเมล: sorawit41@hotmail.com</span></li>
              <li><span>โทรศัพท์: 094-660-4343</span></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="footer-col newsletter-col">
            <h4>จดหมายข่าว</h4>
            <p>สมัครรับข่าวสารอัปเดตเกี่ยวกับการปล่อยผลงาน การออดิชัน และข้อเสนอพิเศษสุดเอ็กซ์คลูซีฟ</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="กรอกอีเมลของคุณ"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
            {subscribed && <span className="newsletter-success">ขอบคุณสำหรับการสมัครรับข่าวสาร</span>}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} บริษัท บีแอลที เอ็นเตอร์เทนเมนท์ จำกัด สงวนลิขสิทธิ์ทั้งหมด</p>
          <div className="footer-legal">
            <Link to="/privacy">นโยบายความเป็นส่วนตัว</Link>
            <span className="separator">/</span>
            <Link to="/terms">ข้อกำหนด & เงื่อนไข</Link>
            <span className="separator">/</span>
            <button className="btn-cookie-trigger" onClick={handleOpenCookieSettings}>ตั้งค่าคุกกี้</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
