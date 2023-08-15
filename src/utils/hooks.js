import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export const useReduxUser = () => {
  return useSelector((state) => state.authUser.user);
};

export const useRouterQuery = () => {
  return useRouter().query;
};

export const useNotify = () => {
  const { enqueueSnackbar: notification } = useSnackbar();

  const defaultOpts = {
    persist: false,
    hideIconVariant: false,
    preventDuplicate: false,
    autoHideDuration: 5000,
  };

  const notify = {
    default: (msg, options = defaultOpts) =>
      notification(msg, { variant: "default", ...options }),
    error: (msg, options = defaultOpts) =>
      notification(msg, { variant: "error", ...options }),
    success: (msg, options = defaultOpts) =>
      notification(msg, { variant: "success", ...options }),
    info: (msg, options = defaultOpts) =>
      notification(msg, { variant: "info", ...options }),
    warning: (msg, options = defaultOpts) =>
      notification(msg, { variant: "warning", ...options }),
  };

  return notify;
};
