import React from 'react';
import "./css/home.css";

export default function Home() {
    return (
        <div className="home-container">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Timeless Elegance in Every Gram</h1>
                    <p className="hero-subtitle">
                        Discover our exclusive premium gold collection. Crafted for those who appreciate the finer things in life.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Shop Collection</button>
                        <button className="btn-secondary">Explore Gold Rates</button>
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCTS SECTION */}
            <section className="featured-section">
                <div className="section-header">
                    <h2>Premium Collection</h2>
                    <p>Handpicked pieces for your special moments</p>
                </div>

                <div className="product-grid">
                    {/* Product 1 */}
                    <div className="product-card">
                        <div className="product-image-placeholder">
                            <span>Gold Ring Image</span>
                        </div>
                        <div className="product-info">
                            <h3>Imperial Gold Ring</h3>
                            <p className="price">$1,250.00</p>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="product-card">
                        <div className="product-image-placeholder">
                            <span>Gold Necklace Image</span>
                        </div>
                        <div className="product-info">
                            <h3>Royal Heritage Necklace</h3>
                            <p className="price">$3,400.00</p>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="product-card">
                        <div className="product-image-placeholder">
                            <span>Gold Bracelet Image</span>
                        </div>
                        <div className="product-info">
                            <h3>Classic Gold Bracelet</h3>
                            <p className="price">$850.00</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="features-section">
                <div className="feature-box">
                    <h3>Certified 24K & 22K</h3>
                    <p>Every piece comes with a hallmark certificate guaranteeing purity.</p>
                </div>
                <div className="feature-box">
                    <h3>Secure Shipping</h3>
                    <p>Fully insured and discreet delivery straight to your door.</p>
                </div>
                <div className="feature-box">
                    <h3>Lifetime Buyback</h3>
                    <p>100% exchange value on gold, ensuring your investment is always safe.</p>
                </div>
            </section>
        </div>
    );
}