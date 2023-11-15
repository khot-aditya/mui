import { Box, Button, Typography } from "@mui/material"
import { Container } from "./styles"
import { useNavigate } from "react-router-dom"
import { routes } from "../../constants/Constants";


const Home = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate(routes.generator.index)
    }

    return (
        <Container>
            <Box
                width={'100%'}
                maxWidth={'800px'}
            >
                <Typography
                    fontSize={60}
                    whiteSpace={"nowrap"}
                    sx={{
                        verticalAlign: 'start'
                    }}
                    variant="h1">
                    MUI Theme Generator
                    <Typography
                        fontWeight={"600"}
                        component={'span'}
                        fontSize={25}> (Beta)</Typography>
                </Typography>

                <Typography
                    variant="body1"
                >
                    MUI Theme Generator is a powerful tool that allows users to create, edit, and visualize themes for the Material-UI (MUI) component library. With real-time preview capabilities and a user-friendly interface, designing and customizing MUI themes becomes a seamless experience.
                </Typography>
            </Box>

            <Box display={'flex'} gap={1}>
                <Button
                    href="https://github.com/khot-aditya/mui-theme-generator"
                    variant="outlined"
                >
                    Github
                </Button>
                <Button
                    variant="contained"
                    onClick={handleGetStartedClick}>
                    Get Started
                </Button>
            </Box>
        </Container>
    )
}

export default Home