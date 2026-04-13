import React from "react";
import AppsCard from "../ui/AppsCard";

const appsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async () => {
  const apps = await appsPromise();
  // console.log(apps);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Trending apps</h2>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {apps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
