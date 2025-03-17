import React, { useState } from "react";
import { DOMParser } from "@xmldom/xmldom"; 
import { kml } from "@tmcw/togeojson"; 
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const FileUpload = ({ onFileLoaded }) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const xml = new DOMParser().parseFromString(text, "text/xml");
        const geoJson = kml(xml);
        console.log("GeoJSON Data:", geoJson); 
        onFileLoaded(geoJson); 
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg">
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload KML File
        <VisuallyHiddenInput
          type="file"
          accept=".kml"
          onChange={handleFileUpload}
        />
      </Button>
      {fileName && <p className="text-center text-gray-700">Uploaded: {fileName}</p>}
    </div>
  );
};

export default FileUpload;