import {apiService} from "./apiService";
import {urls} from "../configs";

const carService = {
    getAll: () => apiService.get(urls.cars.cars),
    create: (data) => apiService.post(urls.cars.cars, data),
    updateById: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}
