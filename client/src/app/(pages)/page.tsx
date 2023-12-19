import Caraousel from "@/components/Caraousel";
import Card from "@/components/Card";
import CardEducation from "@/components/CardEducation";
import Footer from "@/components/Footer";
import { OptionMT, SelectMT } from "@/components/MaterialTailwind";
import { LocationType } from "@/types";
import { fetchData } from "../(action)/fetchDataHome";
import { fetchProvince } from "../(action)/fetchProvince";
import UcoForm from "@/components/UcoForm";
import { redirect } from "next/navigation";
import { searchProvince } from "../(action)/searchProvince";
import { cookies } from "next/headers";
import NavbarComponent from "@/components/Navbar";
import { getVideos } from "@/db/models/videos";
import Link from "next/link";

export default async function Home() {
  const slides = [
    "https://source.unsplash.com/random/900x700/?person",
    "https://source.unsplash.com/random/900x700/?person+2",
    "https://source.unsplash.com/random/900x700/?person+3",
    "https://source.unsplash.com/random/900x700/?person+4",
  ];

  type res = {
    statusCode: 200;
    message: "successfully read Location";
    data: LocationType[];
  };

  const data: res = await fetchData();

  const cookie = cookies();
  const token = cookie.get("token");

  // console.log(token);

  if (!token) {
    redirect("http://localhost:3000/login");
  }

  const videos = await getVideos();

  const provinces = await fetchProvince();
  const randomizedVideos = videos
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <NavbarComponent />

      {/* Hero Section */}
      <div className="flex w-screen h-[600px] items-center justify-center px-[8%] mt-[8%]">
        <div className="bg-white w-full h-full flex flex-row gap-x-4 animate-fade-up animate-delay-150">
          {/* Left Component */}
          <div className="flex flex-row justify-end items-center w-[70%] h-full rounded-[20px] overflow-hidden shadow-md">
            <div className="w-full h-full flex flex-row relative">
              <Caraousel autoSlide={true}>
                {slides.map((s) => (
                  <img
                    key={s + "id"}
                    src={s}
                    className="w-full h-full object-contain"
                    alt="image"
                  />
                ))}
              </Caraousel>
            </div>
          </div>

          <div className="flex w-[30%] animate-fade-up animate-delay-250">
            {/* Right Component */}
            <UcoForm />
          </div>
        </div>
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
            {data?.data?.slice(1, 6).map((location) => (
              <Card key={location + "id"} location={location} />
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="flex w-screen flex-col h-[450px] justify-start items-center mb-[5%]">
        <h1 className="text-sm text-eb-30">EcoBucks Education</h1>
        <h1 className="text-[50px] raleway font-medium text-gray-900 -mt-2">
          Education
        </h1>

        {/* Card Section */}
        <div className="flex flex-row w-screen px-[5%] h-[70%] justify-center items-center gap-x-4">
          {randomizedVideos.map((video, idx) => (
            <CardEducation key={idx} detail={video} />
          ))}
        </div>

        <div className="w-full justify-center items-center h-[20%] flex ">
          <Link href={"/education"}>
            <div className="flex flex-row gap-x-2 bg-eb-10 py-3 px-5 rounded-[20px] text-white w-full items-center justify-center hover:bg-eb-30 hover:scale-105 transition-all">
              <p>Get More Information</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
