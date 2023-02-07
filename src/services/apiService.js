import axios from "axios";

import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

export {
    apiService
}
