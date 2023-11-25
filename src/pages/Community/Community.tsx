import { Box, Typography } from "@mui/material"
import { Container, HeaderContainer } from "./styles"
import ThemeCard from "../../components/app/ThemeCard"

const Community = () => {

    return (
        <>
            <HeaderContainer>

                <Typography variant="h1" gutterBottom>
                    Community
                </Typography>


            </HeaderContainer>

            <Container>
                <ThemeCard />
                <ThemeCard />
                <ThemeCard />
                <ThemeCard />
            </Container>
        </>
    )
}

export default Community