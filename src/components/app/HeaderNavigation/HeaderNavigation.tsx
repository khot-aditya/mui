import { Box } from '@mui/material'
import { MenuContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../constants/Constants';

const HeaderNavigation = () => {

    const navigation = useNavigate();

    const menuArray = [
        {
            label: 'Editor',
            url: routes.builder.editor
        },
        {
            label: 'Colors',
            url: routes.builder.colors
        },
        {
            label: 'Community Themes',
            url: routes.builder.community
        },
        {
            label: 'Collection',
            url: routes.builder.collection
        }
    ]

    const handleNavigate = (url: string) => {
        navigation(url)
    }

    return (
        <MenuContainer>
            {
                menuArray.map(item => (
                    <Box
                        onClick={() => handleNavigate(item.url)}
                        key={item.url}>
                        {item.label}
                    </Box>
                ))
            }
        </MenuContainer>
    )
}

export default HeaderNavigation