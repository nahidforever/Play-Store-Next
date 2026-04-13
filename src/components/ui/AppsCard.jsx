import Image from "next/image";
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppsCard = ({ app }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image width={200} height={200} src={app.image} alt={app.title}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>

        <div className="flex justify-between items-center">
          <span className="bg-green-100 text-gray-400 flex items-center gap-2 py-2 px-3 font-semibold rounded-md">
            <FaDownload />
            {app.downloads}
          </span>
          <span className="bg-orange-100-100 text-orange-500 flex items-center gap-2 py-2 px-3 font-semibold rounded-md">
            <FaDownload />
            <FaStar />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
