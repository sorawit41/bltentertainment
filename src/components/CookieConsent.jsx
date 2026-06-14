import React, { useState, useEffect } from 'react';
import { Shield, Settings, Check, X } from 'lucide-react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already saved cookie preferences
    const savedConsent = localStorage.getItem('blt_cookie_consent');
    if (!savedConsent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
      } catch (e) {
        console.error('Failed to parse cookie preferences');
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('blt_cookie_consent', JSON.stringify(allPreferences));
    setPreferences(allPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const minPreferences = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('blt_cookie_consent', JSON.stringify(minPreferences));
    setPreferences(minPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('blt_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggle = (type) => {
    if (type === 'essential') return; // Cannot toggle essential
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Allow reopening cookie settings from custom event (e.g. from footer link)
  useEffect(() => {
    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };
    window.addEventListener('open_cookie_settings', handleOpenSettings);
    return () => window.removeEventListener('open_cookie_settings', handleOpenSettings);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-wrapper">
      <div className="cookie-backdrop" onClick={() => setShowBanner(false)} />
      
      <div className={`cookie-banner-card card-premium ${showSettings ? 'settings-expanded' : ''}`}>
        {!showSettings ? (
          // Standard banner view
          <div className="cookie-banner-content">
            <div className="cookie-header">
              <Shield size={20} className="cookie-icon" />
              <h4>การตั้งค่าคุกกี้ (Cookie Settings)</h4>
            </div>
            <p className="cookie-text">
              เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ ประสบการณ์การใช้งานเว็บไซต์ที่ดียิ่งขึ้น และนำเสนอคอนเทนต์ที่เหมาะสมกับคุณ คุณสามารถเลือกยอมรับคุกกี้หรือจัดการการตั้งค่าของคุณได้ทุกเมื่อ
            </p>
            <div className="cookie-actions">
              <button className="btn-cookie-settings" onClick={() => setShowSettings(true)}>
                <Settings size={14} /> ตั้งค่าคุกกี้
              </button>
              <div className="cookie-main-buttons">
                <button className="btn-cookie-reject" onClick={handleRejectAll}>
                  ปฏิเสธ
                </button>
                <button className="btn-cookie-accept" onClick={handleAcceptAll}>
                  ยอมรับทั้งหมด
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Expanded preferences editor view
          <div className="cookie-settings-content">
            <div className="cookie-header-settings">
              <div className="cookie-header-title">
                <Shield size={20} className="cookie-icon" />
                <h4>จัดการการตั้งค่าคุกกี้</h4>
              </div>
              <button className="btn-close-settings" onClick={() => setShowSettings(false)} aria-label="Close settings">
                <X size={16} />
              </button>
            </div>

            <p className="cookie-text-small">
              คุณสามารถกำหนดความยินยอมสำหรับคุกกี้แต่ละประเภทได้ตามต้องการ คุกกี้ที่จำเป็นไม่สามารถปิดการใช้งานได้เนื่องจากมีความสำคัญต่อการทำงานขั้นพื้นฐานของเว็บไซต์
            </p>

            <div className="cookie-options-list">
              {/* Essential */}
              <div className="cookie-option-item">
                <div className="option-info">
                  <h5>คุกกี้ที่จำเป็น (Essential Cookies)</h5>
                  <p>ช่วยให้การทำงานพื้นฐานของเว็บไซต์ เช่น การเลือกสินค้า ตะกร้าสินค้า และการรักษาความปลอดภัย ทำงานได้ตามปกติ</p>
                </div>
                <div className="toggle-wrapper-disabled">
                  <span className="badge-essential">จำเป็นเสมอ</span>
                </div>
              </div>

              {/* Analytics */}
              <div className="cookie-option-item">
                <div className="option-info">
                  <h5>คุกกี้เพื่อการวิเคราะห์ (Analytics Cookies)</h5>
                  <p>ช่วยเก็บรวบรวมข้อมูลสถิติพฤติกรรมการเยี่ยมชมเว็บไซต์ เพื่อนำมาพัฒนาและปรับปรุงประสบการณ์การใช้งานให้ดีขึ้น</p>
                </div>
                <button 
                  className={`toggle-btn ${preferences.analytics ? 'active' : ''}`} 
                  onClick={() => handleToggle('analytics')}
                  aria-label="Toggle analytics cookies"
                >
                  <span className="toggle-slider"></span>
                </button>
              </div>

              {/* Marketing */}
              <div className="cookie-option-item">
                <div className="option-info">
                  <h5>คุกกี้เพื่อการตลาด (Marketing Cookies)</h5>
                  <p>ใช้เพื่อนำเสนอโฆษณา คอนเทนต์ หรือโปรโมชันของทางศิลปินและร้านอาหารญี่ปุ่นที่เหมาะสมกับความสนใจของคุณ</p>
                </div>
                <button 
                  className={`toggle-btn ${preferences.marketing ? 'active' : ''}`} 
                  onClick={() => handleToggle('marketing')}
                  aria-label="Toggle marketing cookies"
                >
                  <span className="toggle-slider"></span>
                </button>
              </div>
            </div>

            <div className="cookie-settings-actions">
              <button className="btn-cookie-reject w-full-mobile" onClick={handleRejectAll}>
                ปฏิเสธทั้งหมด
              </button>
              <button className="btn-cookie-accept w-full-mobile" onClick={handleSavePreferences}>
                บันทึกการตั้งค่า
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
