import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import { useState } from "react";
import FilterPrice from "../components/Home/FilterPrice";
import "./styles/Home.css";
import FilterCategory from "../components/Home/FilterCategory";

const Home = () => {
  const products = useSelector((states) => states.products);

  const [inputValue, setInputValue] = useState("");
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity,
  });
  const [sidebarFilters, setSidebarFilters] = useState("");

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const cbFilter = (product) =>
    product.title.toLowerCase().includes(inputValue);

  const cbFilterPrice = (prod) => {
    const condMin = priceMinMax.min <= prod.price;
    const condMax = prod.price <= priceMinMax.max;
    return condMin && condMax;
  };

  const handleSideberFilters = () => {
    if (sidebarFilters === "") {
      setSidebarFilters("filters_active");
    } else {
      setSidebarFilters("");
    }
  };

  return (
    <div className="home_product_container">
      <h1 className="home_title">Academlo Techno Store</h1>
      <button className="filter_btn" onClick={handleSideberFilters}>
        <i className="bx bx-search"></i>
      </button>
      <div className={`filters_container ${sidebarFilters}`}>
        <h2>Filters</h2>
        <div className="productsearch">
          <label>Search your product: </label>
          <input
            className="productsearch_ipt"
            value={inputValue}
            onChange={handleSearchName}
            type="text"
          />
        </div>
        <FilterCategory />
        <FilterPrice
          priceMinMax={priceMinMax}
          setPriceMinMax={setPriceMinMax}
        />
        <button className="btn_close_filterBar" onClick={handleSideberFilters}>
          <i className="bx bx-x"></i>
        </button>
      </div>
      <div className="products_container">
        {products
          ?.filter(cbFilter)
          .filter(cbFilterPrice)
          .map((prod) => (
            <CardProduct key={prod.id} prod={prod} />
          ))}
      </div>
    </div>
  );
};

export default Home;
