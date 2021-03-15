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
          <Product
            id="766544"
            title="The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="988766"
            title="New Apple Ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://m.media-amazon.com/images/I/81lqq8UF5ML._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="453432"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={399}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY9K2_VW_34FR+watch-44-stainless-gold-cell-6s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1599269261000,1599537309000"
            rating={5}
          />
          <Product
            id="343535"
            title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
            price={199}
            image="https://m.media-amazon.com/images/I/41bdROAptkL.jpg"
            rating={5}
          />
          <Product
            id="323234"
            title="Samsung Galaxy Watch 3 (45mm, GPS, Bluetooth) Smart Watch - Mystic Black (US Version)"
            price={419}
            image="https://images-na.ssl-images-amazon.com/images/I/81hgNpSWBiL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12232424"
            title="SAMSUNG 65-inch Class The Frame TV with Customizable Black Bezel (2020 Model)"
            price={1490}
            image="https://images-na.ssl-images-amazon.com/images/I/81JLHGQk2hL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
