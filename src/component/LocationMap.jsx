import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import useSWR from "swr";
import { userMarker } from "../styles/globalStyle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Marker = ({ children }) => children;

const LocationMap = () => {
  const mapRef = useRef();
  const [zoom, setZoom] = useState();
  const [bounds, setBounds] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, error } = useSWR(url, fetcher);
  const users = data && !error ? data.slice(0, 200) : [];

  return (
    <div style={{ height: " 50vh", width: "50% " }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
        defaultZoom={10}
      >
        {users.map((user) => (
          <Marker
            key={user.id}
            lat={user?.address?.geo?.lat}
            lng={user?.address?.geo?.lng}
          >
            <div className={userMarker}>
              <img
                src="/location-svgrepo-com.svg"
                alt={user?.name}
                style={{ width: "15px " }}
              />
              {user?.name}
            </div>
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default LocationMap;
