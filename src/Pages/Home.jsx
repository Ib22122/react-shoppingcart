import React from "react";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import FixedCart from "../Components/FixedCart"

const Home = () => {
    return (
        <div className="home" id="Home">
            <FixedCart />
            <Main/>
            <hr className="br"/>
            <Products/>
        </div>
    )
};

export default Home;