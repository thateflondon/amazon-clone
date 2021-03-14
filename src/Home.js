import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV2._CB412009348_.jpg"
          alt="amazon banner"
        />
        <div className="home__row">
          <Product />
          {/**product */}
        </div>
        <div className="home__row">
          {/**product */}
          {/**product */}
          {/**product */}
        </div>
        <div className="home__row">{/**product */}</div>
      </div>
    </div>
  );
}

export default Home;
