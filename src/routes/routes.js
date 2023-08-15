import { Home } from "@mui/icons-material";

export const routes = [
  {
    path: "/",
    name: "Home",
    icon: <Home />,
    sidebar: false,
    isPrivate: true,
  },
];

// isPublic => only accessible when user signed-out
// isPrivate => only accessible when user signed-in
// isHybrid => always accessible

export const Public_Routes = routes
  .filter((item) => item.isPublic)
  .map((item) => item.path);
export const Private_Routes = routes
  .filter((item) => item.isPrivate)
  .map((item) => item.path);
export const Hybrid_Routes = routes
  .filter((item) => item.isHybrid)
  .map((item) => item.path);
export const Access_Route = "/";
export const Login_Route = "/auth/login";
