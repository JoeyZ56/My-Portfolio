import React from "react";
import "./PDFresume.scss";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = "/MyResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MyResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="pdf__button" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadButton;
