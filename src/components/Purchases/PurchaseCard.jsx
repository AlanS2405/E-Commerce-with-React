const PurchaseCard = ({ prod }) => {



  return (
    <article>
      <img src={prod.product.images[0].url} alt="" />
      <h3>{prod.product.title}</h3>
      <span>{prod.quantity}</span> x <span>{prod.product.price}</span>
    </article>
  )
}

export default PurchaseCard
