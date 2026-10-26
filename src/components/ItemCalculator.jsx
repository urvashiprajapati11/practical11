
import React, { useState } from "react";
import "./ItemCalculator.css";

function ItemCalculator() {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const prices = {
    S: 499,
    M: 699,
    L: 899,
    XL: 1099,
  };

  const unitPrice = prices[size];
  const totalPrice = unitPrice * quantity;

  const handleSizeChange = (e) => {
    console.log("Event Type:", e.type);
    console.log("Selected Size:", e.target.value);
    setSize(e.target.value);
  };

  const handleIncrease = (e) => {
    console.log("Event Type:", e.type);
    console.log("Clicked Element:", e.target.tagName);
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = (e) => {
    console.log("Event Type:", e.type);
    console.log("Clicked Element:", e.target.tagName);
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = (e) => {
    console.log("Event Type:", e.type);
    console.log("Button Text:", e.target.textContent);
    console.log("Size:", size);
    console.log("Quantity:", quantity);
    console.log("Total Price:", totalPrice);

    alert(`Total Price: ₹${totalPrice}`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-emoji">👕</span>
        <span className="product-tag">BEST SELLER</span>
      </div>

      <div className="product-details">
        <p className="product-category">CASUAL COLLECTION</p>

        <h2>Classic Cotton T-Shirt</h2>

        <p className="product-description">
          Comfortable and stylish everyday wear.
        </p>

        <div className="price">
          ₹{unitPrice.toLocaleString("en-IN")}
          <span> / item</span>
        </div>

        <label htmlFor="size">Select Size</label>

        <select
          id="size"
          value={size}
          onChange={handleSizeChange}
        >
          <option value="S">Small (S)</option>
          <option value="M">Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
        </select>

        <label>Quantity</label>

        <div className="quantity-control">
          <button
            type="button"
            onClick={handleDecrease}
            disabled={quantity === 1}
          >
            -
          </button>

          <span className="quantity">{quantity}</span>

          <button
            type="button"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <div className="total-section">
          <span>Total Price</span>
          <strong>
            ₹{totalPrice.toLocaleString("en-IN")}
          </strong>
        </div>

        <button
          type="button"
          className="buy-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCalculator;
