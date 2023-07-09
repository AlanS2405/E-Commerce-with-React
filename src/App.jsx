import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/product.slice'
import ProductIDPage from './Pages/ProductIDPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import CartPage from './Pages/CartPage'
import Header from './components/shared/Header'
import { getCartThunk } from './store/slices/cart.slice'
import PurchasesPage from './Pages/PurchasesPage'
import ProtectedRoutes from './Pages/ProtectedRoutes'

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductIDPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={ProtectedRoutes}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
