import React, { useState } from 'react';
import { Disc, ExternalLink, Globe, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Idols.css';
import nekowinkLogo from '../image3.png';
import hisserLogo from '../assets/hisser.official_3750407550971023746.webp';

// Nekowink member photos
import nkw1 from './idol/637479015_122122922565044109_8887153657953692429_n.jpg';
import nkw2 from './idol/641283972_122122820589044109_9098858786104684431_n.jpg';
import nkw3 from './idol/641424241_122123156313044109_2348104730907222243_n.jpg';
import nkw4 from './idol/641642312_122123059725044109_4533640108672016653_n.jpg';
import nkw5 from './idol/642350367_122123254947044109_3787483135081983527_n.jpg';
import nkw6 from './idol/642764479_122123406183044109_5476955826149977402_n.jpg';
import nkw7 from './idol/643910046_122123507829044109_1541260632037446351_n.jpg';
import nkw8 from './idol/654210016_122125918065044109_5562220628365902512_n.jpg';

// Hisser member photos
import hsr1 from "./idol/hisser/hisser.official_3828624751947066563's2026-6-15-1.28.681 story.webp";
import hsr2 from "./idol/hisser/hisser.official_3828627560729855508's2026-6-15-1.28.215 story.webp";
import hsr3 from "./idol/hisser/hisser.official_3828630533459573611's2026-6-15-1.28.807 story.webp";
import hsr4 from "./idol/hisser/hisser.official_3872342638662242209's2026-6-15-1.28.758 story.jpg";
import hsr5 from "./idol/hisser/hisser.official_3872346461954846593's2026-6-15-1.28.975 story.jpg";

export default function Idols() {
  const [activeGroup, setActiveGroup] = useState('nekowink');

  const groups = {
    nekowink: {
      id: 'nekowink',
      name: 'NEKOWINK',
      concept: 'CYBER SYNTH-POP',
      tagline: '⋆˚🐾˖° 𝓝𝓮𝓴𝓸𝔀𝓲𝓷𝓴 ≽^•༚• ྀི≼⋆',
      desc: 'สวัสดีค่า พวกเรา "NekoWink" ✨\nวงไอดอลน้องใหม่จาก Blackneko Idol and Bar MBK ชั้น 7 🎶\nวงเล็กๆ ที่เกิดขึ้นจากความตั้งใจและความรักในเสียงเพลง ความน่ารัก และพลังแห่งรอยยิ้ม จากเจ้าแมวน้อย 💖\n\nในตอนนี้ NekoWink มีเทรนนี่จำนวน 7 คน ที่กำลังฝึกฝนอย่างตั้งใจ\nเพื่อเตรียมก้าวขึ้นสู่เวทีในฐานะไอดอลที่พร้อมส่งพลังบวกให้กับทุกคน ✨\nแต่ละคนต่างมีความฝัน ความพยายาม และเสน่ห์เฉพาะตัว\nสิ่งที่เหมือนกันคือ "หัวใจที่อยากจะมอบความสุขให้แฟนๆ" 🐱💫\n\nเส้นทางนี้อาจไม่ง่าย แต่ด้วยกำลังใจจากทุกคน\nพวกเราจะเติบโตไปทีละก้าว พร้อมสร้างรอยยิ้ม เสียงหัวเราะ และความทรงจำดีๆ ร่วมกัน 💕\n\nมาร่วมเป็นส่วนหนึ่งของการเดินทางครั้งนี้ไปกับพวกเราเถนะนะ\nเพราะทุกการสนับสนุนของทุกคน คือแสงสว่างที่ทำให้ NekoWink ก้าวต่อไปได้เสมอ 🌟\n\n#NekoWink #Blackneko #IdolThai',
      releasedSingle: 'DAISUKI NYAN! (Official MV)',
      spotifyLink: 'https://youtu.be/OV4_7fKmrXs?list=RDOV4_7fKmrXs',
      mvEmbed: 'https://www.youtube.com/embed/OV4_7fKmrXs?autoplay=0&controls=1&rel=0&modestbranding=1',
      logo: nekowinkLogo,
      colorTheme: '#ff44aa',
      socials: [
        { name: 'Website', url: 'https://www.likqmusic.com/nekowink' },
        { name: 'Instagram', url: 'https://www.instagram.com/nekowink.idol/' },
        { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61581323279931' }
      ],
      workContact: '093-6619254 (k.maywa)',
      members: [
        { name: 'Rosalyn', role: 'Leader, Main Rapper', age: 21, img: nkw1, bio: 'The charismatic villain-coded leader. Fierce stage presence and signature red bow aesthetic.' },
        { name: 'Moolek', role: 'Main Vocalist', age: 20, img: nkw2, bio: 'Yellow-cat energy with a warm, powerful voice. Known for her playful personality.' },
        { name: 'Marin', role: 'Lead Dancer, Sub Vocalist', age: 22, img: nkw3, bio: "Founder of the group's iconic lock-step choreography. Former underground dance champion." },
        { name: 'Yuki', role: 'Main Dancer, Visual', age: 19, img: nkw4, bio: 'The ace of Nekowink. Cat-eye visuals, fluid movement, and an effortless cool.' },
        { name: 'Poka', role: 'Sub Vocalist, Dancer', age: 20, img: nkw5, bio: 'Blue-sky dreamer with a crystalline vocal range and airy choreography style.' },
        { name: 'Rei', role: 'Sub Vocalist, Rapper', age: 21, img: nkw6, bio: 'Pink energy powerhouse — fierce delivery, magnetic stage presence, and sharp fashion sense.' },
        { name: 'Ayumi', role: 'Main Rapper, Visual', age: 20, img: nkw7, bio: 'Hauntingly calm on stage. The mystery cat of Nekowink with a purple-tinted aura.' },
        { name: 'Aina', role: 'Vocalist, Center', age: 19, img: nkw8, bio: 'The gentle heart of Nekowink. Green-themed visuals and a soothing presence that grounds the group.' },
      ]
    },
    hisser: {
      id: 'hisser',
      name: 'HISSER',
      concept: 'FUTURE ELECTRO-POP',
      tagline: 'FEEL THE FREQUENCY.',
      desc: 'Hisser is a high-energy idol group blending Future Electro-Pop with pulsating synth-beat rhythms and striking vocal harmonies. Their debut broke records and they continue to set trends in the Thai music scene.',
      releasedSingle: 'BAD IDEA ( Music Video )',
      spotifyLink: 'https://www.youtube.com/watch?v=mQZtYeqGv0k',
      mvEmbed: 'https://www.youtube.com/embed/mQZtYeqGv0k?autoplay=0&controls=1&rel=0&modestbranding=1',
      logo: hisserLogo,
      colorTheme: '#00e5ff',
      socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/hisser.official/' }
      ],
      workContact: '093-6619254 (k.maywa)',
      members: [
        { name: 'Rhea', role: 'Vocalist', age: 20, img: hsr1, bio: '' },
        { name: 'Vicky', role: 'Dancer', age: 20, img: hsr2, bio: '' },
        { name: 'Ruby', role: 'Rapper', age: 20, img: hsr3, bio: '' },
        { name: 'Rayne', role: 'Visual', age: 20, img: hsr4, bio: '' },
        { name: 'Rayla', role: 'Vocalist', age: 20, img: hsr5, bio: '' }
      ]
    },
    losteden: {
      id: 'losteden',
      name: 'LOSTEDEN',
      concept: 'DARK AMBIENT & ETHEREAL DREAMCORE',
      tagline: 'LOST IN THE GARDEN OF SOUND.',
      desc: "Losteden is BLT's most mysterious and atmospheric group. Their music weaves dark ambient textures with dreamy vocal layering, creating an immersive sonic world unlike any other idol act.",
      releasedSingle: 'EDEN FALLS (June 2026)',
      spotifyLink: null,
      mvEmbed: null,
      colorTheme: '#9b59ff',
      socials: [],
      workContact: '',
      members: [
        { name: 'VALE', role: 'Leader, Main Vocalist', age: 23, img: null, bio: 'Classically trained with a voice that echoes across vast soundscapes. The emotional anchor of Losteden.' },
        { name: 'NAEL', role: 'Main Composer, Sub Vocalist', age: 22, img: null, bio: 'Produces all Losteden tracks in-house. Expert in ambient synthesis and layered reverb architecture.' },
        { name: 'IRIS', role: 'Main Dancer, Visual', age: 20, img: null, bio: "Interpretive movement artist whose slow, deliberate choreography mirrors the group's ethereal soundscape." }
      ]
    }
  };

  const active = groups[activeGroup];

  return (
    <div className="idols-page page-enter container">
      {/* Title Header */}
      <div className="section-header idols-header">
        <h1>BLT ROSTER</h1>
        <p className="section-subtitle">Meet our premier idol groups crafting distinct musical universes.</p>
      </div>

      {/* Group Switcher Tabs */}
      <div className="group-tabs">
        {Object.values(groups).map((group) => (
          <button
            key={group.id}
            className={`group-tab-btn ${activeGroup === group.id ? 'active' : ''}`}
            onClick={() => setActiveGroup(group.id)}
          >
            {group.name}
          </button>
        ))}
      </div>

      {/* Group Detail Showcase */}
      {/* Group Detail Showcase */}
      {activeGroup === 'losteden' ? (
        <div className="group-showcase card-premium losteden-coming-soon">
          <div className="coming-soon-inner">
            <span className="coming-soon-badge">COMING SOON</span>
            <h2>LOSTEDEN</h2>
            <div className="coming-soon-concept">{active.concept}</div>
            <p className="coming-soon-desc">
              เตรียมพบกับการเปิดตัวอย่างเป็นทางการของวงไอดอลสายดนตรีลึกลับ
              <br />
              <strong>{active.name}</strong> ({active.concept}) เร็วๆ นี้
            </p>
            <div className="coming-soon-icon">
              <Disc size={48} className="pulse-icon-coming" />
            </div>
          </div>
        </div>
      ) : (
        <div className="group-showcase card-premium">
          <div className="group-info">
            {/* Group Logo — show only when group has a logo */}
            {active.logo && (
              <div className="group-logo-wrapper">
                <img src={active.logo} alt={`${active.name} Logo`} className="group-logo-img" />
              </div>
            )}
            <div className="group-concept-tag">{active.concept}</div>
            <h2>{active.name}</h2>
            <p className="group-tagline">"{active.tagline}"</p>
            <p className="group-desc">{active.desc}</p>

            {/* Latest Release Panel */}
            <div className="latest-release">
              <div className="release-icon">
                <Disc size={20} className="spinning-disc" />
              </div>
              <div className="release-details">
                <span>LATEST SINGLE RELEASE</span>
                <h4>{active.releasedSingle}</h4>
              </div>
              {active.spotifyLink && active.spotifyLink !== '#' && (
                <a href={active.spotifyLink} className="release-btn" target="_blank" rel="noopener noreferrer">
                  WATCH MV <ExternalLink size={12} />
                </a>
              )}
            </div>

            {/* Contact Channels */}
            {((active.socials && active.socials.length > 0) || active.workContact) && (
              <div className="group-contact-section">
                <h3>ช่องทางติดต่อ</h3>
                <div className="group-contact-buttons">
                  {active.socials && active.socials.map((social, sIdx) => (
                    <a key={sIdx} href={social.url} target="_blank" rel="noopener noreferrer" className="btn-social-contact">
                      {social.name === 'Website' && <Globe size={14} />}
                      {social.name === 'Instagram' && <FaInstagram size={14} />}
                      {social.name === 'Facebook' && <FaFacebook size={14} />}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
                {active.workContact && (
                  <div className="group-work-contact">
                    <Mail size={14} />
                    <span>ติดต่องาน: {active.workContact}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Group Member Profiles */}
          <div className="members-section">
            <h3>MEMBER ROSTER</h3>
            <div className="members-grid">
              {active.members.map((member, idx) => (
                <div key={idx} className="member-card">
                  <div className="member-photo-placeholder">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="member-photo-img" />
                    ) : (
                      <span className="member-initial">{member.name[0]}</span>
                    )}
                  </div>
                  <div className="member-meta">
                    <h4>{member.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* OUR MV — full width below showcase */}
      {active.mvEmbed && (
        <div className="group-mv-section">
          <div className="group-mv-header">
            <span className="mv-label">OUR MV</span>
            {active.logo && (
              <img src={active.logo} alt={`${active.name} Logo`} className="mv-header-logo" />
            )}
            <h3>{active.name} — {active.releasedSingle}</h3>
          </div>
          <div className="mv-iframe-wrapper">
            <iframe
              src={active.mvEmbed}
              title={`${active.name} Official MV`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
