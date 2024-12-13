import React from "react";
import "./PDFresume.scss";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = "/current-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Joey-Zazzi-Resume.pdf";
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
