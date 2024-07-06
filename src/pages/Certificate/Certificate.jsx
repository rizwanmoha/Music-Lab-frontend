import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({  username , courseName , completionDate }) => {
 

  const handleDownloadCertificate = () => {
    const certificateElement = document.querySelector('.certificate');
    const { offsetWidth, offsetHeight } = certificateElement;
    const pdfWidth = offsetWidth;
    const pdfHeight = offsetHeight;

    html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div className="certificate p-8 bg-white rounded-lg shadow-lg text-center flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-semibold text-blue-500 mb-4">
        Master's of Music
      </h2>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Certificate of Completion
      </h2>
      <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {username}
      </h2>
      
      <p className="text-lg text-gray-600 mb-8 px-8 text-center">
  with the legal name of John Doe, has demonstrated exemplary commitment and
  proficiency. After completing the rigorous requirements, he has successfully
  and satisfactorily finished the {courseName}, showcasing commendable dedication
  and achieving a high level of understanding in the Music Mastery.
</p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Music Mastery Completion Certificate
      </h2>
      <p className="text-lg text-gray-600 mb-4">on this day</p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {completionDate}
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={handleDownloadCertificate}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;



