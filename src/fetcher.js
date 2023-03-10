
const base_url = "http://localhost:3001";

export const fetcher = async (url) => {
    let responseObject = {errorMessage: "", data: []};
    try{
       const response = await fetch(base_url + url);
       const responseData = await response.json();
       responseObject.errorMessage = "";
       responseObject.data = responseData;
       return responseObject;
    }
    catch(err){
        responseObject.errorMessage = err.message;
        return responseObject;
    }
}

export const getCategories = () => {
    return fetcher("/categories");
}

export const getProducts = id => {
    return fetcher("/products?catId=" + id);
}

export const getProductsById  = id => {
    return fetcher("/products/" + id);
}

export const getProductsByQuery = query => {
    return fetcher('/products?q=' + query)
}