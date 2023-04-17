import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-top-items">
          <div>Free Returns</div>
          <div>24 Hr Dispatch</div>
          <div>Offers</div>
          <div>Blog</div>
        </div>
        <div className="navbar-top-items">
          <div>+44(0)1613125767</div>
          <div>Help</div>
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
      <div className="navbar-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-logo">
        <img src="/src/assets/specscart-nav.png" />
      </div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-left-items">
          <div className="navbar-bottom-item">Glasses</div>
          <div className="navbar-bottom-item">Sunglasses</div>
          <div className="navbar-bottom-item">Try At Home</div>
          <div className="navbar-bottom-item">Eye-Test</div>
        </div>
        <div className="navbar-bottom-right-items">
          <img src="/src/assets/search.png" alt="search" />
          <img src="/src/assets/profile.png" alt="profile" />
          <img src="/src/assets/wishlist.png" alt="wishlist" />
          <img src="/src/assets/home.png" alt="home" />
          <img src="/src/assets/cart.png" alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
