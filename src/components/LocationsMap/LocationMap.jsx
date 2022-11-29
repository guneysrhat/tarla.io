import React from "react";
import GoogleMapReact from "google-map-react";
import { Map } from "./LocationMap.style";

const Marker = ({ children }) => children;

const LocationMap = ({ userInfo }) => {
  return (
    <Map>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: 39.925533, lng: 32.866287 }}
        defaultZoom={5}
      >
        {userInfo?.map((user) => (
          <Marker key={user?.id} lat={user?.lat} lng={user?.lng}>
            <div>
              <img
                src="/location-svgrepo-com.svg"
                alt={user?.id}
                style={{ width: "15px " }}
              />
              {user?.id} {user?.name}
            </div>
          </Marker>
        ))}
      </GoogleMapReact>
    </Map>
  );
};

export default LocationMap;
