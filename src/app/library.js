let getCatagery = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=10');
  if (!response.ok) {
    // Avoid JSON.parse on bad response
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  else {
    const data = await response.json();
    return data;
  }
}
let getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    // Avoid JSON.parse on bad response
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  else {
    const data = await response.json();
    return data.products
  }
}
let getProductDetail = async (product_id = null) => {
  const response = await fetch('https://dummyjson.com/products/' + product_id);
  if (!response.ok) {
    // Avoid JSON.parse on bad response
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  else {
    const data = await response.json();
    return data.product;
  }
}

export { getCatagery, getProducts, getProductDetail }