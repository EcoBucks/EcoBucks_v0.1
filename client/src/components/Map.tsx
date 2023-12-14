"use client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
// let center = { lat: 3.5675618, lng: 98.6465939 };

type loc = {
  lat: number;
  lng: number;
};

const Map2 = ({ location }: { location: loc }) => {
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
      <div className=" z-0">
        {/* Google Map */}
        <div className="absolute left-0 top-0 h-[100%] w-[100%] z-0 pt-10">
          {/* Google Map Component */}
          <GoogleMap
            center={location}
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
            <Marker position={location} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>

        {/* Other Components */}
        {/* <div className="relative z-10">
          <div className="flex flex-row justify-between space-x-2">
            <div className="flex-grow">
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Origin"
                  ref={originRef}
                  className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </Autocomplete>
            </div>
            <div className="flex-grow">
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Destination"
                  ref={destinationRef}
                  className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </Autocomplete>
            </div>
            <div className="flex">
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded-l hover:bg-pink-600"
                type="submit"
                onClick={calculateRoute}
              >
                Calculate Route
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r hover:bg-gray-400"
                aria-label="Clear"
                onClick={clearRoute}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-4 space-x-4">
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
            <button
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              aria-label="Center Back"
              onClick={() => {
                map?.panTo(center);
                map?.setZoom(15);
              }}
            >
              Center Back
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Map2;
