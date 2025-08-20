import { useState } from "react";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [page, setPage] = useState("landing"); 

  const products = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <>
      {page === "landing" && (
        <main
          id="landing-page"
          className="main-container"
          onClick={() => setPage("shop")}
        >
          <div className="info-section"></div>
          <div className="bottom-info"></div>
        </main>
      )}

      {page === "shop" && (
        <main className="shop-container" id="shop-page">
          {/* Logo */}
          <div className="shop-header">
            <img src="/webscript.png" alt="Celestial Logo" className="logo" />
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {products.map((id) => (
              <div key={id} className="product-card">
                <div className="image-container">
                  <img src="/imagedemo.png" alt="product" className="front" />
                  <img src="/imagedemo2.png" alt="product hover" className="back" />
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
}
