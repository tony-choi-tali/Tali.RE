/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./styles.module.scss";

import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import SideBar from "../Sidebar/SideBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
const UserHeader = ({ drawerWidth }) => {
  // state
  const [sidebarMenu, setSidebarMenu] = useState(false);

  // router
  const router = useRouter();

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <Box
      className={styles["header-container"]}
      sx={{
        padding: {
          xs: "20px 1.5rem",
          md: "20px 4rem",
          lg: "20px 8rem",
        },
      }}
    >
      <div className={styles["header-logo"]}>
        <img src="/images/logo.png" onClick={handleLogoClick} alt="logo" />
        {/* <Image
          src="/images/logo-1.png"
          alt="logo"
          fill
          priority
          className="cursor-pointer"
          onClick={handleLogoClick}
        /> */}
      </div>
      <Box
        className="flex items-center"
        sx={{ gap: { xs: "0.6rem", md: "1rem", lg: "2.25rem" } }}
      >
        <Link href="/?sign-up=1" className="font-[800] text-white underline">
          Vendor Sign up
        </Link>
        <div className="w-[2px] bg-white h-[50px]" />
        <Link href="#about" className="text-white ">
          About us
        </Link>
      </Box>
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <SideBar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          headerSidebar
        />
      </Drawer>
    </Box>
  );
};

export default UserHeader;
