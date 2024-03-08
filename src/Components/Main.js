import React from "react";

const Main = () => {
    return (
        <div id="Main" className="main">
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 col-12 py-3">
                        <div className="maintext">
                            <h3>Laptek, where innovation meets convenience...</h3>
                            <p>Discover your perfect digital companion with our premium selection of laptops, crafted to elevate your productivity and power your passions</p>
                            <div>
                                <a href="#Products"> see our products </a>
                            </div>
                        </div>
                    </div>
                    <div className=" img col-md-6 col-12 py-3">
                        <div className="img-div">
                            <div className="image-container">
                                <img src="/img/ASUS-2.png" alt="the img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;