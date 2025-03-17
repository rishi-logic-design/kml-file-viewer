import React from "react";
import * as turf from "@turf/turf"; 

const Detailed = ({ geoJsonData }) => {
  if (!geoJsonData || !geoJsonData.features) return null;

  const details = geoJsonData.features
    .filter((feature) => {
      if (feature.geometry && feature.geometry.type) {
        console.log("Checking Geometry Type:", feature.geometry.type); 
        return ["LineString", "MultiLineString"].includes(feature.geometry.type);
      } else {
        console.log("Invalid feature:", feature);
        return false;
      }
    })
    .map((feature) => ({
      type: feature.geometry.type,
      length: turf.length(feature, { units: "kilometers" }).toFixed(2),
    }));

  return (
    <div className="p-4 border rounded-lg shadow-lg mt-4">
      <h3 className="text-xl font-bold mb-4">Detailed Analysis</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Length (km)</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.type}</td>
              <td className="py-2 px-4 border-b">{item.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Detailed;