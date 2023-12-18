import { VideoModel } from "@/db/models/videos";
import Link from "next/link";
import React from "react";

const CardEducationContent = ({ video }: { video: VideoModel }) => {
  return (
    <>
      {/* Card Article */}
      <Link href={`/education/${video.slug}`}>
        <div className="h-[440px] flex flex-col w-full">
          <div className="h-[60%] rounded-[25px] overflow-hidden">
            <img
              src={video.thumbnail}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>

          <div className="flex flex-col mt-[3%] gap-y-2 justify-between">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-[12px] text-eb-30">{video.category}</h1>
              <h1 className="text-[24px] raleway font-bold text-gray-900">
                {video.title}
              </h1>
            </div>
            <p className="text-gray-500 w-[90%] text-ellipsis h-20 truncate overflow-hidden">
              {video.description}
            </p>
            <div className="flex flex-row gap-x-2 text-[13px] text-gray-800">
              <p className="font-bold">{video.author}</p>
              <p className="text-gray-600">{video.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardEducationContent;
