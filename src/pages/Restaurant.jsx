import React from 'react';
import { MapPin, Clock, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import boruyaLogo from '../assets/boruya_logo.png';
import blacknekoLogo from '../assets/blackneko_logo.png';
import './Restaurant.css';

export default function Restaurant() {
  const restaurants = [
    {
      id: 'boruya',
      name: 'BORUYA SUSHI',
      logo: boruyaLogo,
      sub: 'เอโดมาเอะซูชิดั้งเดิมระดับพรีเมียม',
      desc: 'สัมผัสสุนทรียศาสตร์แห่งการทานซูชิแบบเอโดมาเอะดั้งเดิม (Edomae) ที่เน้นการดึงรสชาติที่แท้จริงของวัตถุดิบออกมาอย่างสูงสุด อาหารทะเลสดใหม่ส่งตรงจากตลาดปลาโทโยสุ ประเทศญี่ปุ่น ปั้นอย่างประณีตโดยเชฟผู้มีประสบการณ์ในบรรยากาศที่เงียบสงบเรียบหรูและเป็นส่วนตัว',
      location: 'MBK CENTER 7th Floor A17/1, 444 Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330',
      hours: 'เปิด 11:00 AM – ปิด 11:30 PM',
      contact: 'โทร. 094-660-4343',
      highlights: [
        'วัตถุดิบนำเข้าจากตลาดปลาโทโยสุ 100% สดใหม่ทุกวัน',
        'ข้าวซูชิหุงด้วยน้ำส้มสายชูแดงปรุงพิเศษสูตรเฉพาะของร้าน',
        'ประสบการณ์คอร์สโอมากาเสะระดับไฟน์ไดนิ่งแบบเป็นส่วนตัว'
      ]
    },
    {
      id: 'blackneko',
      name: 'BLACKNEKO',
      logo: blacknekoLogo,
      sub: 'อาหารญี่ปุ่นฟิวชั่นร่วมสมัยสไตล์นัวร์',
      desc: 'มิติใหม่ของการทานอาหารญี่ปุ่นฟิวชั่นที่ผสานรสชาติดั้งเดิมเข้ากับความคิดสร้างสรรค์อันล้ำสมัย โดดเด่นด้วยเมนูซูชิและทาปาสสไตล์โมเดิร์น เสิร์ฟพร้อมซอสทรัฟเฟิลสูตรพิเศษและไข่ปลาคาเวียร์ชั้นเลิศ ท่ามกลางบรรยากาศเลานจ์สีดำสุดเท่และเสียงเพลงแจ๊สร่วมสมัย',
      location: '7th Floor, MBK Center, Wang Mai, Pathum Wan, Bangkok 10330',
      hours: 'เปิด 5:00 PM – ปิด 12:00 AM (Closed จนกว่าจะเปิด 5 PM)',
      contact: 'Line: @blacknekolounge',
      highlights: [
        'เมนูฟิวชั่นสร้างสรรค์โดยเชฟระดับประเทศ',
        'บาร์เครื่องดื่ม ค็อกเทลสูตรพิเศษ และไวน์คอลเลกชันนำเข้า',
        'เพลิดเพลินกับทิวทัศน์กรุงเทพฯ แบบพาโนรามาจากชั้นดาดฟ้า'
      ]
    }
  ];

  return (
    <div className="restaurant-page page-enter container">
      {restaurants.map((rest, index) => (
        <div key={rest.id} className="restaurant-showcase-card card-premium">
          <div className={`restaurant-showcase-grid ${index % 2 === 1 ? 'grid-reverse' : ''}`}>
            {/* Left Side: Overview & Story */}
            <div className="showcase-left">
              {rest.logo && (
                <div className="restaurant-logo-container">
                  <img src={rest.logo} alt={`${rest.name} Logo`} className="restaurant-showcase-logo" />
                </div>
              )}
              <span className="brand-sub">{rest.sub}</span>
              <h1 className="restaurant-title">{rest.name}</h1>
              <p className="restaurant-desc">{rest.desc}</p>
              
              <div className="highlights-box">
                <h3>จุดเด่นหลักของร้าน</h3>
                <ul>
                  {rest.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <Sparkles size={16} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Operational Details */}
            <div className="showcase-right">
              <div className="details-card">
                <h3>ข้อมูลและการติดต่อ</h3>
                
                <div className="info-row">
                  <MapPin size={18} className="info-icon" />
                  <div className="info-text">
                    <strong>ที่ตั้งร้าน</strong>
                    <p>{rest.location}</p>
                  </div>
                </div>

                <div className="info-row">
                  <Clock size={18} className="info-icon" />
                  <div className="info-text">
                    <strong>เวลาให้บริการ</strong>
                    <p>{rest.hours}</p>
                  </div>
                </div>



                <div className="info-row">
                  <PhoneCall size={18} className="info-icon" />
                  <div className="info-text">
                    <strong>ติดต่อสำรองที่นั่ง</strong>
                    <p>{rest.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
