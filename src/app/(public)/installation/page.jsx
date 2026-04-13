"use client";

import { InstallAppsContext } from "@/context/install.context";
import Image from "next/image";
import React, { useContext } from "react";

const InstallPage = () => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  const handleUninstall = (app) => {
    const restApps = installedApps.filter((iApp) => iApp.id !== app.id);
    setInstalledApps(restApps);
    alert("Apps is Uninstalled");
  };

  return (
    <div className="max-w-7xl w-full mx-auto my-10 px-4">
      {installedApps.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
          No installed apps found!
        </h2>
      ) : (
        installedApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div>
                <Image
                  width={120}
                  height={120}
                  src={app.image}
                  className="h-[120px] w-auto"
                  alt=""
                />
                <h2 className="font-semibold text-2xl">{app.title}</h2>
              </div>
              <button
                className="btn bg-secondary text-white"
                onClick={() => handleUninstall(app)}
              >
                Uninstall
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallPage;
