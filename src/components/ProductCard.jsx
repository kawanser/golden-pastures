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
            <h4>${price}</h4>
          </div>
          <div className="quantity">
            <button onClick={handleMinus}>-</button>
            <h4 className="count">{count}</h4>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard