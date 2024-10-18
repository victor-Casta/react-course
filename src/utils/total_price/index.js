const totalPrice = (producsList) => {
  if(producsList.length > 0) {
    return producsList.reduce((acc, product) => acc + product.price, 0).toFixed(2)
  }
}

export default totalPrice