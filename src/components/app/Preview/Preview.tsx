
import { createTheme, Box, Button, Checkbox, ThemeProvider, Typography } from '@mui/material'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

const Preview = () => {
    const { theme } = useContext(ThemeContext);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
            {theme && (
                <ThemeProvider theme={createTheme(theme)}>
                    <Box
                        p={3}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={2}
                        maxHeight={"100vh"}
                        overflow={"auto"}
                    >
                        <Box sx={{ width: '100%', maxWidth: 500 }}>
                            <Typography variant="h1" gutterBottom>
                                h1. Heading
                            </Typography>
                            <Typography variant="h2" gutterBottom>
                                h2. Heading
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                h3. Heading
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                h4. Heading
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                h5. Heading
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                h6. Heading
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                button text
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                caption text
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                overline text
                            </Typography>
                        </Box>
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
                    </Box>
                </ThemeProvider>
            )}

        </>
    )
}

export default Preview