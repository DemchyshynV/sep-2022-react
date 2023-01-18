import {axiosService} from "./axiosService";

const userService = {
    getAll: () => axiosService.get('/users'),
    getById: (id) => axiosService.get(`/users/${id}`)
}

export {
    userService
}
