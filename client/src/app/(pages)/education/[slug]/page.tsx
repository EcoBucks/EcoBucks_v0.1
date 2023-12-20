import { fetchData } from "@/app/(action)/fetchDataHome";
import { fetchProvince } from "@/app/(action)/fetchProvince";
import Card from "@/components/Card";
import CopyButton from "@/components/CopyButton";
import Footer from "@/components/Footer";
import ShareWhatsapp from "@/components/ShareWhatsapp";
import { getVideoBySlug } from "@/db/models/videos";
import { LocationType } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";

const EducationDetail = async ({ params }: { params: { slug: string } }) => {
  // console.log(params.slug);

  const data: LocationType[] = (await fetchData()) as any;

  if (!data) {
    redirect("http://localhost:3000/login");
  }
  const provinces = await fetchProvince();

  const video = await getVideoBySlug(params.slug);
  // console.log(video);

  return (
    <>
      <div className="mt-20 py-14 px-[8%]">
        {/* BreadCrumb */}
        <Link href="/education">
          <div className="flex flex-row w-fit">
            <nav
              aria-label="breadcrumb"
              className="w-fit dark:bg-gray-800 dark:text-gray-100"
            >
              <div className="flex flex-row w-full gap-x-2 items-center">
                <span
                  className="material-symbols-outlined text-gray-700 rounded-lg"
                  style={{ fontSize: 20 }}
                >
                  arrow_back
                </span>
                <li className=" underline flex items-center text-[14px] text-gray-600">
                  Other Educations
                </li>
              </div>
            </nav>
          </div>
        </Link>

        {/* Video Section */}
        <div className="flex flex-col lg:flex-row mt-6">
          <iframe
            className="w-[100%] h-[400px] rounded-xl sticky top-24"
            src={video.videoUrl}
            allowFullScreen
            frameBorder="0"
            rel="0"
          />

          <div className="px-8 w-full flex flex-col justify-between mt-4 lg:mt-0 gap-y-5">
            <div className="flex flex-col gap-y-6 w-full">
              <img
                src={video.thumbnail}
                className="rounded-md h-[150px] w-full object-cover hidden lg:block"
              />
              <div className="gap-y-4">
                <h1 className="font-bold text-[1.5rem] lg:text-[2rem] text-[#052E1B] raleway">
                  {video.title}
                </h1>
                <p className="my-4 text-gray-600">
                  {video.author} | {video.date}
                </p>
                <p className="text-[#052E1B] text-[16px] leading-7 w-[95%]">
                  {video.description}
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <ul className="flex justify-center mt-5 space-x-2 items-center">
                <CopyButton />
                <ShareWhatsapp>
                  <img
                    src="/whatsapp-icon.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </ShareWhatsapp>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End of Video Section */}

      <div className="px-[8%] my-4 mb-12">
        <hr className="h-[2px] bg-[#e2e2e2] rounded-lg border-0" />
      </div>

      {/* LocationSearch */}
      <div className="w-screen h-[620px] items-center justify-start px-[8%] flex-col flex mt-[5%] animate-fade-up animate-delay-500">
        <div className="flex flex-col w-full">
          <p className="text-eb-30 text-[14px]">Location EcoBucks</p>
          <Link href={"/location"}>
            <div className="flex flex-row gap-x-4 items-center group w-fit">
              <p className="text-[50px] raleway font-medium group group-hover:text-eb-10 transition-all">
                Our Nearest Collecting Point
              </p>
              {/* Button Next or See All */}
              <div className="bg-eb-30 rounded-full w-[50px] h-[50px] flex justify-center items-center transition-all group-hover:animate-shake">
                <span
                  className="material-symbols-outlined hover"
                  style={{ color: "white" }}
                >
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Collecting Point Section */}
        <div className="flex flex-col w-screen items-center h-[450px] px-[8%]">
          {/* Card Bar */}
          <div className="overflow-x-auto flex flex-row w-full h-full items-start justify-start pl-1 py-5 gap-x-5">
            {data?.slice(1, 6).map((location) => (
              <Card key={location + "id"} location={location} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EducationDetail;
