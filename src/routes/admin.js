import { Group, Home } from "@mui/icons-material";

export const routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <Home />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/users",
    name: "Users",
    icon: <Group />,
    sidebar: true,
    isPrivate: true,
  },
];
