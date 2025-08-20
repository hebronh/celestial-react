import { useState } from "react";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [page, setPage] = useState("landing"); 
  const products = Array.from({ length: 12 }, (_, i) => i);


  /*const products = [
    { id: 1, name: "ESSENTIAL_KNIT.HAT", price: "$85.00", img: "IMG_001.JPG" },
    { id: 2, name: "OVERSIZED_HOODIE.BLACK", price: "$195.00", img: "IMG_002.JPG" },
    { id: 3, name: "CARGO_PANTS.TECH", price: "$245.00", img: "IMG_003.JPG" },
    { id: 4, name: "GRAPHIC_TEE.LIMITED", price: "$75.00", img: "IMG_004.JPG" },
    { id: 5, name: "BOMBER_JACKET.NYLON", price: "$325.00", img: "IMG_005.JPG" },
    { id: 6, name: "SNEAKERS.MINIMALIST", price: "$285.00", img: "IMG_006.JPG" },
  ];*/

  /*const handleAddToCart = (e) => {
    setCartCount(cartCount + 1);
    const btn = e.target;
    btn.textContent = "ADDED!";
    btn.style.background = "#ff0040";
    btn.style.borderColor = "#ff0040";
    btn.style.color = "#ffffff";
    setTimeout(() => {
      btn.textContent = "ADD_TO_CART()";
      btn.style.background = "#ffffff";
      btn.style.borderColor = "#000000";
      btn.style.color = "#000000";
    }, 1000);
  };
*/
  return (
    <>
      {page === "landing" && (
        <main id="landing-page" className="main-container" onClick={() => setPage("shop")}>
          <div className="info-section"></div>
          <div className="bottom-info"></div>
        </main>
      )}

      {page === "shop" && (
        <main className="shop-container" id="shop-page">
          <div className="shop-header">
           <img src="/webscript.png" alt="Celestial Logo" className="logo" />
          </div>

          <div className="product-grid">
            {products.map((p) => (
              <div className="product-item" key={p.id}>
                <div className="product-image">{p.img}</div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.price}</p> 

                </div>
              </div>
            ))}
          </div>

          <div className="shop-footer">
            <p>
            </p>

          </div>  
          <div id="landing-page">
      {/* Header / Logo */}
      <header className="top-section">
        <img src="/webscript.png" alt="Celestial Logo" className="logo" />
      </header>

      {/* Product Grid directly under logo */}
      <div className="shop-page">
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
      </div>
    </div>
        </main>
      )}
    </>
  );
}
