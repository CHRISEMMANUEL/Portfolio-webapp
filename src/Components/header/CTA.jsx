import React from "react";
import cvPDF from "../../assets/cv.pdf"; // Assuming the correct path to your PDF file

const CV = () => {
  return (
    <div className="CTA">
      <a href={cvPDF} download className="btn">
        Download CV
      </a>
      <a href="#contant" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CV;
