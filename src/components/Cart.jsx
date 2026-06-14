import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CreditCard, ShoppingBag, CheckCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Cart.css';

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveFromCart, onClearCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [receipt, setReceipt] = useState(null);

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitCheckout = (e) => {
    e.preventDefault();
    // Simulate payment transaction
    const transactionId = 'TXN-' + Math.floor(Math.random() * 90000000 + 10000000);
    const date = new Date().toLocaleString();
    
    setReceipt({
      transactionId,
      date,
      items: [...cartItems],
      total,
      billing: { ...formData }
    });

    setCheckoutComplete(true);
    setIsCheckout(false);
    onClearCart(); // empty cart
  };

  const handleCloseReceipt = () => {
    setCheckoutComplete(false);
    setReceipt(null);
    onClose();
  };

  return (
    <div className="cart-overlay animate-fade-in">
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-header-title-wrapper">
            <img src={logoImg} alt="BLT WORLD ENTERTAINMENT" className="cart-header-logo-img" />
            <h3>ตะกร้าสินค้า</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        {checkoutComplete && receipt ? (
          /* Receipt Modal / View */
          <div className="receipt-view">
            <div className="receipt-logo-wrapper">
              <img src={logoImg} alt="BLT WORLD ENTERTAINMENT" className="receipt-logo-img" />
            </div>
            <div className="receipt-success-icon">
              <CheckCircle size={48} color="#ffffff" />
            </div>
            <h4>ยืนยันคำสั่งซื้อสำเร็จ</h4>
            <p className="receipt-subtitle">ขอบคุณสำหรับการสนับสนุนของคุณ ใบเสร็จสั่งซื้อแสดงอยู่ด้านล่างนี้</p>
            
            <div className="receipt-details">
              <div className="receipt-row">
                <span>Receipt Number:</span>
                <strong>{receipt.transactionId}</strong>
              </div>
              <div className="receipt-row">
                <span>Date:</span>
                <strong>{receipt.date}</strong>
              </div>
              <hr />
              <div className="receipt-items">
                {receipt.items.map((item) => (
                  <div key={item.id} className="receipt-item-row">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>{(item.price * item.quantity).toLocaleString()} THB</span>
                  </div>
                ))}
              </div>
              <hr />
              <div className="receipt-row receipt-total">
                <span>Total Paid:</span>
                <strong>{receipt.total.toLocaleString()} THB</strong>
              </div>
              <hr />
              <div className="receipt-billing">
                <h5>Billing Information</h5>
                <p><strong>Name:</strong> {receipt.billing.name}</p>
                <p><strong>Email:</strong> {receipt.billing.email}</p>
                <p><strong>Phone:</strong> {receipt.billing.phone}</p>
                <p><strong>Address:</strong> {receipt.billing.address}</p>
              </div>
            </div>

            <button className="btn-primary w-full mt-4" onClick={handleCloseReceipt}>
              CONTINUE SHOPPING
            </button>
          </div>
        ) : isCheckout ? (
          /* Checkout Form View */
          <form className="checkout-view" onSubmit={handleSubmitCheckout}>
            <h4>BILLING & PAYMENT</h4>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="081-234-5678"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="123 Sukhumvit Rd, Bangkok, 10110"
                rows={2}
              ></textarea>
            </div>

            <div className="payment-section">
              <h5>Card Details</h5>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="4111 2222 3333 4444"
                  maxLength={19}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cardExpiry">Expiry (MM/YY)</label>
                  <input
                    id="cardExpiry"
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                    placeholder="12/28"
                    maxLength={5}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardCvc">CVC</label>
                  <input
                    id="cardCvc"
                    type="password"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    required
                    placeholder="***"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>

            <div className="checkout-summary">
              <div className="receipt-row">
                <span>Total:</span>
                <strong>{total.toLocaleString()} THB</strong>
              </div>
            </div>

            <div className="checkout-actions">
              <button type="button" className="btn-secondary" onClick={() => setIsCheckout(false)}>
                BACK
              </button>
              <button type="submit" className="btn-primary">
                PAY NOW
              </button>
            </div>
          </form>
        ) : (
          /* Normal Cart List View */
          <div className="cart-content-wrapper">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={48} className="empty-icon" />
                <p>Your shopping cart is currently empty.</p>
                <button className="btn-primary mt-4" onClick={onClose}>
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-details">
                        <span className="cart-item-category">{item.category}</span>
                        <h4>{item.name}</h4>
                        <span className="cart-item-price">{item.price.toLocaleString()} THB</span>
                      </div>
                      
                      <div className="cart-item-actions">
                        <div className="qty-controls">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          className="delete-item-btn"
                          onClick={() => onRemoveFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total-row">
                    <span>Total Amount:</span>
                    <strong>{total.toLocaleString()} THB</strong>
                  </div>
                  <button className="btn-primary checkout-btn" onClick={() => setIsCheckout(true)}>
                    <CreditCard size={16} className="mr-2" />
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
