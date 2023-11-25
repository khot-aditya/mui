import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from "../constants/APIConstants"

export const getAllThemes = () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.LIST_ALL_THEMES}`)
}