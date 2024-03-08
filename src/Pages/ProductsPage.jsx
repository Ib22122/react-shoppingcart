import React from "react";
import laptops from "../assets/Data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, removeFromFavoriteAction } from "../Redux/Actions/actionTypes";
const ProductsPage = () => {
    const cart = useSelector(state => state.cart)
    const favorite = useSelector(state => state.favorite)
    const dispatch1 = useDispatch()

    const Checkout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: `total price is ${totalPrice()}`,
            text: "would you want to continue",

            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",

            showCancelButton: true,
            confirmButtonText: "Yes, bay now!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "The purchase process was successful",
                    text: "The product will arrive within ten days.",
                    icon: "success"
                });
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "The purchase process has been canceled",
                    icon: "error"
                });
            }
        });

    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    return (
        <div className="productspage">
            <div className="cart">
                <div className="products" >
                    <div className="section-header">
                        <h3> your cart </h3>
                        <span> </span>
                    </div>
                    <div className="container mt-4 p-3">
                        <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 g-3">
                            {cart.map((item, index) => (
                                <div className="col" key={index}>
                                    <div className="card h-100 shadow-sm">
                                        <a>
                                            <img src={`img/${item.img}`} className="card-img-top"
                                                alt="product.title" />
                                        </a>
                                        <div className="label-top shadow-sm">
                                            <a className="text-white" href="#">{item.Brand}</a>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between mb-3">
                                                <span className=" badge rounded-pill">{`${item.price} $`}</span>
                                            </div>
                                            <h5 className="card-quantity">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span className=" badge rounded-pill">{`${item.quantity} $`}</span>
                                                </div>
                                                <div>
                                                    <button onClick={() => { dispatch1(decrementAction(item.id)) }}>-</button>
                                                    <button onClick={() => { dispatch1(incrementAction(item.id)) }}>+</button>
                                                </div>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <hr className="text-light" />
            <div className="container">
                <div className="cart-subtotal-p">
                    <div className='cart-subtotal-top-p'>
                        <p>SUBTOTAL</p>
                        <div className="subtotal-p">
                            <p>{totalPrice()} $</p>
                            <p></p>
                        </div>
                    </div>
                    <button onClick={Checkout} className="checkout-button-p">Checkout</button>
                </div>
            </div>
            <hr className="text-light" />
            <div className="favorate">
                <div className="section-header">
                    <h3> your favorates </h3>
                    <span> </span>
                </div>


                <div className="container mt-4 p-3">
                    <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 g-3">
                        {favorite.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <a>
                                        <img src={`img/${item.img}`} className="card-img-top"
                                            alt="product.title" />
                                    </a>
                                    <div className="label-top shadow-sm">
                                        <a className="text-white" href="#">{item.Brand}</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className=" badge rounded-pill">{`${item.price} $`}</span>
                                            <span ><a className="text-uppercase">
                                                <FontAwesomeIcon onClick={() => { dispatch1(removeFromFavoriteAction(index)) }} className='icon' icon={solidHeart} />
                                            </a></span>
                                        </div>
                                        <h5 className="card-title">
                                            <a target="_blank" href="#">{item.description}</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>



        </div>
    )
};

export default ProductsPage;