import { addToCart, addToFavorite, decrement, increment, isLogIn, register, removeFromCart, removeFromFavorite } from "./Actions/actionTypes";
const userData = JSON.parse(localStorage.getItem("userData"))
const cart = JSON.parse(localStorage.getItem("cart"))
const favorite = JSON.parse(localStorage.getItem("favorite"))
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))

const Reducer1 = (state = {
    isLoggedIn: isLoggedIn || false,
    userData: userData || {},
    cart: cart || [],
    favorite: favorite || []
}, action) => {
    var index
    switch (action.type) {

        case increment:
            index = state.cart.findIndex((cartItem) => cartItem.id === action.value)
            if (index !== -1) {
                state.cart[index].quantity += 1
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
            return { ...state, cart: [...(state.cart)] }


        case decrement:
            index = state.cart.findIndex((cartItem) => cartItem.id === action.value)
            if (index !== -1) {
                if (state.cart[index].quantity > 1) {
                    state.cart[index].quantity -= 1
                } else {
                    state.cart.splice(index, 1)
                }
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
            return { ...state, cart: [...(state.cart)] }

        case addToCart:
            state.cart.push({ ...action.value, quantity: 1 })
            localStorage.setItem("cart", JSON.stringify(state.cart))
            return { ...state, cart: [...(state.cart)] }

        case removeFromCart:
            index = state.cart.findIndex((cartItem) => cartItem.id === action.value);
            state.cart.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            return { ...state, cart: [...(state.cart)] }

        case addToFavorite:
            state.favorite.push(action.value)
            console.log(state.favorite);
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
            return { ...state, favorite: [...(state.favorite)] }

        case removeFromFavorite:
            state.favorite.splice(action.value, 1)
            console.log(state.favorite);
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
            return { ...state, favorite: [...(state.favorite)] }

        case register:
            const userData = action.value
            localStorage.setItem("userData", JSON.stringify(userData))
            return { ...state, userData: userData }

        case isLogIn:
            localStorage.setItem("isLoggedIn", JSON.stringify(action.value))
            return { ...state, isLoggedIn: action.value }

        default:
            return state
    }
}

export default Reducer1;

