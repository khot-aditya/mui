import { Box } from "@mui/material";
import styled from "styled-components";

export const MenuContainer = styled(Box)`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid lightgray;

    & div {
        padding: 9px 13px;
        border-radius: 20px;
        transition: 100ms linear;   
        cursor: pointer; 
        white-space: nowrap
    }

    & div:hover {
        background-color: lightgray
    }
`

