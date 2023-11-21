import {
    Box,
    List as MUIList,
    ListItemButton as MUIListItemButton
} from "@mui/material";
import styled from "styled-components";

export const MenuContainer = styled(Box)`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid lightgray;
`

export const List = styled(MUIList)
    (({ theme }) => ({
        display: 'flex',
        gap: 5,
    }));


export const ListItemButton = styled(MUIListItemButton)
    (({ theme }) => ({
        "&.MuiListItemButton-root": {
            fontWeight: 500,
            borderRadius: 20
        },
        "&.MuiListItemButton-root:hover": {
            // background: 'red'
        },
        "&.Mui-selected.MuiListItemButton-root:hover": {
            // background: 'pri'
        }
    }))