// import { styled } from "@mui/system";
import { Box, styled, Button, Grid } from "@mui/material";

export const CalculaterBox = styled(Box)`
  max-width: 26%;
  padding: 20px;
  margin:20px;
`;

export const ActionButton = styled(Button)`
  background-color: #fd913a;
  width: 100%;
  color: black;
  font-weight:500;
  margin
  &:hover: {
    background-color: #fd803a;
  }
`;

export const EqualButton = styled(Button)`
  background-color: orange;
  width: 100%;
  height: 100%;
`;
