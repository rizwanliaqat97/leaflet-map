import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import PixiOverlay from "react-leaflet-pixi-overlay";
import MarkerIcon from "./marker";
import { renderToString } from "react-dom/server";
import tasks from "./tasks.json";

const colors = ["white", "black", "green", "yellow", "blue", "pink"];

const getRandomColor = () => colors[Math.ceil(Math.random() * 5)];

const getCoordinates = (): [number, number] => {
  const long = Math.random() * 7 + 7.32;
  const lat = Math.random() * 4 + 49.57;
  return [lat, long];
};

const markers = tasks
  .map((item) => ({ ...item, color: getRandomColor() }))
  .map((item, index) => {
    return {
      id: index,
      position: getCoordinates(),
      //   iconColor: "green",
      iconColor: item.color,
      onClick: () => alert(`A marker was clicked, ${index}, ${item.color}`),
      customIcon: renderToString(
        <MarkerIcon handle={item.checklist.handle} hexColor={item.color} />
      ),
    };
  });

const PixiOverlayApp = () => {
  //   console.log(
  //     "Marers: ",
  //     markers.map((item) => item.color)
  //   );

  return (
    <div>
      <MapContainer
        center={[51.48923, 10.237022]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "800px", width: "1400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <PixiOverlay markers={markers} />
      </MapContainer>
    </div>
  );
};

export default PixiOverlayApp;
