import {apiService, IRes} from './api.service';
import {ICar} from '../interfaces';
import {urls} from '../configs';

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id: string): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.cars.base, car)
}


export {
    carService
}
