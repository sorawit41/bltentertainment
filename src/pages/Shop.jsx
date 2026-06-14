import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import './Shop.css';

export default function Shop({ addToCart, onCartOpen, cartCount }) {
  const showComingSoon = true;
  const categories = ['All', 'Merch', 'VJ Tickets', 'Boruya Sushi', 'Event Booking'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 'lightstick_neov',
      name: 'NEO-V Official Lightstick (Version 1)',
      price: 1890,
      category: 'Merch',
      desc: 'Synchronized LED lightstick with virtual-crossover Bluetooth control.'
    },
    {
      id: 'photobook_eclipse',
      name: 'Eclipse Special Album & Photobook',
      price: 1290,
      category: 'Merch',
      desc: '120-page gothic-themed studio album photobook featuring lyrics and posters.'
    },
    {
      id: 'tshirt_aura',
      name: 'Aura Minimalist Logo Tee (White)',
      price: 790,
      category: 'Merch',
      desc: '100% heavy cotton oversized t-shirt in natural raw-white color.'
    },
    {
      id: 'vj_vip_pass',
      name: 'VJ Roster Fan-Meet Ticket (VIP)',
      price: 3500,
      category: 'VJ Tickets',
      desc: 'VIP entry pass for the exclusive Q3 VJ agency meet-and-greet event in Bangkok.'
    },
    {
      id: 'tiktok_gift_pack',
      name: 'BLT TikTok Live Streamer Box',
      price: 990,
      category: 'VJ Tickets',
      desc: 'Exclusive mug, desk mat, and virtual TikTok star gift vouchers.'
    },
    {
      id: 'sushi_omakase_voucher',
      name: 'Boruya Sushi Omakase Course Voucher',
      price: 4500,
      category: 'Boruya Sushi',
      desc: 'Gift voucher for 1 reservation seat for the 16-Course Omakase dining experience.'
    },
    {
      id: 'blackneko_premium_set',
      name: 'Blackneko Premium Sashimi Voucher',
      price: 2200,
      category: 'Boruya Sushi',
      desc: 'Voucher redeemable for a chef-curated premium sashimi selection box.'
    },
    {
      id: 'outing_package_basic',
      name: 'Team Building Outing Consultation',
      price: 5000,
      category: 'Event Booking',
      desc: 'Full 1-hour briefing, custom itinerary design, and site scouting proposal.'
    },
    {
      id: 'outdoor_camp_rental',
      name: 'Outdoor Activities Equipment Pass',
      price: 1500,
      category: 'Event Booking',
      desc: 'Pass redeemable for glamping tent rental or survival obstacle gear during outings.'
    }
  ];

  // Filtering logic
  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (showComingSoon) {
    return (
      <div className="shop-page page-enter container shop-coming-soon-container">
        <div className="shop-coming-soon-card card-premium">
          <span className="coming-soon-badge">COMING SOON</span>
          <h1 className="coming-soon-title">BLT STORE</h1>
          <p className="coming-soon-desc">
            เตรียมพบกับร้านค้าออนไลน์ จำหน่ายสินค้าลิขสิทธิ์แท้
            <br />
            ของที่ระลึกศิลปิน และบัตรของขวัญร้านอาหาร เร็วๆ นี้
          </p>
          <div className="coming-soon-icon">
            <ShoppingBag size={48} className="pulse-icon-coming" />
          </div>
          <Link to="/" className="btn-primary coming-soon-btn">
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-page page-enter container">
      {/* Header */}
      <div className="section-header shop-header">
        <h1>BLT STORE</h1>
        <p className="section-subtitle">Purchase official band merchandise, VIP dining vouchers, and event planning passes.</p>
      </div>

      {/* Filters & Search Row */}
      <div className="shop-controls">
        {/* Horizontal Categories */}
        <div className="shop-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`shop-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Cart Actions Group */}
        <div className="shop-actions-group">
          <div className="shop-search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="SEARCH PRODUCTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="shop-cart-btn" onClick={onCartOpen} aria-label="View Cart">
            <ShoppingBag size={16} />
            <span>CART ({cartCount})</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card card-premium">
              <div className="product-info-top">
                <span className="product-category">{product.category}</span>
                <span className="product-price">{product.price.toLocaleString()} THB</span>
              </div>
              
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              
              <button className="btn-primary w-full mt-4" onClick={() => addToCart(product)}>
                <ShoppingBag size={14} className="mr-2" />
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
