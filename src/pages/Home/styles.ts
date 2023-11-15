import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }
    
`