import { Box } from '@mui/material'
import Logo from '../Logo'
import HeaderNavigation from '../HeaderNavigation'

const Header = () => {
    return (
        <Box display={'flex'} sx={{
            borderBottom: "1px solid lightgray"
        }}>
            <Logo />
            <HeaderNavigation />
        </Box>
    )
}

export default Header