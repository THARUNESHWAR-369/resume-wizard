import React from "react";

function LoaderComponent() {
  return (
    <div className="loader h-[100vh] w-full flex justify-center align-middle items-center transition-opacity duration-300">
      <div className="loader-container w-full flex justify-center flex-col align-middle relative">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <path
                fill="none"
                stroke="#f08b30"
                strokeWidth="8"
                strokeDasharray="32.07361602783203 32.07361602783203"
            d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
            strokeLinecap="round"
            style={{ transform: 'scale(0.7000000000000001)', transformOrigin: '50px 50px' }}
          >
            <animate
              attributeName="stroke-dashoffset"
              repeatCount="indefinite"
              dur="1.6666666666666667s"
              keyTimes="0;1"
              values="0;256.58892822265625"
            />
          </path>
        </svg>
        <span className="capitalize font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[2.6em]">Please be patient...</span>
      </div>
    </div>
  );
}

export default LoaderComponent;
