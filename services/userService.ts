import {apiService} from './apiService';
import {IUser} from '../interfaces/userInterface';
import {IRes} from '../interfaces/resInterface';

const userService = {
    getAll:():IRes<IUser[]> => apiService.get('/users')
}

export {
    userService
}
