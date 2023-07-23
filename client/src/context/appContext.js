import { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  HANDLE_CHANGE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  CLEAR_ALERT,
  GET_FILTERS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  ADD_CART_BEGIN,
  ADD_CART_SUCCESS,
  CHANGE_CART_QUANTITY,
  CALC_CART_TOTAL,
  SET_LAST_URL,
  GET_ALL_ADDRESSES_BEGIN,
  GET_ALL_ADDRESSES_SUCCESS,
  GET_ALL_ADDRESSES_ERROR,
  SET_DELIVERY_ADDRESS,
  SET_CLIENT_SECRET,
  GET_PUBLISHABLE_KEY_BEGIN,
  GET_PUBLISHABLE_KEY_ERROR,
  GET_PUBLISHABLE_KEY_SUCCESS,
  GET_ORDERS_SUCCESS,
  CUSTOM_ALERT,
  UPDATE_USER_BEGIN,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_ERROR,
  LOGOUT_USER,
} from './actions'
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const cart = localStorage.getItem('cart')
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  categoryOptions: '',
  category: '',
  subCategoryOptions: [],
  products: [],
  productsCount: '',
  displayedProduct: [],
  cart: cart ? JSON.parse(cart) : [],
  total: 0,
  lastUrl: '',
  allAddresses: [],
  deliveryAddress: '',
  client_Secret: '',
  publishableKey: '',
  myOrders: [],
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //Axios Setup
  const authFetch = axios.create({
    baseURL: '/api/v1/',
  })

  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await axios.post('api/v1/auth/login', currentUser)
      const { user, token } = data
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } })
      addUserToLocalStorage({ user, token })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
    clearAlert()
  }
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      await axios.post('api/v1/auth/register', currentUser)
      dispatch({ type: REGISTER_USER_SUCCESS })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }
  const updateUser = async (oldPassword, newPassword) => {
    const { user } = state
    const { email } = user
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      let response = await authFetch.patch('auth/updateUser', {
        email,
        oldPassword,
        newPassword,
      })
      const { data } = response
    } catch (error) {}
  }
  const getSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN, payload: { isLoading: true } })
    try {
      const { data } = await authFetch(`/products/${id}`)
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: { isLoading: true, data },
      })
      return data
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }
  const getFilteredProducts = async (filters) => {
    const { minPrice, maxPrice, subCategory, category, name } = filters

    let url = `/products/filters/?category=${category}`

    if (minPrice) {
      url = url + `&minPrice=${minPrice}`
    }
    if (name) {
      url = url + `&name=${name}`
    }
    if (maxPrice) {
      url = url + `&maxPrice=${maxPrice}`
    }
    if (subCategory) {
      url = url + `&subCategory=${subCategory}`
    }
    if (category) {
      url = url + `&category=${category}`
    }
    try {
      const { data } = await authFetch(url)
      const { result, count, subCategoryOptions } = data
      dispatch({
        type: GET_FILTERS,
        payload: { result, count, subCategoryOptions },
      })
    } catch (error) {}
  }

  const addToCart = async (id, quantity, currentCart) => {
    dispatch({ type: ADD_CART_BEGIN })
    try {
      const { data } = await axios.get(`/api/v1/products/${id}`)

      const { category, description, name, price, subCategory, _id, image } =
        data
      const item = {
        category,
        description,
        name,
        price,
        subCategory,
        image,
        _id,
      }

      let tempCart = currentCart
      let counter = 0
      let cart
      tempCart = tempCart.map((item) => {
        if (item._id === id) {
          counter++
          item.quantity += quantity
        }
        return item
      })
      if (counter !== 0) {
        cart = tempCart
      } else {
        item.quantity = quantity
        cart = [...tempCart, item]
      }

      localStorage.setItem('cart', JSON.stringify(cart))
      dispatch({ type: ADD_CART_SUCCESS, payload: { cart, quantity } })
      clearAlert()
    } catch (error) {
      customAlert('danger', 'Error adding product')
    }
  }
  const changeCartQuantity = (id, value, currentCart) => {
    let cart = currentCart.map((item) => {
      if (item._id === id) {
        item.quantity += value
      }
      return item
    })

    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i].quantity <= 0) {
        cart.splice(i, 1)
      }
    }
    dispatch({ type: CHANGE_CART_QUANTITY, payload: { cart } })
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  const calcTotal = (cart) => {
    let total = 0
    cart.map((item) => {
      total += item.quantity * item.price
    })
    dispatch({ type: CALC_CART_TOTAL, payload: { total } })
  }
  const setLastUrl = () => {
    const { pathname } = window.location
    dispatch({ type: SET_LAST_URL, payload: { lastUrl: pathname } })
  }

  const addAddress = async (address) => {
    try {
      let response = await authFetch.post('/address', address)
      getAllAddresses()
      dispatch({ type: ADD_ADDRESS_SUCCESS })
    } catch (error) {
      dispatch({
        type: ADD_ADDRESS_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const getAllAddresses = async () => {
    let url = '/address'
    dispatch({ type: GET_ALL_ADDRESSES_BEGIN })
    try {
      let result = await authFetch.get(url)
      const { data } = result
      dispatch({
        type: GET_ALL_ADDRESSES_SUCCESS,
        payload: { allAddresses: data },
      })
    } catch (error) {
      dispatch({
        type: GET_ALL_ADDRESSES_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }
  const deliveryAddressSetup = (index) => {
    const { allAddresses } = state
    const deliveryAddress = allAddresses[index]
    dispatch({ type: SET_DELIVERY_ADDRESS, payload: { deliveryAddress } })
  }

  const addReceipt = async () => {
    const { cart, total, user } = state

    let receipt = {
      createdBy: user._id,
      date: Date.now(),
      receiptItems: [],
      total: total,
    }
    cart.map((item) => {
      const { name, quantity, price } = item
      receipt.receiptItems.push({
        name: name,
        price: price.toFixed(2),
        quantity: quantity,
        totalPrice: (quantity * price).toFixed(2),
      })
    })

    try {
      let response = await authFetch.post('/payment/receipt', receipt)
    } catch (error) {}
  }
  const setClient_Secret = (client_Secret) => {
    dispatch({ type: SET_CLIENT_SECRET, payload: { client_Secret } })
  }
  const getPublishableKey = async () => {
    dispatch({ type: GET_PUBLISHABLE_KEY_BEGIN })
    try {
      let response = await authFetch('/payment/config')
      const { data } = response
      const { publishableKey } = data
      dispatch({
        type: GET_PUBLISHABLE_KEY_SUCCESS,
        payload: { publishableKey },
      })
    } catch ({ error }) {
      dispatch({ type: GET_PUBLISHABLE_KEY_ERROR })
    }
  }
  const getPaymentIntent = async () => {
    const { cart } = state
    const response = await authFetch.post('/payment/paymentIntent', cart)
    setClient_Secret(response.data.clientSecret)
  }
  const getOrders = async () => {
    const { _id } = state.user
    try {
      let result = await authFetch.get(`/payment/allOrders/${_id}`)
      const { data } = result
      dispatch({ type: GET_ORDERS_SUCCESS, payload: { myOrders: data } })
    } catch (error) {}
  }
  const customAlert = (type, text) => {
    dispatch({
      type: CUSTOM_ALERT,
      payload: { alertType: type, alertText: text },
    })
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        loginUser,
        updateUser,
        registerUser,
        getFilteredProducts,
        getSingleProduct,
        addToCart,
        changeCartQuantity,
        calcTotal,
        setLastUrl,
        getAllAddresses,
        deliveryAddressSetup,
        addReceipt,
        setClient_Secret,
        getPublishableKey,
        getPaymentIntent,
        getOrders,
        customAlert,
        addAddress,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
