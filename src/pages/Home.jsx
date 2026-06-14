import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Users, Radio, Sparkles, UtensilsCrossed, CalendarRange } from 'lucide-react';
import Restaurant from './Restaurant';
import logoImg from '../assets/logo.png';
import sushiShowcaseImg from '../assets/sushi_showcase.png';
import eventShowcaseImg from '../assets/event_showcase.png';
import nekowinkLogo from '../image3.png';
import hisserLogo from '../assets/hisser.official_3750407550971023746.webp';
import idolDivImg from '../assets/IMG_1136.JPG';
import restaurantDivImg from '../image1.png';
import nkw1 from './idol/637479015_122122922565044109_8887153657953692429_n.jpg';
import nkw2 from './idol/641283972_122122820589044109_9098858786104684431_n.jpg';
import nkw3 from './idol/641424241_122123156313044109_2348104730907222243_n.jpg';
import nkw4 from './idol/641642312_122123059725044109_4533640108672016653_n.jpg';
import nkw5 from './idol/642350367_122123254947044109_3787483135081983527_n.jpg';
import nkw6 from './idol/642764479_122123406183044109_5476955826149977402_n.jpg';
import nkw7 from './idol/643910046_122123507829044109_1541260632037446351_n.jpg';
import nkw8 from './idol/654210016_122125918065044109_5562220628365902512_n.jpg';
import './Home.css';

export default function Home() {
  const location = useLocation();
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const recommendedIdols = [
    { name: 'Rosalyn', desc: '★ NEKOWINK', img: nkw1, group: 'NEKOWINK', color: '#ff44aa' },
    { name: 'Moolek', desc: '★ NEKOWINK', img: nkw2, group: 'NEKOWINK', color: '#ffcc00' },
    { name: 'Marin', desc: '★ NEKOWINK', img: nkw3, group: 'NEKOWINK', color: '#ffffff' },
    { name: 'Yuki', desc: '★ NEKOWINK', img: nkw4, group: 'NEKOWINK', color: '#333333' },
    { name: 'Poka', desc: '★ NEKOWINK', img: nkw5, group: 'NEKOWINK', color: '#44aaff' },
    { name: 'Rei', desc: '★ NEKOWINK', img: nkw6, group: 'NEKOWINK', color: '#ff88bb' },
    { name: 'Ayumi', desc: '★ NEKOWINK', img: nkw7, group: 'NEKOWINK', color: '#aa66ff' },
    { name: 'Aina', desc: '★ NEKOWINK', img: nkw8, group: 'NEKOWINK', color: '#66cc88' },
  ];

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? recommendedIdols.length - 2 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev >= recommendedIdols.length - 2 ? 0 : prev + 1));
  };

  const visibleIdols = recommendedIdols.slice(carouselIndex, carouselIndex + 2);

  const stats = [
    { value: '3', label: 'กลุ่มศิลปินไอดอลเดบิวต์' },
    { value: '150+', label: 'วีเจในสังกัด TIKTOK' },
    { value: '2', label: 'แบรนด์ร้านอาหารญี่ปุ่น' }
  ];

  return (
    <div className="home-page page-enter">
      {/* Hero Section */}
      <section className="home-hero">
        {/* Background YouTube Video */}
        <div className="hero-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/OV4_7fKmrXs?autoplay=1&mute=1&loop=1&playlist=OV4_7fKmrXs,mQZtYeqGv0k&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&enablejsapi=1&vq=hd1080"
            title="BLT Entertainment Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="hero-video-overlay"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-logo-wrapper animate-fade-in">
            <img src={logoImg} alt="BLT WORLD ENTERTAINMENT" className="hero-logo-img" />
          </div>
          <span className="hero-tagline animate-fade-in">บีแอลที เอ็นเตอร์เทนเมนท์</span>
          <h1 className="hero-title animate-fade-in">
            ร่วมสร้างสรรค์อนาคตของ <span className="text-gradient">วัฒนธรรม &amp; ประสบการณ์</span>
          </h1>
          <p className="hero-desc animate-fade-in">
            เอเจนซี่ธุรกิจมัลติคอนเซ็ปต์ชั้นนำ บริหารจัดการค่ายเพลงศิลปินไอดอล สังกัดสตรีมเมอร์วีเจระดับท็อป และร้านอาหารญี่ปุ่นสุดพรีเมียม
          </p>
        </div>
      </section>

      {/* Idol Bands Showcase Section (nekowink, hisser & losteden) */}
      <section className="home-bands-showcase section">
        <div className="container">
          <div className="section-header">
            <h2>ศิลปินแนะนำในสังกัด</h2>
            <p className="section-subtitle">พบกับผลงานเพลงระดับท็อปและการแสดงสดสุดตื่นตาตื่นใจจากศิลปินในสังกัดของเรา</p>
          </div>

          <div className="bands-grid">
            {/* Band 1: nekowink */}
            <div className="band-showcase-container animate-fade-in">
              {/* Left: Info */}
              <div className="band-info-block">
                <div className="skewed-title-banner nekowink-banner">
                  <h2 className="skewed-title-text">วง NEKOWINK</h2>
                </div>
                <div className="band-desc-card">
                  <div className="band-nekowink-logo-row">
                    <img src={nekowinkLogo} alt="NEKOWINK Logo" className="band-nekowink-logo" />
                    <span className="band-subtitle">GENRE: CYBER SYNTH-POP</span>
                  </div>
                  <p className="band-desc-text">
                    วงไอดอลระดับแนวหน้า "nekowink" ผู้บุกเบิกแนวเพลง Cyber Synth-Pop โดดเด่นด้วยวิชวลสุดล้ำและความเท่ที่เป็นซิกเนเจอร์ นำเสนอการเต้นที่เฉียบคมและทรงพลัง
                  </p>
                  <p className="band-desc-text">
                    ด้วยกระแสตอบรับอย่างร้อนแรงในทุกชาร์ตเพลง nekowink สัญญาว่าจะพาทุกคนเข้าสู่มิติใหม่แห่งโลกดนตรีอย่างไร้ขีดจำกัด
                  </p>
                </div>
              </div>

              {/* Right: Video */}
              <div className="band-video-block">
                <div className="video-border-frame nekowink-frame">
                  <iframe
                    src="https://www.youtube.com/embed/OV4_7fKmrXs?autoplay=1&mute=1&loop=1&playlist=OV4_7fKmrXs&controls=1&showinfo=0&rel=0&playsinline=1"
                    title="nekowink Official Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Band 2: hisser */}
            <div className="band-showcase-container reverse-layout animate-fade-in">
              {/* Left: Info */}
              <div className="band-info-block">
                <div className="skewed-title-banner">
                  <h2 className="skewed-title-text">วง HISSER</h2>
                </div>
                <div className="band-desc-card">
                  <div className="band-nekowink-logo-row">
                    <img src={hisserLogo} alt="HISSER Logo" className="band-nekowink-logo" />
                    <span className="band-subtitle">GENRE: FUTURE ELECTRO-POP</span>
                  </div>
                  <p className="band-desc-text">
                    วงไอดอลน้องใหม่ไฟแรง "hisser" ที่กำลังเป็นกระแสในขณะนี้ ด้วยแนวเพลง Future Electro-Pop ที่ขับเคลื่อนด้วยจังหวะซินธ์บีทสุดล้ำและการประสานเสียงที่เป็นเอกลักษณ์
                  </p>
                  <p className="band-desc-text">
                    ร่วมสัมผัสเสน่ห์และความสดใหม่ของพวกเขากับมิวสิกวิดีโอเพลงเปิดตัวยอดนิยมที่เล่นโดยอัตโนมัติอยู่ด้านข้างนี้ได้เลย
                  </p>
                </div>
              </div>

              {/* Right: Video */}
              <div className="band-video-block">
                <div className="video-border-frame">
                  <iframe
                    src="https://www.youtube.com/embed/mQZtYeqGv0k?autoplay=1&mute=1&loop=1&playlist=mQZtYeqGv0k&controls=1&showinfo=0&rel=0&playsinline=1"
                    title="hisser Official Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Boruya Sushi overview on Home Page */}
      <section id="restaurant" className="home-restaurant-section">
        <Restaurant />
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="home-divisions section">
        <div className="container">
          <div className="section-header">
            <h2>แผนกธุรกิจหลัก</h2>
            <p className="section-subtitle">บริการสร้างสรรค์ความบันเทิงและศิลปะการจัดเลี้ยงอาหารญี่ปุ่นชั้นเลิศ</p>
          </div>

          <div className="divisions-card-row">
            {/* Card 1: Idol */}
            <div className="division-card animate-fade-in">
              <div className="division-card-logo-area">
                <img src={idolDivImg} alt="Idol Division" className="division-card-logo" />
              </div>
              <div className="division-card-body">
                <span className="division-card-tag">DIVISION 01</span>
                <h3 className="division-card-title">กลุ่มศิลปินไอดอล</h3>
                <p className="division-card-desc">พบกับวงไอดอลทั้ง 3 วงที่มีสไตล์และอัตลักษณ์เฉพาะตัว ครีเอตเทรนด์ใหม่ในวงการเพลงระดับสากล</p>
                <div className="division-card-footer">
                  <Link to="/idols" className="division-card-link">
                    ดูรายชื่อสมาชิก <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: VJ */}
            <div className="division-card animate-fade-in">
              <div className="division-card-logo-area">
                <img src={logoImg} alt="BLT Logo" className="division-card-logo" />
              </div>
              <div className="division-card-body">
                <span className="division-card-tag">DIVISION 02</span>
                <h3 className="division-card-title">สังกัดวีเจ TikTok</h3>
                <p className="division-card-desc">กลุ่มครีเอเตอร์ความบันเทิงยุคใหม่ ไลฟ์สตรีมสร้างสีสัน ความสนุก และร่วมแชทพูดคุยกับแฟนคลับอย่างใกล้ชิด</p>
                <div className="division-card-footer">
                  <Link to="/vj" className="division-card-link">
                    เข้าชมห้องไลฟ์ <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Restaurant */}
            <div className="division-card animate-fade-in">
              <div className="division-card-logo-area">
                <img src={restaurantDivImg} alt="Restaurant Division" className="division-card-logo" />
              </div>
              <div className="division-card-body">
                <span className="division-card-tag">DIVISION 03</span>
                <h3 className="division-card-title">ร้านอาหารญี่ปุ่นพรีเมียม</h3>
                <p className="division-card-desc">สัมผัสประสบการณ์อาหารญี่ปุ่นชั้นยอดกับ Boruya Sushi และ Blackneko</p>
                <div className="division-card-footer">
                  <Link to="/#restaurant" className="division-card-link">
                    สำรวจข้อมูลร้าน <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* CTA Showcase Section */}
      <section className="home-showcase section">
        <div className="container showcase-container card-premium">
          <div className="showcase-content">
            <div className="showcase-logo-wrapper animate-fade-in">
              <img src={logoImg} alt="BLT WORLD ENTERTAINMENT" className="showcase-logo-img" />
            </div>
            <h2>สินค้าพิเศษลิขสิทธิ์แท้ &amp; บัตรของขวัญสัมผัสประสบการณ์</h2>
            <p>
              ร่วมสนับสนุนกลุ่มศิลปินไอดอลที่คุณรัก ซื้อบัตรชมไลฟ์พิเศษของวีเจ และสั่งซื้อบัตรสัมผัสประสบการณ์วันนี้
            </p>
            <Link to="/shop" className="btn-primary mt-4">
              ช็อปสินค้า BLT
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Idols Section */}
      <section className="home-recommend section">
        <div className="container">
          <div className="recommend-header-row">
            <h2>ลองทำความรู้จักกับ...</h2>
            <div className="carousel-arrows">
              <button onClick={handlePrevCarousel} className="carousel-arrow-btn" aria-label="Previous">
                &lt;
              </button>
              <button onClick={handleNextCarousel} className="carousel-arrow-btn" aria-label="Next">
                &gt;
              </button>
            </div>
          </div>

          <div className="recommend-grid">
            {visibleIdols.map((idol, idx) => (
              <div key={idx} className="idol-recommend-card" style={{ '--hover-color': idol.color }}>
                {/* Image Area */}
                <div className="recommend-img-box">
                  {idol.img ? (
                    <img src={idol.img} alt={idol.name} />
                  ) : (
                    <div className="recommend-img-placeholder">
                      <span>{idol.name[0]}</span>
                    </div>
                  )}
                </div>

                {/* Details Area */}
                <div className="recommend-details-box">
                  <div className="recommend-name-bar">
                    <h3>{idol.name}</h3>
                  </div>
                  <div className="recommend-desc-bar">
                    <p>{idol.desc}</p>
                  </div>
                  <Link to="/idols" className="recommend-arrow-btn" aria-label={`View ${idol.name} details`}>
                    &gt;&gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
