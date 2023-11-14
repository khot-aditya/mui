import { Box } from '@mui/material'
import Logo from '../Logo'
import HeaderNavigation from '../HeaderNavigation'

const Header = () => {
    return (
        <Box display={'flex'}>
            <Logo />
            <HeaderNavigation />
        </Box>
    )
}

export default Header