import { useState } from "react";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [page, setPage] = useState("landing");  
  const [galleryIndex, setGalleryIndex] = useState(1);


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

   {page === "gallery" && (
  <main className="gallery-container">
    <div className="gallery-content">
      {/* Image */}
      <img
        src={`/gallerydemo${galleryIndex}.png`}
        alt="Gallery Item"
        className="gallery-image"
      />

      {/* Bottom Bar with controls + caption */}
      <div className="gallery-bottom">
        <div className="gallery-controls">
          <button
            className="arrow-button"
            onClick={() =>
              setGalleryIndex((prev) => (prev === 1 ? 3 : prev - 1))
            }
          >
            {"<-"}
          </button>
          <span className="gallery-counter">{galleryIndex}/3</span>
          <button
            className="arrow-button"
            onClick={() =>
              setGalleryIndex((prev) => (prev === 3 ? 1 : prev + 1))
            }
          >
            {"->"}
          </button>
        </div>

        <div className="gallery-caption">
          Celestial Camouflage Collection 1&nbsp; 25/28
        </div> 
        <div className="gallery-header"> 
          <button className="back-button" onClick={() => setPage("shop")}> 
            Back 
            </button> 
            </div>

      </div>
    </div>
  </main>
)}

      {page === "shop" && (
  <main className="shop-container" id="shop-page">
    {/* Logo */}
    <div className="shop-header">
      <img src="/webscript.png" alt="Celestial Logo" className="logo" />
    </div>   

    {/* Sidebar + Product Grid container */}
    <div className="shop-content"> 
      <div className="sidebar"> 
        <button className="sidebar-button" onClick={() => setPage("inquiries")}> 
          Inquiries
        </button> 
        <button className="sidebar-button" onClick={() => setPage("gallery")}> 
          Gallery
        </button> 
        <button className="sidebar-button" onClick={() => setPage("cart")}> 
          Cart
        </button> 
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="image-container">
              <img src="/imagedemo.png" alt="product" className="front" />
              <img src="/imagedemo2.png" alt="product hover" className="back" />
            </div>
          </div>
        ))}
      </div>
    </div> {/* closes shop-content */}
  </main>
)}
    </>
  );
}
