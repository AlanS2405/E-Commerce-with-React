import { useNavigate } from "react-router-dom";
import "./styles/CardProduct.css";
import { postCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const CardProduct = ({ prod }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDetail = () => {
    navigate(`/product/${prod.id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(postCartThunk(prod));
  };

  return (
    <article className="product" onClick={handleDetail}>
      <header className="product_header">
        <div className="product_img_container">
          <img className="product_img" src={prod.images[0].url} alt="" />
        </div>
        <div className="product_img_container">
          <img className="product_img" src={prod.images[1].url} alt="" />
        </div>
      </header>
      <section className="product_body">
        <h2 className="product_title">{prod.title}</h2>
        <h3 className="product_brand">{prod.brand}</h3>
        <article className="product_price">
          {/* <h3 className="product_price_label">Price</h3> */}
          <h2 className="product_price_value">${prod.price}</h2>
        </article>
        <button className="product_btn" onClick={handleAddCart}>
          <i className="bx bx-cart"></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;
