import { useQuery } from "@tanstack/react-query"
import { getAllThemes } from "../../service/api"

export const controller = () => {

    const query =
        useQuery({
            queryKey: ['list-all-themes'],
            queryFn: getAllThemes,
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 3,
        })

    return {
        list: query
    }
}