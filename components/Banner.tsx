import React from "react";
import UploadButton from "./UploadButton";

type Props = {
  name?: string;
};

const Banner = ({ name }: Props) => {
  return (
    <div className="mt-5">
      <UploadButton />
      <div className="mt-5 border-[2px] border-black rounded-lg">
        <div className="flex">
          {/* Check Stats Starts */}
          <div className="bg-secondary h-[121px] w-[240px] polygon flex items-center space-x-2 pl-5 rounded-l-lg">
            {/* Stats Icon */}
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="11" width="4" height="10" rx="2" fill="#787A86" />
              <rect x="13" y="9" width="4" height="12" rx="2" fill="#787A86" />
              <rect x="20" y="2" width="4" height="19" rx="2" fill="#787A86" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 0C0.671573 0 0 0.671572 0 1.5V24.5C0 25.3284 0.671573 26 1.5 26L26.5 26C27.3284 26 28 25.3284 28 24.5C28 23.6716 27.3284 23 26.5 23L3 23V1.5C3 0.671573 2.32843 0 1.5 0Z"
                fill="white"
              />
            </svg>
            <h3 className="font-bold text-white text-xl">Chek stats</h3>
          </div>
          {/* Check Stats End */}
          {/* Gold Member Starts */}
          <div className="w-5/12 flex flex-col justify-center">
            <p className="text-dark_gray text-[14px] font-semibold">
              Current plan
            </p>
            <p className="font-bold text-xl text-black">Gold Member</p>
          </div>
          {/* Gold Member Ends */}
        </div>
        <div className="flex">
          {/* Gold Member Starts */}
          <div className="w-5/12 flex flex-col justify-center">
            <p className="text-dark_gray text-[14px] font-semibold">
              Current plan
            </p>
            <p className="font-bold text-xl text-black">Gold Member</p>
          </div>
          {/* Gold Member Ends */}
          {/* Check Stats Starts */}
          <div className="bg-secondary h-[121px] w-[240px] polygon2 flex items-center space-x-2 pl-5 rounded-r-lg">
            {/* Stats Icon */}
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="11" width="4" height="10" rx="2" fill="#787A86" />
              <rect x="13" y="9" width="4" height="12" rx="2" fill="#787A86" />
              <rect x="20" y="2" width="4" height="19" rx="2" fill="#787A86" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 0C0.671573 0 0 0.671572 0 1.5V24.5C0 25.3284 0.671573 26 1.5 26L26.5 26C27.3284 26 28 25.3284 28 24.5C28 23.6716 27.3284 23 26.5 23L3 23V1.5C3 0.671573 2.32843 0 1.5 0Z"
                fill="white"
              />
            </svg>
            <h3 className="font-bold text-white text-xl">Chek stats</h3>
          </div>
          {/* Check Stats End */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
