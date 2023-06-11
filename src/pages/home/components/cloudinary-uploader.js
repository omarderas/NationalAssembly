import React, { useRef } from 'react';
import { v2 as cloudinary } from 'cloudinary-core';

const MyUploadForm = () => {
  const inputRef = useRef(null);

  const handleFileUpload = () => {
    const cloudName = 'dj1mbpjal';
    const unsignedUploadPreset = 'ml_default';

    const file = inputRef.current.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', unsignedUploadPreset);

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the successful upload
        console.log(data.secure_url);
        // You can store the Cloudinary URL or perform any other actions here
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" ref={inputRef} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default MyUploadForm;


