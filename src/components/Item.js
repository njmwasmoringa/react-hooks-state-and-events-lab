import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  let itemClass = inCart ? 'in-cart' : '';
  let buttonText = inCart ? 'Remove From Cart' : 'Add to Cart';
  function handleAddToCart(){
    setInCart(()=>!inCart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
