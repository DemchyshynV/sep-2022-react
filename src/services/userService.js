import {apiService} from "./apiService";
import {urls} from "../configs";

const userService = {
    create:(user)=>apiService.post(urls.users, user)
}

export {
    userService
}
