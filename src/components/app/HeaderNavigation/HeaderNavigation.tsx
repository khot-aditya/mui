import { Box } from '@mui/material'
import { MenuContainer } from './styles'

const HeaderNavigation = () => {

    const menuArray = [
        {
            label: 'Editor',
            url: 'editor'
        },
        {
            label: 'Colors',
            url: 'colors'
        },
        {
            label: 'Community Themes',
            url: 'community-themes'
        },
        {
            label: 'Saved',
            url: 'saved'
        }
    ]

    return (
        <MenuContainer>
            {
                menuArray.map(item => (
                    <Box key={item.url}>
                        {item.label}
                    </Box>
                ))
            }
        </MenuContainer>
    )
}

export default HeaderNavigation