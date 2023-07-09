import { useState } from "react"
import { useDispatch } from "react-redux"
import { postCartThunk } from "../../store/slices/cart.slice"

const ProductInfo = ({ product }) => {

const [quantity, setQuantity] = useState(1)

const handleAdd = () => setQuantity(quantity + 1)

const dispatch = useDispatch()

const handleMinus = () => {
    if (quantity -1 >= 1){
        setQuantity(quantity - 1)
    }
}

const handleAddToCart = () => {
    dispatch(postCartThunk(product, quantity))
}

  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <ul>
                <li>
                    <span>Price</span>
                    <span>{product?.price}</span>
                </li>
                <li>
                    <span>Quantity</span>
                    <div>
                        <div onClick={handleMinus}>-</div>
                        <div>{quantity}</div>
                        <div onClick={handleAdd}>+</div>
                    </div>
                </li>
            </ul>
            <button onClick={handleAddToCart}>Add to cart<i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo
