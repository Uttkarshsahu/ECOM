import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Shop Waterproof Clothing</h1>
      {products.map(prod => (
        <div key={prod.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>£{prod.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
