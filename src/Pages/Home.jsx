import { useSelector } from "react-redux"
import CardProduct from "../components/Home/CardProduct";
import { useState } from "react";
import FilterPrice from "../components/Home/FilterPrice";

const Home = () => {
  
  const products = useSelector(states => states.products)
  
  const [inputValue, setInputValue] = useState('')
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity
  })

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  }

  const cbFilter = (product) => product.title.toLowerCase().includes(inputValue)

  const cbFilterPrice = prod => {
    const condMin = priceMinMax.min <= prod.price
    const condMax = prod.price <= priceMinMax.max 
    return condMin && condMax
  } 

  return (
    <div className="home_product_container">
      <h1>Home</h1>
      <input 
          value={inputValue} 
          onChange={handleSearchName} 
          type="text" 
      />
      <FilterPrice 
        priceMinMax={priceMinMax}
        setPriceMinMax={setPriceMinMax}
      />
      <div>
        {
          products?.filter(cbFilter).filter(cbFilterPrice).map( (prod) => (
           < CardProduct 
              key={prod.id}
              prod={prod}
           />
          ))
        }
      </div>
    </div>
  )
}

export default Home
