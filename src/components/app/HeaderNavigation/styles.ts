import {
    Box,
    List as MUIList,
    ListItemButton as MUIListItemButton
} from "@mui/material";
import styled from "styled-components";

export const MenuContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
`

export const List = styled(MUIList)
    (() => ({
        display: 'flex',
        gap: 5,
    }));


export const ListItemButton = styled(MUIListItemButton)
    (() => ({
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