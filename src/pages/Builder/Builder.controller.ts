import {
    useQuery
} from '@tanstack/react-query'
import { getAllThemes } from '../../service/api'

const controller = () => {
    const query =
        useQuery({
            queryKey: ['list-all-themes'],
            queryFn: getAllThemes,
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 3,
        })

    return query
}

export default controller