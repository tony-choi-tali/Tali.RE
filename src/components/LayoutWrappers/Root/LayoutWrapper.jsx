"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "redux/authUser";

const RootLayoutWrapper = ({ children }) => {
  // router
  const pathname = usePathname();

  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    rehydrateRedux();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const rehydrateRedux = () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        dispatch(setAuthUser(userData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return children;
};

export default RootLayoutWrapper;
