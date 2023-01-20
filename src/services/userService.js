import {axiosService} from "./axiosService";

const userService = {
    getAll: () => axiosService.get('/users')
}

export {
    userService
}
