import { useSelector } from "react-redux";
import CartElement from "../cart/CartElement";
import usePurchase from "../../hooks/usePurchase";
import "./styles/CartSidebar.css";

const CartSidebar = ({ cartSidebar }) => {
  const cart = useSelector((states) => states.cart);

  const totalPrice = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);

  const { makePurchase } = usePurchase();

  const handlePurchase = () => {
    makePurchase();
  };

  return (
    <section className={`cartSidebar ${cartSidebar}`}>
      <div>
        {cart.map((prod) => (
          <CartElement key={prod.id} prod={prod} />
        ))}
      </div>
      <footer>
        <div>
          <span>Total:</span>
          <span>{totalPrice}</span>
        </div>
        <button onClick={handlePurchase}>Buy this products</button>
      </footer>
    </section>
  );
};

export default CartSidebar;
