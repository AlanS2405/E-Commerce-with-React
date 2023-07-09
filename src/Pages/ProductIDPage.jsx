import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SlidersImgs from "../components/ProductId/SlidersImgs"

const ProductIDPage = () => {


  const { id } = useParams()

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  
  const [ product, getProductById ] = useFetch(baseUrl)

  useEffect(() => {
    getProductById(`/products/${id}`)
  }, [id])
  
  return (
    <div>
      <SlidersImgs
        product={product}
      />
      <ProductInfo 
        product={product}
      />
      <SimilarProducts
        product={product}
      />
    </div>
  )
}

export default ProductIDPage
