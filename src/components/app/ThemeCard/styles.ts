import { Box, styled } from "@mui/material";


export const Card = styled(Box)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create("box-shadow"),
    border: `1px solid ${theme.palette.divider}`,
    minWidth: 200,
    // maxWidth: 300,
}));