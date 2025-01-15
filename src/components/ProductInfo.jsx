  

const ProductInfo = () => {
    let product = {
        name : "Watch",
        price : "$100",
        availability : "Out Of Stock"
    }
  return (
    // Displaying dynamic content using {}
    <div>
        {/* <p>{Object.values(product)}</p> */}
        <h3>Name : {product["name"]}</h3>
        <h3>price : {product["price"]}</h3>
        <h3>availability : {product.availability}</h3>
    </div>
  )
}

export default ProductInfo
