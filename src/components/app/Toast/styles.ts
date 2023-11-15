import { Box } from "@mui/material";
import styled from "styled-components";

export const ToastContainer = styled(Box)`
    width: 100%;
    max-width: 90%;
    height: fit-content;
    border-radius: 10px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    padding: 10px 20px;
    transform: translateX(-50%);
    background-color: lightblue;
    z-index: 999;

    & .message {
        font-size: 16px;
        font-weight: 500;
    }
`