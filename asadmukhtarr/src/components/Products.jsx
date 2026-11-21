import React, { useState } from 'react';
import './css/products.css';

// Sample Data - Replace with your actual database/API data later
const productsData = [
    { id: 1, name: 'Imperial Gold Ring', category: 'Rings', price: '$1,250.00', weight: '8.5g', karat: '22K' },
    { id: 2, name: 'Royal Heritage Necklace', category: 'Necklaces', price: '$3,400.00', weight: '25g', karat: '24K' },
    { id: 3, name: 'Classic Gold Bracelet', category: 'Bracelets', price: '$850.00', weight: '6g', karat: '22K' },
    { id: 4, name: 'Bridal Gold Earrings', category: 'Earrings', price: '$1,100.00', weight: '7g', karat: '22K' },
    { id: 5, name: 'Minimalist Gold Band', category: 'Rings', price: '$450.00', weight: '3.5g', karat: '18K' },
    { id: 6, name: 'Queen\'s Gold Chain', category: 'Necklaces', price: '$2,800.00', weight: '18g', karat: '24K' },
    { id: 7, name: 'Twisted Gold Bangle', category: 'Bracelets', price: '$1,500.00', weight: '12g', karat: '22K' },
    { id: 8, name: 'Jhumka Gold Earrings', category: 'Earrings', price: '$950.00', weight: '5g', karat: '22K' },
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('All');

    // Filter products based on selected category
    const filteredProducts = activeCategory === 'All'
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <div className="products-container">
            {/* PAGE HEADER */}
            <section className="products-header">
                <h1 className="products-title">Our Premium Collection</h1>
                <p className="products-subtitle">
                    Explore our finest selection of certified 18K, 22K, and 24K gold jewelry.
                </p>
            </section>

            {/* CATEGORY FILTER */}
            <div className="filter-container">
                {['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'].map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* PRODUCT GRID */}
            <section className="products-grid-section">
                {filteredProducts.length > 0 ? (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image-placeholder">
                                    <span>{product.category} Image</span>
                                    <div className="karat-badge">{product.karat}</div>
                                </div>

                                <div className="product-info">
                                    <p className="product-category">{product.category}</p>
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-weight">Weight: {product.weight}</p>

                                    <div className="product-footer">
                                        <span className="product-price">{product.price}</span>
                                        <button className="add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-products">No products found in this category.</p>
                )}
            </section>
        </div>
    );
}