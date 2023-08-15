"use client";

import { ComponentShield } from "next-shield";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import NotAuthorized from "../../NotAuthorized/NotAuthorized";

const DashboardLayoutWrapper = ({ children }) => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    checkUserRole();
  }, []);

  const checkUserRole = async () => {
    // check role through api
    setTimeout(() => {
      setShowDashboard(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <Spinner size={50} showText />
      </div>
    );
  }

  return (
    <ComponentShield showIf={showDashboard} fallback={<NotAuthorized />}>
      {children}
    </ComponentShield>
  );
};

export default DashboardLayoutWrapper;
