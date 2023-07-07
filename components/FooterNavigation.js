import Link from "next/link";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
} from "react-icons/hi";

export default function Navigation() {
  return (
    <>
      <div
        data-theme="light"
        className="fixed left-4 inset-x-0 z-50 mb-2 flex items-center justify-center"
      >
        <div className="w-16 absolute left-4 flex flex-col justify-center items-center rounded-full bg-white px-2 py-1 shadow-lg border border-base-300">
          <div className="hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center my-1">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer"
              >
                <HiOutlineHome />
              </label>
            </a>
          </div>
          <div className="hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center my-1">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer"
              >
                <HiOutlineSparkles />
              </label>
            </a>
          </div>
          <div className="hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center my-1">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer rotate-45"
              >
                <HiOutlinePaperAirplane />
              </label>
            </a>
          </div>
          <div className="border-r border-gray-600 w-1 ml-1 bg-blue-500 h-full" />
          <div className="border-l border-gray-600 w-1 mr-1 bg-blue-500 h-full" />
          <div className="hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center my-1">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer rotate-45"
              >
                <HiOutlineArrowCircleLeft />
              </label>
            </a>
          </div>
          <div className="hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center my-1">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer rotate-45"
              >
                <HiOutlineArrowCircleLeft />
              </label>
            </a>
          </div>
          <div className="hover:bg-gray-800 hover:text-white text-gray-600 h-10 w-10 rounded-full flex items-center justify-center my-1">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 cursor-pointer rotate-45"
              >
                <HiOutlineArrowCircleLeft />
              </label>
            </a>
          </div>
          <div
            className="tooltip tooltip-primary normal-case text-xs"
            data-tip="Pricing"
          >
            <a href="#pricing">
              <label
                htmlFor="pricing-section"
                className="items-center btn btn-square my-1 aspect-1 h-10 rounded-full border-none bg-base-200 text-3xl text-base-content hover:bg-base-300"
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
