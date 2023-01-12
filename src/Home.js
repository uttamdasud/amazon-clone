import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product 
          id="110"
          title="Apple iPhone"
          price={299.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY218_.jpg"
           />
          <Product 
          id="111"
          title="PTron Pride Lite HBE"
          price={199.00}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Mq61N0xmL._AC_SX184_.jpg"
           />
          <Product 
          id="112"
          title="Sounce AirPods Pro Case Cover"
          price={199.00}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/41dO3M99-PS._AC_SX184_.jpg"

           />
        </div>

        <div className="home__row">
        <Product 
          id="110"
          title="Apple iPhone"
          price={299}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY218_.jpg"
           />
          <Product 
          id="110"
          title="Apple iPhone"
          price={299}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY218_.jpg"
           />
          <Product 
          id="110"
          title="Apple iPhone"
          price={299}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY218_.jpg"
           />
          <Product 
          id="110"
          title="Apple iPhone"
          price={299}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY218_.jpg"
           />
        </div>

        <div className="home__row">
        <Product 
          id="110"
          title="Samsung 163 cm (65 inches) The Frame Series 4K Smart QLED TV"
          price={134990}
          rating={5}
          image="https://m.media-amazon.com/images/I/91Fag2ehZPL._AC_UY218_.jpg"
           />
          </div>
      </div>
    </div>
  );
}

export default Home;
