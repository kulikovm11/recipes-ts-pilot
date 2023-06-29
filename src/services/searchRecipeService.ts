
import {apiID, baseURL,apiKey} from "../constants";
import {IRecipeResp} from "../interfaces";
import {apiService, IRes} from "./apiService";



const searchRecipeService = {
    searchRecipe: (
        q: string,
        from: string | number,
        to: string | number
    ): IRes<IRecipeResp> => apiService.get(`${baseURL}?q=${encodeURIComponent(q)}&app_id=${encodeURIComponent(apiID)}&app_key=${encodeURIComponent(apiKey)}&to=${encodeURIComponent(String(to))}&from=${encodeURIComponent(String(from))}`),


}

export {searchRecipeService}


