
const base_url = "http://localhost:3001";

export const fetcher = async (url) => {
    let responseObject = {errorMessage: "", data: []}
    try{
        const response = await fetch(base_url + url)
        const responseData = await response.json();
        responseObject.errorMessage = "";
        responseObject.data = responseData;
    }
    catch(err){
        responseObject.errorMessage = err.message;
    }
    return responseObject;
}