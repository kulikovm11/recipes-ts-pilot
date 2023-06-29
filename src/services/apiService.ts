import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants";

export type IRes<T> = Promise<AxiosResponse<T>>
const apiService = axios.create({baseURL})

export {
    apiService
}
