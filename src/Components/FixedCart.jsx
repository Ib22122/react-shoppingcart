import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, removeFromCartAction } from "../Redux/Actions/actionTypes";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function FixedCart() {
  const [showCart, setShowCart] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const cart = useSelector(state => state.cart)
  const dispatch1 = useDispatch()

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowToggle(!showToggle);
  };

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
    <div className={`cart-container ${showCart ? 'show' : ''}`}>
      <span className={`cart-toggle ${showToggle ? 'showt' : ''}`} onClick={toggleCart}>


        {showCart ? (
          <div className='icon2'>X</div>
        ) : (
          <div className='icon2'>
            <span className='icon'></span>
            <div className='aftericon' >{cart.length}</div>
          </div>
        )}




      </span>
      <div className={`cart-content`}>


        <div className="cart-header">
          <div className='cart-header-top'>
            <div className='icon2'>
              <span className='icon'></span>
              <div className='aftericon' >{cart.length}</div>
            </div>
            <div>Cart</div>
          </div>
          <Link to={"/products"}>see all your products cart and favorates</Link>
        </div>

        <div className="cart-message">
          {isLoggedIn ? (
            <div className="cart-message">
              {cart.length !== 0 ? (
                cart.map((cartItem) => {
                  return <div key={cartItem.id} className="fcart">
                    <div className='img image-container'>
                      <img src={`../img/${cartItem.img}`} alt={`${cartItem.img}`} width={80} height={80} />
                    </div>
                    <div className="body">
                      <h6 className="">{cartItem.Brand}</h6>
                      <p className=""> Quantity:{cartItem.quantity}</p>
                    </div>
                    <div className=" right">
                      <span className='X' onClick={() => { dispatch1(removeFromCartAction(cartItem.id)) }} title="remove product from cart">X</span>
                      <p>{cartItem.price}  $</p>
                      <div>
                        <button disabled="" onClick={() => { dispatch1(decrementAction(cartItem.id)) }}>-</button>
                        <button className="" onClick={() => { dispatch1(incrementAction(cartItem.id)) }}>+</button>
                      </div>
                    </div>
                  </div>
                })

              ) : (
                <p className='text-center'>Add some products in the cart <br />:)</p>
              )}
            </div>

          ) : (
            <p className='text-center'>please login first <br />:)</p>
          )}
        </div>


        <div className="cart-subtotal">
          <div className='cart-subtotal-top'>
            <p>SUBTOTAL</p>
            <div className="subtotal">
              <p>{totalPrice()} $</p>
              <p></p>
            </div>
          </div>
          <button onClick={Checkout} className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default FixedCart;
