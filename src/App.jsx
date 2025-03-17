import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Summary from './components/Summary';
import Detailed from './components/Detailed';
import MapView from './components/MapView';

const App = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [uploadKey, setUploadKey] = useState(0);

  const handleFileLoaded = (data) => {
    console.log("Data received in App:", data);
    setGeoJsonData(null); 
    setUploadKey(prevKey => prevKey + 1); 
    setTimeout(() => setGeoJsonData(data), 0); 
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-2xl font-bold mb-8'>KML File Viewer</h1>
      <div className='mb-8'>
        <FileUpload onFileLoaded={handleFileLoaded} />
      </div>
      {geoJsonData && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='col-span-1'>
            <MapView key={uploadKey} geoJsonData={geoJsonData} />
          </div>
          <div className='col-span-1'>
            <Summary key={uploadKey} geoJsonData={geoJsonData} />
            <Detailed key={uploadKey} geoJsonData={geoJsonData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;