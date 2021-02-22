import Axios from "axios"

export function SET_USER_DATA ( state, userData) {
    state.user = userData
    state.token = userData.token
    localStorage.setItem('token', userData.token)
    Axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
    }`
}

export function SET_USERS ( state, users) {
    state.users = users
}

export function SET_ORDERS ( state, orders) {
    state.orders = orders
}

export function SET_PRODUCTS ( state, products) {
    state.products = products
}

export function SET_PLANS ( state, plans) {
    state.plans = plans
}

export function SET_TAGS ( state, tags) {
    state.tags = tags
}

export function CLEAR_USER_DATA () {
    location.reload()
}
