import { createTheme } from "@mui/material/styles";
import colorVariables from "../styles/colors.module.scss";

export const snackBarPlacement = { horizontal: "center", vertical: "top" };

export const projectName = "Tali";

export const primaryColor = colorVariables.primary;
const secondaryColor = colorVariables.secondary;
const tableHeadColor = colorVariables.tableHeadColor;

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "white",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: tableHeadColor,
        },
      },
    },
  },
});
