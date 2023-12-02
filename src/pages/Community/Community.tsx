import { Box, Typography } from "@mui/material"
import { Container, HeaderContainer } from "./styles"
import ThemeCard from "../../components/app/ThemeCard"
import { controller } from "./Community.controller"
import For from "../../components/app/For"

const Community = () => {

    const { list } = controller()

    return (
        <Box >
            <HeaderContainer>
                <Typography variant="h1" gutterBottom>
                    Community
                </Typography>
            </HeaderContainer>

            <Container>
                <For each={list.data?.data || []}>
                    {(item: any) => <ThemeCard key={item.id} {...item} />}
                </For>
            </Container>
        </Box>
    )
}

export default Community