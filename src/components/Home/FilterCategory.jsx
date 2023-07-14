import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "../../store/slices/product.slice";

const FilterCategory = () => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [categories, getAllCategories] = useFetch(baseUrl);

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const dispatch = useDispatch();

  const handleFilterCategory = (id) => {
    if (id) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
      dispatch(getAllProductsThunk(url));
    } else {
      dispatch(getAllProductsThunk());
    }
  };

  return (
    <article>
      <h3>Categories</h3>
      <ul>
        <li onClick={() => handleFilterCategory()}>All Categories</li>
        {categories?.map((category) => (
          <li
            key={category.id}
            onClick={() => handleFilterCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
