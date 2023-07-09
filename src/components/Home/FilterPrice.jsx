import { useForm } from "react-hook-form"

const FilterPrice = ({ priceMinMax, setPriceMinMax }) => {

  const {register, handleSubmit} = useForm()

  const submit = (data) => {
    const min = +data.from.trim() === "" ? 0 : +data.from
    const max = +data.to.trim() === "" ? 0 : +data.to 

    setPriceMinMax({ min, max })
  }

  const handleClearFilter = () => {
    
  }

  return (
    <article>
        <form onSubmit={handleSubmit(submit)}>
            <div>
            <label htmlFor="from">From</label>
            <input {...register('from')} type="text" id="from"/>
            </div>
            <div>
            <label htmlFor="to">To</label>
            <input {...register('to')} type="text" id="to"/>
            </div>
            <button>Filter Price</button>
        </form>
            {
              priceMinMax.min !== 0 || priceMinMax.max !== Infinity
              ? <p>From {priceMinMax.min} to {priceMinMax} <b onClick={handleClearFilter}>X</b></p>
              : ''
            }
    </article>
  )
}

export default FilterPrice
