import React from "react";

const Product = ({ name, price, color }) => {
  // return <div>This is Prodcut component</div>;
  return (
    <>
      <div>
        <h5>Brand - {name}</h5>
        <h5>Price - {price}</h5>
        <h5>Color - {color}</h5>
      </div>
    </>
  );
};

export default Product;
