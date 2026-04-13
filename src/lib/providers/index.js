"use-client";

import InstallAppsProvider from "@/context/install.context";
import React from "react";

const Providers = ({ children }) => {
  return <InstallAppsProvider>{children}</InstallAppsProvider>;
};

export default Providers;
