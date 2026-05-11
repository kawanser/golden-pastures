import React, {useState} from 'react'

const ProductCard = ({ imgPath, name, price }) => {
  
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div id="product-card">
      <div className="product-contents">
        <img src={imgPath} alt={`Image of ${name}`} />
        <div className="details">
          <div className="text-area">
            <p>{name}</p>
            <p>${price}</p>
          </div>
          <div className="quantity">
            <span onClick={handleMinus}>-</span>
            <p>{count}</p>
            <span onClick={handleAdd}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard