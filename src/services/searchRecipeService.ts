import axios, {AxiosResponse} from "axios";
import {apiID, baseURL,apiKey} from "../constants/urls";
import {IRecipeResp} from "../interfaces/recipes-response.interface";



const searchRecipeService = {
    searchRecipe: (
        q: string,
        from: string | number,
        to: string | number
    ): Promise<AxiosResponse<IRecipeResp>> => axios.get<IRecipeResp>(`${baseURL}?q=${encodeURIComponent(q)}&app_id=${encodeURIComponent(apiID)}&app_key=${encodeURIComponent(apiKey)}&to=${encodeURIComponent(String(to))}&from=${encodeURIComponent(String(from))}`),


}

export {searchRecipeService}


