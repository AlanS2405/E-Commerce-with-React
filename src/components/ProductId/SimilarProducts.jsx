import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../Home/CardProduct";

const SimilarProducts = ({ product }) => {

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [ productsByCategory, getProductsByCategory ] = useFetch(baseUrl)

  useEffect(() => {
    if (product){
      getProductsByCategory(`/products?categoryId=${product.category.id}`)
    }
  }, [product])
  
  return (
    <div>
      <h2>Similar Products</h2>
      <div className="home_product_container">
        {
          productsByCategory?.map( prod => {
            if ( product.id !== prod.id){
              return (<CardProduct 
              prod={prod}
              key={prod.id}
            />)
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts
