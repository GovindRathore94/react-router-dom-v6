import React from "react";
import product from "../img/product.png";

function Home() {
  return (
    <div>
      <main>
        <h1>All this products for selling on best price Offer !!</h1>
        <div className="imgContainer">
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
          <img src={product} alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home;
