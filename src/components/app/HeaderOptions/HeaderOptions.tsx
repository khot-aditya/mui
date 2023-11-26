import { Box, Tooltip } from '@mui/material'
import GithubLogo from '../../../assets/github-mark.svg?react'
import Settings from '../../../assets/icons/settings.svg?react'
import SunIcon from '../../../assets/icons/sun.svg?react'

import { Container } from './styles'

const HeaderOptions = () => {
    return (

        <Container>
            <Tooltip title="GitHub" placement="bottom">
                <Box>
                    <GithubLogo />
                </Box>
            </Tooltip>

            <Tooltip title="Settings" placement="bottom">
                <Box>
                    <Settings />
                </Box>
            </Tooltip>

            <Tooltip title="Light Theme" placement="bottom">
                <Box>
                    <SunIcon />
                </Box>
            </Tooltip>
        </Container >
    )
}

export default HeaderOptions