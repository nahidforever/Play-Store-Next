import React from "react";
import AppsCard from "../ui/AppsCard";
import Link from "next/link";

const appsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async ({ from }) => {
  const apps = await appsPromise();
  // console.log(apps);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">
          {from === "homepage" ? "Trending apps" : "All Apps"}
        </h2>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {apps.slice(0, from === "homepage" ? 9 : apps.length).map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>

      <div className="text-center mt-7">
        <Link href={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
