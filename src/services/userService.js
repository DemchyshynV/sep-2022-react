import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    userService
}
