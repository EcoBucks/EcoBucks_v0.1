"use client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

let center = { lat: 3.5675618, lng: 98.6465939 };

const MapSubmitUCO = ({ children }: { children?: React.ReactNode }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCXK97myyLm_Wd3-arEaT39nPdjzCtOshU",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef<HTMLInputElement | null>(null);
  const destinationRef = useRef<HTMLInputElement | null>(null);

  if (!isLoaded) {
    return "error while loaded";
  }

  const calculateRoute = async () => {
    if (!originRef || !destinationRef) {
      return;
    }

    if (originRef.current && destinationRef.current) {
      // Check if the element has a 'value' property
      if ("value" in originRef.current && "value" in destinationRef.current) {
        const originValue = (originRef.current as HTMLInputElement).value;
        const destinationValue = (destinationRef.current as HTMLInputElement)
          .value;

        if (originValue === "" || destinationValue === "") {
          return;
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();

        if (
          originRef &&
          destinationRef &&
          originRef.current &&
          destinationRef.current
        ) {
          const originValue = (originRef.current as HTMLInputElement).value;
          const destinationValue = (destinationRef.current as HTMLInputElement)
            .value;

          const results = await directionsService.route({
            origin: originValue,
            destination: destinationValue,
            travelMode: google.maps.TravelMode.DRIVING,
          });
          setDirectionsResponse(results);
          if (
            results.routes &&
            results.routes.length > 0 &&
            results.routes[0].legs &&
            results.routes[0].legs.length > 0
          ) {
            const distance = results.routes[0].legs[0].distance?.text || "N/A";
            const duration = results.routes[0].legs[0].duration?.text || "N/A";

            setDistance(distance);
            setDuration(duration);
          }
        }
      }
    }
  };

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    if (originRef && originRef.current && "value" in originRef.current) {
      (originRef.current as HTMLInputElement).value = "";
    }
    if (
      destinationRef &&
      destinationRef.current &&
      "value" in destinationRef.current
    ) {
      (destinationRef.current as HTMLInputElement).value = "";
    }
  }
  return (
    <>
      <div className="w-full h-full z-0 relative">
        {/* Google Map */}
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-0">
          {/* Google Map Component */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            {/* Marker and DirectionsRenderer components */}
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>

        {/* Input Field */}
        <div className="absolute flex flex-col left-0 justify-start items-start space-x-2 h-[30%] w-[35%] m-[3%] gap-y-2">
          <div className="flex flex-col w-full gap-y-2 ml-2">
            {/* Origin Input */}
            <Autocomplete>
              <input
                type="text"
                placeholder="Origin"
                ref={originRef}
                className="w-full bg-white h-[35px] text-gray-900 rounded-lg px-4 text-[14px] focus:outline-none"
              />
            </Autocomplete>
            {/* Destination Input */}
            <Autocomplete>
              <input
                type="text"
                placeholder="Destination"
                ref={destinationRef}
                className="w-full bg-white h-[35px] text-gray-900 rounded-lg px-4 text-[14px] focus:outline-none"
              />
            </Autocomplete>
          </div>

          {/* Calculate Route Button */}

          <div className="flex flex-row w-full gap-x-2">
            <button
              className="px-5 text-white bg-eb-30 py-1 rounded-md text-[14px]"
              type="submit"
              onClick={calculateRoute}
            >
              See Prices
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md text-[14px]"
              onClick={clearRoute}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Distance, Duration, and Center Back Button */}

        <div className="absolute flex flex-row items-center mt-4 space-x-4 bottom-0 w-full bg-eb-20 text-white px-[5%] h-[35px] transition-all">
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
        </div>

        {/* Back Center */}
        <div className="absolute space-x-4 top-0 right-0 text-white m-[3%]">
          <button
            className="bg-gray-900 hover:bg-eb-30 rounded-md px-2 py-1 mx-auto"
            aria-label="Center Back"
            onClick={() => {
              map?.panTo(center);
              map?.setZoom(15);
            }}
          >
            <span className="material-symbols-outlined">distance</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MapSubmitUCO;
