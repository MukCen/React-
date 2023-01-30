import { Axios } from "axios";
import { baseUrl } from "../configs/urls";



const axiosService = Axios.create({ baseUrl });


export {
    axiosService
}