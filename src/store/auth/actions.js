import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${
  localStorage.getItem('token')
}`

export function register ({ commit }, credentials) {
  return axios
      .post('https://agrobay-api.herokuapp.com/admin/register', credentials)
      .then(({data}) => {
          commit('SET_USER_DATA', data.data)
          console.log('user data is : ', data.data)
      })
}

export function login ({ commit }, credentials) {
  return axios
      .post('https://agrobay-api.herokuapp.com/admin/login', credentials)
      .then(({data}) => {
          commit('SET_USER_DATA', data.data)
          console.log('user data is : ', data.data)
      })
}

export function logout ({ commit }) {
    localStorage.removeItem('token')
    commit('CLEAR_USER_DATA')
}

export async function users({ commit }){
    axios
      .get('https://agrobay-api.herokuapp.com/admin/user')
        .then(response => {
          commit('SET_USERS', response.data.data)
        })
      .catch(err=>{
        console.log('err: ', err)
      })
}

export async function orders({ commit }){
  axios
    .get('https://agrobay-api.herokuapp.com/admin/order')
      .then(response => {
        commit('SET_ORDERS', response.data.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function products ({ commit }){
  axios
    .get('https://agrobay-api.herokuapp.com/product')
      .then(response => {
        commit('SET_PRODUCTS', response.data.data)
        console.log('product data is : ', response.data.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function plans ({ commit }){
  axios
    .get('https://agrobay-api.herokuapp.com/plan')
      .then(response => {
        commit('SET_PLANS', response.data.data)
        console.log('plan data is : ', response.data.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function tags ({ commit }){
  axios
    .get('https://agrobay-api.herokuapp.com/tags')
      .then(response => {
        commit('SET_TAGS', response.data.data)
        console.log('tag data is : ', response.data.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export function addProduct ({ commit }, credentials) {
  return axios
      .post('https://agrobay-api.herokuapp.com/product', credentials)
      .then((response) => {
          console.log('product added is : ', response.data)
      })
}

export function addPlan ({ commit }, credentials) {
  return axios
      .post('https://agrobay-api.herokuapp.com/plan', credentials)
      .then((response) => {
          console.log('plan added is : ', response.data)
      })
}

export function addTag ({ commit }, credentials) {
  return axios
      .post('https://agrobay-api.herokuapp.com/tags', credentials)
      .then((response) => {
          console.log('plan added is : ', response.data)
      })
}

export function updateProduct ({ commit }, credentials, productId) {
  return axios
      .put(`https://agrobay-api.herokuapp.com/product/${productId}`, productId, credentials)
      .then((response) => {
          console.log('product added is : ', response.data)
      })
}

export function deleteProduct ({ commit }, productId) {
  return axios
      .delete(`https://agrobay-api.herokuapp.com/product/${productId}`)
      .then((response) => {
          console.log('product removed: ', response.data)
      })
}

export function deletePlan ({ commit }, planId) {
  return axios
      .delete(`https://agrobay-api.herokuapp.com/plan/${planId}`)
      .then((response) => {
          console.log('plan removed : ', response.data)
      })
}

export function deleteTag ({ commit }, tagId) {
  return axios
      .delete(`https://agrobay-api.herokuapp.com/tag/${tagId}`)
      .then((response) => {
          console.log('plan removed : ', response.data)
      })
}

