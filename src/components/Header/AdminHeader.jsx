"use client";

import styles from "./styles.module.scss";

import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Menu as MuiMenu,
  Tooltip,
  Typography,
} from "@mui/material";
import { LogoutOutlined, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import Link from "next/link";
import AdminSidebar from "../Sidebar/AdminSidebar";
import dayjs from "dayjs";
import { projectName } from "theme/themeConfig";
import { removeAuthUser } from "redux/authUser";
import { useDispatch } from "react-redux";
import { useReduxUser } from "utils/hooks";
import { useRouter } from "next/navigation";

const AdminHeader = ({ drawerWidth }) => {
  // state
  const [currentDate, setCurrentDate] = useState(
    dayjs().format("ddd DD, YYYY hh:mm A")
  );
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menu = Boolean(anchorEl);

  // router
  const router = useRouter();

  // redux
  const dispatch = useDispatch();
  const userRedux = useReduxUser();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentDate(dayjs().format("ddd DD, YYYY hh:mm A"));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const handleLogout = async () => {
    handleMenuClose();
    Cookies.remove("loggedIn");
    router.push("/auth/login");
    dispatch(removeAuthUser());
    // const logoutEvent = new CustomEvent("logout", {
    //   detail: { logOut: true },
    // });
    // window.dispatchEvent(logoutEvent);
  };

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element) => {
    setAnchorEl(element);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles["header-container"]}>
      <Box className={styles["header-title-btn"]}>
        {userRedux && (
          <Tooltip title="Menu" arrow={true} placement="right">
            <IconButton
              className={styles["header-sidebar-btn"]}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
              onClick={handleSidebarDrawerOpen}
            >
              <Menu />
            </IconButton>
          </Tooltip>
        )}
        <Link href="/">
          <Typography className={styles["header-title"]}>
            {projectName}
          </Typography>
        </Link>
      </Box>
      {userRedux && (
        <div className="center">
          <span className={styles["date-span"]}>{currentDate}</span>
          <Avatar
            src="/images/user.png"
            onClick={(e) => handleOpenMenu(e.currentTarget)}
            className={styles["header-avatar"]}
          />
        </div>
      )}
      <MuiMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menu}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: { width: 150, maxWidth: "100%" },
        }}
      >
        <MenuList dense>
          <MenuItem autoFocus onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </MuiMenu>
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <AdminSidebar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          headerSidebar
        />
      </Drawer>
    </Box>
  );
};

export default AdminHeader;
