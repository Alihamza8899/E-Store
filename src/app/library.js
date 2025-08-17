let getCatagery = async () => {
    const response = await fetch('https://fakestoreapi.in/api/products/category');
    const data = await response.json();
    return data.categories ;
}
let getProducts = async () => {
    const response = await fetch('https://fakestoreapi.in/api/products');
    const data = await response.json();
    return data.products 
}
let getProductDetail = async (product_id = null) => {
    const response = await fetch('https://fakestoreapi.in/api/products/' + product_id);
    const data = await response.json();
    return data.product;
}

export {getCatagery , getProducts , getProductDetail}