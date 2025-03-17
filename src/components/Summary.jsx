import React, { useState, useEffect } from "react";

const Summary = ({ geoJsonData }) => {
  const [summaryData, setSummaryData] = useState({});

  useEffect(() => {
    if (!geoJsonData || !geoJsonData.features) {
      console.log("Invalid geoJsonData:", geoJsonData);
      setSummaryData({});
      return;
    }

    const countElements = geoJsonData.features.reduce((acc, feature) => {
      if (feature.geometry && feature.geometry.type) {
        const type = feature.geometry.type;
        acc[type] = (acc[type] || 0) + 1;
      } else {
        console.log("Invalid feature:", feature);
      }
      return acc;
    }, {});

    setSummaryData(countElements);
  }, [geoJsonData]); 

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Summary</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(summaryData).map(([type, count]) => (
            <tr key={type}>
              <td className="py-2 px-4 border-b">{type}</td>
              <td className="py-2 px-4 border-b">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
