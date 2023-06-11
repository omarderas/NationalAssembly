import React, { useState } from "react";
import axios from "axios";

const calculatePercent = (value, total) => Math.round((value / total) * 100);

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    console.log("FileUploader.handleChange event.target.files", event.target.files);
    setFile(event.target.files[0]);
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("FileUpload.handleSubmit file", file);

    const data = new FormData();
    data.append("files", file);

    const upload_res = await axios.post("http://localhost:1338/api/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progress) => setPercent(calculatePercent(progress.loaded, progress.total)),
    });

    console.log("FileUploader.handleSubmit upload_res", upload_res);
  };

  return (
    <div className="FileUploader">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" />
        <button>Submit</button>
      </form>
      {submitted && (
        <div className="Progress">
          <div className="Progress__Seek" style={{ width: `${percent}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
