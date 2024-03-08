export const increment = "increment"
export const decrement = "decrement"
export const addToCart = "addToCart"
export const removeFromCart = "removeFromCart"
export const addToFavorite = "addToFavorite"
export const removeFromFavorite = "removeFromFavorite"
export const register = "register"
export const isLogIn = "isLogIn"

export  const incrementAction = (id) => {
    return {
        type : increment,
        value : id,
    }
}
export  const decrementAction = (id) => {
    return {
        type : decrement,
        value : id,
    }
}
export  const addToCartAction = (item) => {
    return {
        type : addToCart,
        value : item,
    }
}
export  const removeFromCartAction = (id) => {
    return {
        type : removeFromCart,
        value : id,
    }
}

export  const addToFavoriteAction = (item) => {
    return {
        type : addToFavorite,
        value : item,
    }
}
export  const removeFromFavoriteAction = (id) => {
    return {
        type : removeFromFavorite,
        value : id,
    }
}
export  const registerAction = (userData) => {
    return {
        type : register,
        value : userData,
    }
}
export  const isLogInAction = (bool) => {
    return {
        type : isLogIn,
        value : bool,
    }
}


