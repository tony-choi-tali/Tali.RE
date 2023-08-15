"use client";

import { Container } from "@mui/material";
import UserHeader from "components/Header/UserHeader";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import { DRAWER_WIDTH } from "../../theme/drawer";

const WebLayout = ({ children }) => {
  // state
  const [drawerWidth] = useState(DRAWER_WIDTH);

  return (
    <div className="web-main-container">
      <video className="video-tag" autoPlay loop muted>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <UserHeader drawerWidth={drawerWidth} />
      <Container className="content-container" maxWidth="xl">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </Container>
    </div>
  );
};

export default WebLayout;
