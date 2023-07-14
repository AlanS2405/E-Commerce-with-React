import { useForm } from "react-hook-form";
import "./styles/FilterPrice.css";

const FilterPrice = ({ priceMinMax, setPriceMinMax }) => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    const min = +data.from.trim() === "" ? 0 : +data.from;
    const max = +data.to.trim() === "" ? 0 : +data.to;

    setPriceMinMax({ min, max });
  };

  const handleClearFilter = () => {
    setPriceMinMax({ min: 0, max: Infinity });
    reset({
      from: "",
      to: "",
    });
  };

  return (
    <article>
      <form className="filterprice_container" onSubmit={handleSubmit(submit)}>
        <h3>Filter price</h3>
        <div className="filtercontainer_ipt_container">
          <input
            placeholder="From..."
            className="filtercontainer_ipt"
            {...register("from")}
            type="text"
            id="from"
          />
        </div>
        <div className="filtercontainer_ipt_container">
          <input
            placeholder="To..."
            className="filtercontainer_ipt"
            {...register("to")}
            type="text"
            id="to"
          />
        </div>
        <button className="filterprice_btn">Filter Price</button>
      </form>
      {priceMinMax.min !== 0 || priceMinMax.max !== Infinity ? (
        <p>
          From {priceMinMax.min} to {priceMinMax}{" "}
          <b onClick={handleClearFilter}>X</b>
        </p>
      ) : (
        ""
      )}
    </article>
  );
};

export default FilterPrice;
