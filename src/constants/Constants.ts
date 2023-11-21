
export const BASE_URL = '/mui-theme-generator'

export const routes = {
    root: {
        index: `${BASE_URL}/`,
        error: {
            index: `${BASE_URL}/error/`,
            400: `${BASE_URL}/error/400`,
            401: `${BASE_URL}/error/401`,
            403: `${BASE_URL}/error/403`,
            404: `${BASE_URL}/error/404`,
            500: `${BASE_URL}/error/500`
        },
        notFound: `*`
    },
    builder: {
        index: `${BASE_URL}/builder`,
        editor: `${BASE_URL}/builder/editor`,
        colors: `${BASE_URL}/builder/colors`,
        community: `${BASE_URL}/builder/community-themes`,
        collection: `${BASE_URL}/builder/collection`,
    }
}