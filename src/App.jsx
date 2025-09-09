import { useState, useEffect } from "react";
import "./App.css";

function WaitingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <main className="waiting-page">
      <div className="waiting-box"> 
        
        <h1 className="waiting-logo"> 
           <span className="star">★</span> CELESTIAL. <span className="star">★</span> 
        </h1>

        <p className="waiting-description">
          Every Piece is Worked Meticulously.<br />
          Thus It Will Take Some Time.<br />
          But In Doing So, You May Wear It<br />
          At the Right Time, For the Rest of Time.
        </p>

        <p className="waiting-lookbook">Collection 1 Lookbook Soon.</p>

        <form onSubmit={handleSubmit} className="waiting-form">
          <label className="waiting-label">EMAIL:</label>
          <input
            type="email"
            className="waiting-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>

        <p className="waiting-footer">CELESTIAL CAMOUFLAGE</p>
      </div>
    </main>
  );
}


export default function App() { 
  /* WAITING PAGE COMPONENT - CHANGE WAITING TO LANDING TO LAUNCH SITE*/ 
  const [page, setPage] = useState("waiting"); // was "landing" 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "true") {
      setPage("landing"); // bypass waiting page
    }
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(1); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [cart, setCart] = useState([]); 
  const [selectedSize, setSelectedSize] = useState("1"); // default size 
  const [showFront, setShowFront] = useState(true); 
  const [showDetails, setShowDetails] = useState(false);



  const products = [
  { id: 1, name: "Product 1", price: "$85.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png", details: {
      size: "Runs true to size. Available in S, M, L.",
      fit: "Regular fit, slightly tapered at the waist.",
      material: "100% Organic Cotton, soft and breathable."
    }},
  { id: 2, name: "Product 2", price: "$95.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png", details: {
      size: "Runs true to size. Available in S, M, L.",
      fit: "Regular fit, slightly tapered at the waist.",
      material: "100% Organic Cotton, soft and breathable."
    }},
  { id: 3, name: "Product 3", price: "$75.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png", details: {
      size: "Runs true to size. Available in S, M, L.",
      fit: "Regular fit, slightly tapered at the waist.",
      material: "100% Organic Cotton, soft and breathable."
    }},
  { id: 4, name: "Product 4", price: "$120.00", imgFront: "/imagedemo3.png", imgBack: "/imagedemo4.png", details: {
      size: "Runs true to size. Available in S, M, L.",
      fit: "Regular fit, slightly tapered at the waist.",
      material: "100% Organic Cotton, soft and breathable."
    }},   
  { id: 5, name: "Product 5", price: "$150.00", imgFront: "/imagedemo.png", imgBack: "/imagedemo2.png", details: {
      size: "Runs true to size. Available in S, M, L.",
      fit: "Regular fit, slightly tapered at the waist.",
      material: "100% Organic Cotton, soft and breathable."
    }},
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
     {page === "waiting" && <WaitingPage />}

      {page === "landing" && (
        <main
          id="landing-page"
          className="main-container"
          onClick={() => setPage("shop")}
        >
          {/* your landing page content */}
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
    <div className="product-detail-content">
      <div className="product-detail-main">
        {/* Product Image */}
        <div className="product-detail-image-container">
  <img
    src={selectedProduct.imgFront}
    alt={`${selectedProduct.name} front`}
    className="product-detail-image front"
    style={{ display: showFront ? "block" : "none" }}
  />
  <img
    src={selectedProduct.imgBack}
    alt={`${selectedProduct.name} back`}
    className="product-detail-image back"
    style={{ display: showFront ? "none" : "block" }}
  />

  <div className="product-image-controls">
    <button
      className="arrow-button left"
      onClick={() => setShowFront(!showFront)}
    > 
    { "<-" }  
    </button>
    <button
      className="arrow-button right"
      onClick={() => setShowFront(!showFront)}
    >
    { "->" }
    </button>
  </div> 
</div>

        {/* Action buttons to the right of image */}
        <div className="product-action-buttons-side">
          <button className="back-button" onClick={() => setPage("shop")}>
            Back
          </button>
          <button className="checkout-button">Checkout</button>
          <button
  className="add-to-cart-button"
  onClick={() => {
    const item = { ...selectedProduct, size: selectedSize };
    setCart([...cart, item]);
    setPage("shop"); // optional: go back to shop after adding
  }}
>
  Add to Cart
</button>
        </div>
      </div>

      {/* Bottom section with product info */}
      <div className="product-detail-bottom">
  <div className="product-info-section">
    <h2 className="product-name">{selectedProduct.name}</h2>
    <p className="product-price">{selectedProduct.price}</p>

    {/* DETAILS button and dropdown */}
    <button
      className="details-button"
      onClick={() => setShowDetails(!showDetails)}
    >
      DETAILS {showDetails ? "v" : ">"}
    </button>

    {showDetails && selectedProduct && (
      <div className="details-content">
        <p><strong>Size:</strong> {selectedProduct.details.size}</p>
        <p><strong>Fit:</strong> {selectedProduct.details.fit}</p>
        <p><strong>Material:</strong> {selectedProduct.details.material}</p>
      </div>
    )}
  </div>

  {/* Size options on the right */}
  <div className="size-options-right">
    <span className="size-label">Size:</span>
    {[1, 2, 3].map((s) => (
      <span
        key={s}
        className={`size-option ${selectedSize == s ? "selected" : ""}`}
        onClick={() => setSelectedSize(s.toString())}
      >
        {s}
      </span>
    ))}
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

{page === "cart" && (
  <main className="shop-container" id="cart-page">
    <div className="cart-header">
      <button className="back-button" onClick={() => setPage("shop")}>
        Back
      </button>
    </div>

    <div className="cart-content">
  {cart.length === 0 ? (
    <p>Cart is currently empty.</p>
  ) : (
    <>
      {cart.map((item, idx) => (
        <div key={idx} className="cart-item">
          <span>
            {item.name} (Size {item.size}) - {item.price}
          </span>
          <button
            className="remove-button"
            onClick={() => {
              const newCart = cart.filter((_, i) => i !== idx);
              setCart(newCart);
            }}
          >
            -
          </button>
        </div>
      ))}

      {/* Calculate total */}
      <div className="cart-total">
        Total: $
        {cart
          .reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")), 0)
          .toFixed(2)}
      </div>

      {/* Checkout button */}
      <button
        className="checkout-button"
        onClick={() => alert("Proceeding to checkout...")}
      >
        Checkout
      </button>
    </>
  )}
</div>
  </main>
)}


    </>
  );
}
