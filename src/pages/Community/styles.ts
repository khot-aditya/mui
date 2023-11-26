import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    width: "100%",
}))

export const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // change here
    gridGap: theme.spacing(2),
}));
