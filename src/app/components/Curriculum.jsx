import React from "react";

const Curriculum = ({ downloadUrl, className, children }) => {
  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Curriculum.pdf"; // Default name for downloaded file
      link.click();
    }
  };

  return (
    <button
      className={`px-3 py-2 ml-2 mt-4 curriculum-button bg-transparent text-white border-2 border-transparent rounded-full transition-colors duration-300 ease-in-out ${className}`}
      style={{ borderColor: "#2C66C3" }} // Ensure borderColor style is set
      onClick={handleDownload}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#2C66C3";
        e.target.style.borderColor = "#2C66C3";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.borderColor = "#2C66C3";
      }}
    >
      {children}
    </button>
  );
};

export default Curriculum;
