import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineHome,
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
} from "react-icons/hi";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function Navigation() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("james");
  };

  return (
    <>
      <div
        data-theme="light"
        className="fixed bottom-0 inset-x-0 z-50 mb-2 flex items-center justify-center"
      >
        <div className="absolute bottom-4 flex justify-center items-center rounded-full bg-white py-2 px-1 shadow-lg border border-base-300">
          <div className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer"
              >
                <HiOutlineHome />
              </label>
            </a>
            <div className="absolute whitespace-nowrap w-fit px-2 bg-gray-800 text-white text-center text-xs rounded-lg py-2 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 group-hover:pointer-events-auto">
              Home
            </div>
          </div>
          <div className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer cursor-wait">
            <div>
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-wait"
              >
                <HiOutlineSparkles />
              </label>
            </div>
            <div className="absolute whitespace-nowrap w-fit px-2 bg-gray-800 text-white text-center text-xs rounded-lg py-2 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 group-hover:pointer-events-auto">
              Work with me{" "}
              <span className="bg-gray-600 px-1 text-2xs ml-.5">
                coming soon
              </span>
            </div>
          </div>
          <div className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer">
            <div
              className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              <div className="">
                <label
                  htmlFor="moot-home"
                  className="aspect-1 items-center rounded-full border-none text-xl text-base-content cursor-pointer"
                >
                  <HiOutlinePaperAirplane />
                </label>
              </div>
            </div>
            {showPopup ? (
              <div
                ref={popupRef}
                className="absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-opacity-50 transform -translate-y-14 "
              >
                <div className="bg-white p-2 flex flex-row rounded-lg shadow">
                  <button className="mr-2 px-2 py-1 bg-gray-800 text-white rounded text-sm whitespace-nowrap">
                    Email
                  </button>
                  <button
                    onClick={() => copyEmail()}
                    className="bg-gray-800 px-2 py-1 text-white rounded text-sm whitespace-nowrap"
                  >
                    Copy address
                  </button>
                </div>
              </div>
            ) : (
              <div className="absolute whitespace-nowrap w-fit px-2 bg-gray-800 text-white text-center text-xs rounded-lg py-2 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 group-hover:pointer-events-auto">
                Contact
              </div>
            )}
          </div>
          <div className="border-r border-gray-200 w-1 h-6 ml-1" />
          <div className="border-l border-gray-200 w-1 h-6 mr-1" />
          <div className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer">
            <a
              href="https://twitter.com/jamesse_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none text-xl text-base-content cursor-pointer"
              >
                <TbBrandTwitter />
              </label>
            </a>
            <div className="absolute whitespace-nowrap w-fit px-2 bg-gray-800 text-white text-center text-xs rounded-lg py-2 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 group-hover:pointer-events-auto">
              Twitter
            </div>
          </div>
          <div className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer">
            <a
              href="https://instagram.com/jamiestirrat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-nonetext-xl text-base-content cursor-pointer"
              >
                <TbBrandInstagram size={24} />
              </label>
            </a>
            <div className="absolute whitespace-nowrap w-fit px-2 bg-gray-800 text-white text-center text-xs rounded-lg py-2 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 group-hover:pointer-events-auto">
              Instagram
            </div>
          </div>
          <div className="group relative hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/james-stirrat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none text-xl text-base-content cursor-pointer"
              >
                <TbBrandLinkedin size={24} />
              </label>
            </a>
            <div className="absolute whitespace-nowrap w-fit px-2 bg-gray-800 text-white text-center text-xs rounded-lg py-2 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 group-hover:pointer-events-auto">
              LinkedIn
            </div>
          </div>
          <div
            className="tooltip tooltip-primary normal-case text-xs"
            data-tip="Pricing"
          >
            <a href="#pricing">
              <label
                htmlFor="pricing-section"
                className="items-center btn btn-square mx-1 aspect-1 h-10 rounded-full border-none bg-base-200 text-3xl text-base-content hover:bg-base-300"
              >
                {/* <BoltIcon size={24} /> */}
              </label>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
