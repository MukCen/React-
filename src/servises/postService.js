import { urls } from "../configs"


const postService = {
    getOll: () => axiosService.get(urls.posts)  ,
    getById: () => axiosService.get('${urls.posts}/${id}')
     
 
}

export {
    postService
}