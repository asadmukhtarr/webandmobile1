import React from 'react';
import './css/about.css';

export default function About() {
    return (
        <div className="about-container">
            {/* PAGE HEADER */}
            <section className="about-hero">
                <h1 className="about-title">About Us</h1>
                <p className="about-subtitle">The Story Behind Asad Mukhtar Premium Collection</p>
            </section>

            {/* STORY SECTION */}
            <section className="about-story">
                <div className="story-image">
                    <span>Jewelry Workshop Image</span>
                </div>
                <div className="story-content">
                    <h2>Crafting Excellence Since 1998</h2>
                    <p>
                        At Asad Mukhtar Premium Collection, we believe that gold is more than just a metal—it is a legacy.
                        For over two decades, our master craftsmen have been designing timeless pieces that celebrate
                        life's most precious moments.
                    </p>
                    <p>
                        From exquisite bridal sets to everyday elegance, every piece in our collection is meticulously
                        crafted using only the finest 24K and 22K gold, ensuring that your investment lasts for generations.
                    </p>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="values-section">
                <div className="section-header">
                    <h2>Our Core Values</h2>
                    <p>What makes us different</p>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">✦</div>
                        <h3>Uncompromising Purity</h3>
                        <p>Every gram is certified and hallmarked, guaranteeing 100% authenticity.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">✦</div>
                        <h3>Master Craftsmanship</h3>
                        <p>Handcrafted by artisans with decades of experience in fine jewelry.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">✦</div>
                        <h3>Customer First</h3>
                        <p>Personalized service and lifetime support for every valued client.</p>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats-section">
                <div className="stat-box">
                    <h2>25+</h2>
                    <p>Years of Trust</p>
                </div>
                <div className="stat-box">
                    <h2>10k+</h2>
                    <p>Happy Customers</p>
                </div>
                <div className="stat-box">
                    <h2>500+</h2>
                    <p>Unique Designs</p>
                </div>
                <div className="stat-box">
                    <h2>100%</h2>
                    <p>Certified Gold</p>
                </div>
            </section>
        </div>
    );
}