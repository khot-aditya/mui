import { Box, styled } from "@mui/material";
import { BookmarkBoxProps } from "./ThemeCard.types";


export const Card = styled(Box)(({ theme }) => ({
    borderRadius: 20,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create("box-shadow"),
    border: `1px solid ${theme.palette.divider}`,
    minWidth: 200,
    boxShadow: "3px 5px 10px rgba(0, 0, 0, 0.04)",
}));

export const BookmarkBox = styled(Box)
    <BookmarkBoxProps>(({ isBookmarked }) => ({
        "& svg": {
            fill: '#747474',
            transition: 'fill 0.2s ease-in-out',
        },
        "&:hover svg": {
            fill: isBookmarked ? '#ff2828' : '#000',
        }
    }));