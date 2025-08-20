import { useState } from "react";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [page, setPage] = useState("landing");  
  const [galleryIndex, setGalleryIndex] = useState(1); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
  { id: 1, name: "Product 1", price: "$85.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
  { id: 2, name: "Product 2", price: "$95.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png" },
  { id: 3, name: "Product 3", price: "$75.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
  { id: 4, name: "Product 4", price: "$120.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png" },   
  { id: 5, name: "Product 5", price: "$150.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
  { id: 6, name: "Product 6", price: "$90.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png" },
  { id: 7, name: "Product 7", price: "$110.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
  { id: 8, name: "Product 8", price: "$130.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png" },
  { id: 9, name: "Product 9", price: "$70.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
  { id: 10, name: "Product 10", price: "$95.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
  { id: 11, name: "Product 11", price: "$80.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png" },
  { id: 12, name: "Product 12", price: "$100.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png" },
];

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

    {page === "inquiries" && (
  <main className="inquiries-container"> 
  <div className="inquiries-header">
  <button className="back-button" onClick={() => setPage("shop")}>
    Back
  </button>
</div>
    <div className="inquiries-form-wrapper">
      <h1 className="inquiries-title">FOR ANY INQUIRIES,</h1>

      <form
        className="inquiries-form"
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const subject = e.target.subject.value;
          const message = e.target.message.value;

          window.location.href = `mailto:maruderyang@gmail.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent("From: " + email + "\n\n" + message)}`;
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email:"
          className="inquiries-input"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject:"
          className="inquiries-input"
          required
        />
        <textarea
          name="message"
          placeholder="Message:"
          className="inquiries-textarea"
          required
        />
        <button type="submit" className="inquiries-send">
          SEND
        </button>
      </form>
    </div>
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

{page === "productDetail" && selectedProduct && (
  <main className="product-detail-container">
    <div className="product-detail-header">
      <button className="back-button" onClick={() => setPage("shop")}>
        Back
      </button>
    </div>

    <div className="product-detail-content">
      {/* Product Image */}
      <img
        src={selectedProduct.imgFront}
        alt={selectedProduct.name}
        className="product-detail-image"
      />

      {/* Bottom section with product info and controls */}
      <div className="product-detail-bottom">
        <div className="product-info-section">
          <h2 className="product-name">{selectedProduct.name}</h2>
          <p className="product-price">{selectedProduct.price}</p>
          
          <div className="size-options-horizontal">
            <button className="size-button">1</button>
            <button className="size-button">2</button>
            <button className="size-button">3</button>
          </div>
        </div>

        <div className="product-action-buttons-horizontal">
          <button className="back-button" onClick={() => setPage("shop")}>
            Back
          </button>
          <button className="checkout-button">Checkout</button>
          <button
            className="add-to-cart-button"
            onClick={() => setCartCount(cartCount + 1)}
          >
            Add to Cart
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

      <div className="product-grid">
{products.map((p) => (
    <div
      key={p.id}
      className="product-card"
      onClick={() => {
        setSelectedProduct(p);
        setPage("productDetail");
      }}
    >
      <div className="image-container">
        <img src={p.imgFront} alt={p.name} className="front" />
        <img src={p.imgBack} alt={p.name} className="back" />
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
