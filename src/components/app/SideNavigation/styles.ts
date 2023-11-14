import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  width: 100%;
  max-width: 90px;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 20px;
  background-color: white;
`;

export const NavigationIconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 60px;
    height: fit-content;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 5px 0px;

    svg {
      width: auto;
      height: 23px;
    }
  }

  &.active div {
    background-color: #fff};

    svg {
      fill: #ccc};
    }
  }

  span {
    font-size: 11px;
    font-weight: 600;
    text-transform: none;
  }

  &:hover div {
    background-color: #fff};
    transition: all 0.1s linear;
  }
`;

export const SettingsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  div {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: 1px solid #fff};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px;
    cursor: pointer;

    svg {
      width: auto;
      height: 24px;
    }
  }

  div:hover {
    background-color: #fff};
    transition: all 0.1s linear;
  }
`;
