import Image from "next/image";

export default function ProfileSidebar() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // path to your CV file in the public folder
    link.download = 'Aravind_Pandit_UpdatedCV.pdf'; // specify the file name
    link.click();
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-600  w-full p-6 text-white h-full ">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 bg-gray-500 rounded-full mb-4 flex items-center justify-center">
          <Image
            src="/PortfolioImage.png"
            className="  rounded-full"
            width={400}
            height={400}
            alt="portfolio-pic"
          />
        </div>
        <h2 className="text-2xl font-bold">Aravind Pandit</h2>
        <p className="text-gray-200">Senior Frontend Engineer</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2">
          Contact
        </h3>
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="text-sm">arvindputtu@gmail.com</span>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <span className="text-sm">6371460914</span>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
          <a href="https://github.com/arvindp1997" target="blank" className="text-sm hover:underline">
            Github: arvindp-github
          </a>
        </div>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
          </svg>
          <a
            target="blank"
            href="https://www.linkedin.com/in/aravindpandit/"
            className="text-sm hover:underline"
          >
            LinkedIn: arvindp-linkedin
          </a>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-[150px] shadow-sm bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300"
      >
        Download CV
      </button>
    </div>
  );
}
