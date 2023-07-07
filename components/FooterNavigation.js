import Link from "next/link";
import {
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineSparkles,
} from "react-icons/hi";

export default function Navigation() {
  return (
    <>
      <div
        data-theme="light"
        className="fixed inset-x-10 bottom-0 z-50 mb-2 flex animate-fade-in-down items-center justify-center"
      >
        <div className="h-16 absolute bottom-4 flex justify-center items-center rounded-full bg-white py-2 px-2 shadow-lg border border-base-300">
          <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="text-white aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 text-gray-800 cursor-pointer"
              >
                <HiOutlineHome />
              </label>
            </a>
          </div>
          <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center mx-2">
            <a href="#">
              <label
                htmlFor="moot-home"
                className="text-white aspect-1 items-center rounded-full border-none bg-gray-200 text-xl text-base-content hover:bg-blue-200 text-gray-800 cursor-pointer"
              >
                <HiOutlineSparkles />
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
