"use client";

import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext, useEffect, useState } from "react";
import { InstallAppsContext } from "@/context/install.context";

const DashboardPage = () => {
  const [apps, setApps] = useState([]);
  const { installedApps } = useContext(InstallAppsContext);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const uninstalledAppsLength = apps.length - installedApps.length;

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 max-w-7xl mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Installed and uninstalled apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default DashboardPage;
