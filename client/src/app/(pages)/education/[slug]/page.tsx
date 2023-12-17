import { fetchData } from "@/app/(action)/fetchDataHome";
import { fetchProvince } from "@/app/(action)/fetchProvince";
import Card from "@/components/Card";
import CopyButton from "@/components/CopyButton";
import Footer from "@/components/Footer";
import { OptionMT, SelectMT } from "@/components/MaterialTailwind";
import NavbarComponent from "@/components/Navbar";
import { LocationType } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import ReactPlayer from "react-player/lazy";

const EducationDetail = async ({ params }: { params: { slug: string } }) => {
  // console.log(params.slug);

  type res = {
    statusCode: 200;
    message: "successfully read Location";
    data: LocationType[];
  };

  const data: res = await fetchData();

  if (!data) {
    redirect("http://localhost:3000/login");
  }
  const provinces = await fetchProvince();

  return (
    <>
      <NavbarComponent />

      <div className="mt-20 py-14 px-[6%]">
        {/* BreadCrumb */}
        <Link href="/education">
          <div className="flex flex-row">
            <nav
              aria-label="breadcrumb"
              className="w-full dark:bg-gray-800 dark:text-gray-100"
            >
              <div className="flex flex-row w-full gap-x-2 items-center">
                <span
                  className="material-symbols-outlined text-gray-700 rounded-lg"
                  style={{ fontSize: 20 }}
                >
                  arrow_back
                </span>
                <li className=" flex items-center text-[1rem] text-[#052E1B]">
                  Kembali
                </li>
              </div>
            </nav>
          </div>
        </Link>

        {/* Video Section */}
        <div className="flex flex-col lg:flex-row mt-6">
          <iframe
            className="w-[100%] h-[400px] rounded-xl"
            src="https://www.youtube.com/embed/RwH53TJ_Sjk?si=ISyuWaiXPJlnYYiq?rel=0"
            allowFullScreen
            frameBorder="0"
            rel="0"
          />

          <div className="px-8 w-full flex flex-col justify-between mt-4 lg:mt-0">
            <div className="flex flex-col ">
              <img
                src="https://i.imgur.com/LQVC86I.jpeg"
                className="rounded-md h-[150px] w-full object-cover hidden lg:block"
              />
              <div className="">
                <h1 className="text-bold text-[1.5rem] lg:text-[2rem] text-[#052E1B]">
                  Minyak Jelantah Jadi Berkah
                </h1>
                <p className="my-2">By: TRACTion Energy Asia</p>
                <p className="text-[#052E1B] text-[16px] text-justify  leading-6">
                  Bayangkan berapa banyak minyak goreng yang dikonsumsi di
                  Indonesia mengingat masyarakat kita sangat menyukai gorengan.
                  Sekitar 16 juta kiloliter minyak digoreng setiap tahunnya –
                  cukup untuk mengisi 6.400 kolam renang ukuran olimpiade.
                  Tonton video ini untuk mengetahui apa yang bisa Anda
                  sumbangkan kepada lingkungan melalui pengumpulan minyak
                  jelantah.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <ul className="flex justify-center mt-5 space-x-5">
                <CopyButton />
                <Link
                  href="whatsapp://send?text=https://youtu.be/RwH53TJ_Sjk?si=B5Ggh3zVzNVndKHD"
                  data-action="share/whatsapp/share"
                  target="_blank"
                  className="flex items-center bg-[#557f6b] text-white rounded-md p-3"
                >
                  Share to WhatsApp
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End of Video Section */}

      <div className="px-[6%] my-4">
        <hr className="h-[2px]  bg-[#e2e2e2] rounded-lg border-0" />
      </div>

      {/* Collection Points */}
      <div className="w-screen h-[730px] items-center justify-start px-[6%] flex-col flex">
        <div className="flex flex-col w-full">
          <p className="text-eb-30 text-[14px]">Location EcoBucks</p>
          <p className="text-[50px] raleway font-medium -mt-2">
            Store UCO to Nearest Location
          </p>
        </div>

        <div className="flex flex-col w-screen items-center h-[660px] py-12 px-[8%]">
          {/* Search Bar */}
          <div className="flex w-full justify-start items-start -mt-4">
            <form className="flex flex-row bg-white shadow-md w-[35%] h-[96px] ml-2 rounded-xl justify-between px-[2%]">
              <div className="flex flex-col justify-center gap-y-2 items-start w-[30%]">
                <div className="flex flex-row gap-x-2 items-center">
                  <span
                    className="material-symbols-outlined text-gray-700"
                    style={{ fontSize: 30 }}
                  >
                    location_on
                  </span>
                  <SelectMT
                    placeholder={""}
                    variant="standard"
                    label="Select Province"
                    name="province"
                  >
                    {provinces?.map((province, index) => (
                      <OptionMT key={index}>{province}</OptionMT>
                    ))}
                  </SelectMT>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[38%]">
                <div className="flex flex-row gap-x-2 bg-eb-10 px-4 py-3 rounded-[15px] text-white">
                  <span className="material-symbols-outlined">search</span>
                  <p>Search</p>
                </div>
              </div>
            </form>
          </div>

          <div className="overflow-x-auto flex flex-row w-full h-[80%] items-start justify-start pl-1 py-5 gap-x-5">
            {data?.data?.map((location) => (
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
