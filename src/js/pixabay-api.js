import axios from "axios";

export const getImagesByQuery = query =>{
    const KEY = "54665781-1b012506ba8c9acb61074d03f";
    const BASE_URL = "https://pixabay.com/api/";

return axios
.get(BASE_URL, {
params: {
    key: KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
},
})
.then(response => response.data)

};


    
