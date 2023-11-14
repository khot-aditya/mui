
import { createTheme, Box, Button, Checkbox, ThemeProvider } from '@mui/material'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

const Preview = () => {
    const { theme } = useContext(ThemeContext);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    console.log(theme)
    return (
        <>
            {theme && (
                <ThemeProvider theme={createTheme(theme)}>
                    <Box display={'flex'} alignItems={'start'} flexDirection={"column"} gap={1}>
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>

                        <Button>Primary</Button>
                        <Button disabled>Disabled</Button>
                        <Button href="#text-buttons">Link</Button>

                        <Button variant="contained">Contained</Button>
                        <Button variant="contained" disabled>
                            Disabled
                        </Button>
                        <Button variant="contained" href="#contained-buttons">
                            Link
                        </Button>

                        <Button variant="contained" disableElevation>
                            Disable elevation
                        </Button>

                        <Checkbox {...label} defaultChecked />
                        <Checkbox {...label} />
                        <Checkbox {...label} disabled />
                        <Checkbox {...label} disabled checked />

                    </Box>
                </ThemeProvider>
            )}

        </>
    )
}

export default Preview