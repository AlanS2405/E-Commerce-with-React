import { useSelector } from "react-redux";
import CartElement from "../components/cart/CartElement";
import usePurchase from "../hooks/usePurchase";
import "./styles/CartPage.css";

const CartPage = () => {
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
    <section className="cartPageContainer">
      <h2 className="">Cart</h2>
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

export default CartPage;
