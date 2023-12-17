import { fetchData } from "@/app/(action)/fetchDataHome";
import { fetchProvince } from "@/app/(action)/fetchProvince";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { OptionMT, SelectMT } from "@/components/MaterialTailwind";
import NavbarComponent from "@/components/Navbar";
import { LocationType } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import ReactPlayer from "react-player/lazy";

const EducationPage = async () => {
  type res = {
    statusCode: 200;
    message: "successfully read Location";
    data: LocationType[];
  };

  const data: res = await fetchData();
  // console.log(data, "=========");

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

        <div className="flex flex-col lg:flex-row mt-6">
          {/* https://i.imgur.com/h0kHK4k.mp4 */}
          {/* <video
            className="w-[50%] h-[600px] rounded-xl "
            controls
            autoPlay
          >
            <source src="https://i.imgur.com/h0kHK4k.mp4" type="video/mp4" />
          </video> */}
          {/* 
          <iframe
            className="w-[100%] h-auto rounded-xl"
            src="https://www.youtube.com/embed/RwH53TJ_Sjk?si=ISyuWaiXPJlnYYiq?rel=0"
            allowFullScreen
          /> */}

          <iframe
            className="w-[100%] h-[400px] rounded-xl"
            src="https://www.youtube.com/embed/RwH53TJ_Sjk?si=ISyuWaiXPJlnYYiq?rel=0"
            allowFullScreen
            frameBorder="0"
            rel="0"
          />
          {/* 
          <ReactPlayer
            url="https://www.youtube.com/embed/RwH53TJ_Sjk?si=ISyuWaiXPJlnYYiq"
            config={{
              youtube: {
                playerVars: { rel: 0 },
              },
            }}
            controls={true}
            playing={true}
            volume={0.8}
          /> */}

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
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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

export default EducationPage;
