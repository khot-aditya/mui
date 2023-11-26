import { Box } from '@mui/material'
import Logo from '../Logo'
import HeaderNavigation from '../HeaderNavigation'
import HeaderOptions from '../HeaderOptions'

const Header = () => {
    return (
        <Box
            px={2}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderBottom={"1px solid lightgray"}
            minHeight={"60px"}
            height={"8vh"}>
            <Box
                display={'flex'}
            >
                <Logo />
                <HeaderNavigation />
            </Box>
            <HeaderOptions />
        </Box>
    )
}

export default Header