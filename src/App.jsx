import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function App() {
  return (
    <div className="">
      <div className="bg-red-10 p-6  min-h-screen min-w-screen h-full max-w-full max-h-full">
        <nav className="bg-red-600  max-w-full h-16 flex justify-between items-center px-6 text-white">
          <ul className="flex gap-5 items-center'">
            <li className="text-lg font-semibold">Kalvium</li>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Courses</li>
            <li className="flex pl-10 "></li>
          </ul>
          <div>
            <button className="bg-red-500 text-white  space-y-reverse  py-2 px-4 border-solid border-2 border-white rounded">
              Login
            </button>
          </div>
        </nav>
        <section className="mb-6 px-10 py-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
            Button One
          </button>
          <div className="p-4 mt-10 flex text-red-500 w-100 h-15 border-solid border-3 border-red bg-red-200 rounded">
            <strong>Alert!</strong> <p>This is awesome!</p>
          </div>
        </section>
        <div className="text-center">
          <div className="shadow-2xl flex w-[45%] mt-40  mx-auto p-6 items-center">
            <div className="pl-4">
              <p className="text-[25px] font-bold ">Kalvium Store</p>
              <p className="text-gray-500">You have a new course!</p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-40  space-x-2 mt-4">
            <CopyrightIcon />
            <p>2021 Copyright:</p>
            <h6 className="font-semibold">Kalvium</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
