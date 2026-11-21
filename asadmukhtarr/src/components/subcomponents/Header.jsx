import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>

            <style>{`
                .pro-navbar {
                    background: linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
                    padding: 0;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.35);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    font-family: 'Poppins', sans-serif;
                }

                /* Thin gold top strip */
                .pro-navbar::before {
                    content: '';
                    display: block;
                    height: 3px;
                    background: linear-gradient(90deg, #8a6d1f, #d4af37, #f5e28c, #d4af37, #8a6d1f);
                }

                .pro-navbar .container {
                    padding-top: 14px;
                    padding-bottom: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* Brand */
                .pro-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    cursor: default;
                }
                .pro-brand-icon {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #d4af37;
                    border-radius: 50%;
                    color: #d4af37;
                    font-size: 18px;
                    background: radial-gradient(circle at center, rgba(212,175,55,0.12), transparent 70%);
                    transition: all 0.4s ease;
                }
                .pro-brand:hover .pro-brand-icon {
                    background: #d4af37;
                    color: #0a0a0a;
                }
                .pro-brand-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }
                .pro-brand-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 22px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    background: linear-gradient(90deg, #d4af37, #f5e28c, #d4af37);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .pro-brand-tagline {
                    font-size: 10px;
                    letter-spacing: 3px;
                    color: #888;
                    text-transform: uppercase;
                    margin-top: 2px;
                }

                /* Menu */
                .pro-menu {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .pro-menu-item {
                    position: relative;
                }
                .pro-menu-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: #e8e8e8;
                    font-size: 13px;
                    font-weight: 500;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    padding: 10px 16px;
                    cursor: default;
                    transition: color 0.3s ease;
                    position: relative;
                }
                .pro-menu-link i {
                    color: #d4af37;
                    font-size: 13px;
                    transition: transform 0.3s ease;
                }
                .pro-menu-link::after {
                    content: '';
                    position: absolute;
                    left: 16px;
                    right: 16px;
                    bottom: 4px;
                    height: 1.5px;
                    background: linear-gradient(90deg, transparent, #d4af37, transparent);
                    transform: scaleX(0);
                    transition: transform 0.35s ease;
                }
                .pro-menu-item:hover .pro-menu-link {
                    color: #f5e28c;
                }
                .pro-menu-item:hover .pro-menu-link i {
                    transform: translateY(-2px);
                }
                .pro-menu-item:hover .pro-menu-link::after {
                    transform: scaleX(1);
                }

                /* Divider between items */
                .pro-menu-item:not(:last-child)::before {
                    content: '';
                    position: absolute;
                    right: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 14px;
                    width: 1px;
                    background: rgba(212, 175, 55, 0.25);
                }

                /* CTA-style Contact item */
                .pro-menu-item.cta .pro-menu-link {
                    border: 1px solid #d4af37;
                    border-radius: 3px;
                    padding: 8px 18px;
                    margin-left: 6px;
                    color: #d4af37;
                }
                .pro-menu-item.cta .pro-menu-link::after {
                    display: none;
                }
                .pro-menu-item.cta:hover .pro-menu-link {
                    background: #d4af37;
                    color: #0a0a0a;
                }
                .pro-menu-item.cta:hover .pro-menu-link i {
                    color: #0a0a0a;
                }

                /* Responsive */
                @media (max-width: 991px) {
                    .pro-menu {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 0;
                        padding: 16px 0;
                    }
                    .pro-menu-item:not(:last-child)::before {
                        display: none;
                    }
                    .pro-menu-link {
                        padding: 12px 8px;
                    }
                    .pro-menu-item.cta .pro-menu-link {
                        margin-left: 0;
                        margin-top: 8px;
                        text-align: center;
                    }
                }
            `}</style>

            <nav className="pro-navbar">
                <div className="container">
                    {/* Brand */}
                    <div className="pro-brand">
                        <div className="pro-brand-icon">
                            <i className="fa fa-diamond" aria-hidden="true"></i>
                        </div>
                        <div className="pro-brand-text">
                            <span className="pro-brand-name">ASAD MUKHTAR</span>
                            <span className="pro-brand-tagline">Premium Collection</span>
                        </div>
                    </div>

                    {/* Menu */}
                    <ul className="pro-menu">
                        <li className="pro-menu-item">
                            <Link to={`/`} className="pro-menu-link text-decoration-none">
                                <i className="fa fa-home" aria-hidden="true"></i>
                                Home
                            </Link>
                        </li>
                        <li className="pro-menu-item">
                            <Link to={`/about`} className="pro-menu-link text-decoration-none">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                About
                            </Link>
                        </li>
                        <li className="pro-menu-item">
                            <Link to={`/products`} className="pro-menu-link text-decoration-none">
                                <i className="fa fa-cubes" aria-hidden="true"></i>
                                Products
                            </Link>
                        </li>
                        <li className="pro-menu-item">
                            <span className="pro-menu-link">
                                <i className="fa fa-tags" aria-hidden="true"></i>
                                Sale
                            </span>
                        </li>
                        <li className="pro-menu-item cta">
                            <Link to={`/contact`} className="pro-menu-link text-decoration-none">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}