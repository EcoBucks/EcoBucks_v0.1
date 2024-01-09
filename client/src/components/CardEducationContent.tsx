import { VideoModel } from "@/db/models/videos";
import Link from "next/link";
import React from "react";

const CardEducationContent = ({ video }: { video: VideoModel }) => {
  // console.log(video);

  const plainVideo = JSON.parse(JSON.stringify(video));

  return (
    <>
      {/* Card Article */}
      <Link href={`/education/${plainVideo?.slug}`}>
        <div className="h-[440px] flex flex-col w-full items-center justify-start">
          <div className="h-[55%] w-[95%] rounded-[15px] overflow-hidden">
            <img
              src={plainVideo.thumbnail}
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all"
            />
          </div>

          <div className="flex flex-col gap-y-2 justify-between p-3 mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-[12px] text-eb-30">{plainVideo.category}</h1>
              <h1 className="text-[24px] raleway font-bold text-gray-900 line-clamp-2">
                {plainVideo.title}
              </h1>
            </div>
            <p className="text-gray-500 line-clamp-2 overflow-hidden text-[14px]">
              {plainVideo.description}
            </p>
            <div className="flex flex-row gap-x-2 text-[13px] text-gray-800">
              <p className="font-bold">{plainVideo.author}</p>
              <p className="text-gray-600">{plainVideo.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardEducationContent;
