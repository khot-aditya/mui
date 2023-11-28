import { Box, styled } from "@mui/material";

export const PaletteContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '6px',

    '& div': {
        width: '20px',
        height: '20px',
        borderRadius: '99px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }
    }
}));