import {AxiosResponse} from 'axios';

export type IRes<Data> = Promise<AxiosResponse<Data>>
