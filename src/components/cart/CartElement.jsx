import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slices/cart.slice";
import "./styles/CartElement.css";

const CartElement = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id));
  };

  console.log(prod);

  return (
    <article>
      <header>
        <img src={prod.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prod.product.title}</h3>
        <p>
          <span>{prod.quantity}</span> x <span>{prod.product.price}</span>
        </p>
        <button onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </section>
      <footer>
        <span>Subtotal</span>
        <span>{prod.quantity * prod.product.price}</span>
      </footer>
    </article>
  );
};

export default CartElement;
