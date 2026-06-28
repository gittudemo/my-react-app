// import React from "react";
// import "./Product.css";
import "./Product.css";

const Product = ({ name, price, color, data }) => {
  // return <div>This is Prodcut component</div>;
  // const myStyle = {
  //   backgroundColor: "red",
  //   color: "white",
  //   margin: "10px",
  //   border: "10px",
  //   borderRadius: "5px",
  // };
  return (
    <>
      <div
        className="container"
        // style={myStyle}
        // style={{
        //   backgroundColor: "red",
        //   color: "white",
        //   margin: "10px",
        //   border: "10px",
        //   borderRadius: "5px",
        // }}
      >
        <h5>Brand - {name}</h5>
        <h5>Price - {price}</h5>
        <h5>Color - {color}</h5>
        <p>ROM - {data?.rom ?? "NA"} </p>
      </div>
    </>
  );
};

export default Product;
