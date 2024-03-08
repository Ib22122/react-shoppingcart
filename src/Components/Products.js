import laptops from "../assets/Data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from "sweetalert2";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, addToFavoriteAction, removeFromCartAction, removeFromFavoriteAction } from "../Redux/Actions/actionTypes";

const Products = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const cart = useSelector(state => state.cart)
    const favorite = useSelector(state => state.favorite)
    const dispatch1 = useDispatch()

    const allertLogInFirst = () => {
        Swal.fire({
            title: "please login first",
            icon: "info"
        });
    }

    const addToCart = (item) => {
        if (isLoggedIn) {
            const index = cart.findIndex((cartItem) => cartItem.id === item.id);
            if (index === -1) {
                dispatch1(addToCartAction(item))
            } else {
                dispatch1(removeFromCartAction(cart[index].id))
            }
        } else {
            allertLogInFirst()
        }
    }

    const addToFavorite = (item) => {
        if (isLoggedIn) {
            const index = favorite.findIndex((favItem) => favItem.id === item.id);
            if (index === -1) {
                dispatch1(addToFavoriteAction(item))
            } else {
                dispatch1(removeFromFavoriteAction(index))
            }
        } else {
            allertLogInFirst()
        }
    }

    const bayNow = (itemId) => {
        if (isLoggedIn) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: `Are you sure you want to bay this laptop in ${laptops[itemId].price}`,
                text: "Delivery fees are not included...",

                imageUrl: `./img/${laptops[itemId].img}`,
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
        } else {
            allertLogInFirst()
        }




    }
    return (
        <div className="products" id="Products">
            <div className="section-header">
                <h3> our products </h3>
                <span> </span>
            </div>
            <div className="container mt-4 p-3">
                <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 g-3">
                    {laptops.map((item, index) => (
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
                                        <span className=""><a className="text-uppercase">
                                            <FontAwesomeIcon className='icon' onClick={() => { addToFavorite(item) }} icon={favorite.find(favitem => favitem.id === item.id) && isLoggedIn ? solidHeart : regularHeart} />
                                        </a></span>
                                    </div>
                                    <h5 className="card-title">
                                        <a target="_blank" href="#">{item.description}</a>
                                    </h5>
                                    <div className="d-grid gap-2 mt-4">
                                        <a className={` btn bold-btn ${cart.find(cartitem => cartitem.id === item.id) && isLoggedIn ? "selected" : " "}`}
                                            onClick={() => { addToCart(item) }}>
                                            {cart.find(cartitem => cartitem.id === item.id) && isLoggedIn ? 'Remove from Cart' : 'Add to Cart'}
                                        </a>
                                        <a className="btn bold-btn" onClick={() => { bayNow(item.id) }}>bay now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Products;










