"use client";

import "./globals.scss";
import "../styles/login.scss";
import "../styles/footer.scss";
import "../styles/sidebar.scss";
import "nprogress/nprogress.css";

import { projectName, snackBarPlacement, theme } from "theme/themeConfig";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Nunito } from "next/font/google";
import { SnackbarProvider } from "notistack";
import { createRef } from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import RootLayoutWrapper from "../components/LayoutWrappers/Root/LayoutWrapper";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// react query
const queryClient = new QueryClient();

// notistack
const notistackRef = createRef();

const closeNotistack = (key) => {
  notistackRef.current.closeSnackbar(key);
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={nunito.className}>
      <head>
        <title>{projectName}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="NextJs web app" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              ref={notistackRef}
              anchorOrigin={snackBarPlacement}
              autoHideDuration={3000}
              variant="success"
              maxSnack={1}
              preventDuplicate
              action={(key) => (
                <>
                  <IconButton size="small" onClick={() => closeNotistack(key)}>
                    <Close sx={{ color: "white" }} />
                  </IconButton>
                </>
              )}
            >
              <Provider store={store}>
                <RootLayoutWrapper>
                  <main>{children}</main>
                </RootLayoutWrapper>
              </Provider>
            </SnackbarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
