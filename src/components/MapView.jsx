import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ geoJsonData }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (geoJsonData && mapRef.current) {
      const { current: map } = mapRef;
      const geoJsonLayer = new L.GeoJSON(geoJsonData);
      map.fitBounds(geoJsonLayer.getBounds());
    }
  }, [geoJsonData]);

  return (
    <MapContainer
      center={[20, 78]}
      zoom={4}
      style={{ height: "400px", width: "100%" }}
      whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoJsonData && <GeoJSON key={JSON.stringify(geoJsonData)} data={geoJsonData} />}
      </MapContainer>
  );
};

export default MapView;