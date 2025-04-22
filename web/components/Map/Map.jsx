"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LeafletMap = () => {
  const position = [41.395191, 27.345400];

  return (
    <MapContainer
    center={position}
    zoom={17}
    scrollWheelZoom={false}
    style={{ width: "100%", height: "500px", borderRadius: "12px" }}
    >
    <TileLayer
    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
  <Popup>
  Ramazan Yaman Fen Lisesi <br /> Kırklareli, Türkiye
  </Popup>
  </Marker>
  </MapContainer>
  );
};

export default LeafletMap;
