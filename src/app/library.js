let getCatagery = async () => {
  const response = await fetch('https://fakestoreapi.in/api/products/category');
  if (!response.ok) {
    // Avoid JSON.parse on bad response
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }
  else {
    const data = await response.json();
    return data.categories;
  }
}
let getProducts = async () => {
  const response = await fetch('https://fakestoreapi.in/api/products');
  if (!response.ok) {
    // Avoid JSON.parse on bad response
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }
  else {
    const data = await response.json();
    return data.products
  }
}
let getProductDetail = async (product_id = null) => {
  const response = await fetch('https://fakestoreapi.in/api/products/' + product_id);
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