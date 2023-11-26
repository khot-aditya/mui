import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    padding: '8px 15px 4px',
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    gap: 12,
    border: `1px solid #ccc`,

    "& svg": {
        width: 24,
        height: 24,
        cursor: "pointer",
    }
}));