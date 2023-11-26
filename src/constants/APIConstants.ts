//  todo: if env is local, use local url, else use production url
export const API_BASE_URL = import.meta.env.VITE_URL_DEV

export const API_ENDPOINTS = {
    LIST_ALL_THEMES: '/v1/list-all-themes',
}