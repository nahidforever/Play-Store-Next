"use client";
import { InstallAppsContext } from "@/context/install.context";
import React, { useContext } from "react";

const InstallToggleButton = ({ app }) => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  const handleInstall = () => {
    setInstalledApps([...installedApps, app]);
    alert("App is installed");
  };

  const isInstalled = installedApps.find(
    (installApp) => installApp.id === app.id,
  );

  return (
    <div>
      <button
        disabled={isInstalled ? true : false}
        onClick={handleInstall}
        className={`btn ${isInstalled ? "opacity-90" : "bg-purple-500"} text-white`}
      >
        Install Now
      </button>
    </div>
  );
};

export default InstallToggleButton;
