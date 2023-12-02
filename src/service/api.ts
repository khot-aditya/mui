import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from "../constants/APIConstants"
import { ITheme } from '../types/api/Theme';
import { IResponse } from '../types/api';

export const getAllThemes = () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.LIST_ALL_THEMES}`)
        .then(res => res.data as IResponse<ITheme[]>)
}