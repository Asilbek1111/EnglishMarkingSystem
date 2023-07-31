import React, { useEffect, useState } from "react";
import Simple from "./Simple";

function Tables() {
  const [fCoin, setFCoin] = useState(0);
  const [oCoin, setOCoin] = useState(Number(0));
  const [gCoin, setGCoin] = useState(Number(0));

  let farangiz = 0;
  useEffect(() => {
    if (localStorage.getItem("fcoin") == null) {
      localStorage.setItem("fcoin", fCoin);
    } else setFCoin(localStorage.getItem("fcoin"));

    if (localStorage.getItem("ocoin") == null) {
      localStorage.setItem("ocoin", oCoin);
    } else setOCoin(localStorage.getItem("ocoin"));

    if (localStorage.getItem("gcoin") == null) {
      localStorage.setItem("gcoin", gCoin);
    } else setGCoin(localStorage.getItem("gcoin"));
  }, []);
  useEffect(() => {
    localStorage.setItem("fcoin", fCoin);
    localStorage.setItem("ocoin", oCoin);
    localStorage.setItem("gcoin", gCoin);
  }, [fCoin, oCoin, gCoin]);

  console.log(fCoin);

  return (
    <Simple>
      <div>
        <div>
          <div className="relative md:pt-32 pb-32 pt-12"></div>
          <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
              <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/2"></div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-4 text-center">
                          Id
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Name
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Coins
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Qo'shish
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Ayirish
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* farangiz */}
                      <tr className="border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                        >
                          1
                        </th>
                        <td className="px-4 py-3 text-center">Farangiz</td>
                        <td className="px-4 py-3 text-center">{fCoin}</td>
                        <td className="px-4 py-3 max-w-[12rem] truncate flex justify-evenly items-center">
                          <button
                            onClick={() => {
                              setFCoin((prev) => Number(prev) + Number(1));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +1
                          </button>
                          <button
                            onClick={() => {
                              setFCoin((prev) => Number(prev) + Number(2));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +2
                          </button>
                          <button
                            onClick={() => {
                              setFCoin((prev) => Number(prev) + Number(5));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +5
                          </button>
                        </td>
                        <td className="px-4 py-3 items-center text-center ">
                          <button
                            onClick={() => {
                              setFCoin((prev) => Number(prev) + Number(-1));
                            }}
                            className="w-['fit-content'] mr-5 bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -1
                          </button>
                          <button
                            onClick={() => {
                              setFCoin((prev) => Number(prev) + Number(-2));
                            }}
                            className="w-['fit-content'] mr-5 bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -2
                          </button>
                          <button
                            onClick={() => {
                              setFCoin((prev) => Number(prev) + Number(-5));
                            }}
                            className="w-['fit-content'] bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -5
                          </button>
                        </td>
                      </tr>
                      {/* Ogabek */}
                      <tr className="border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                        >
                          2
                        </th>
                        <td className="px-4 py-3 text-center">Og'abek</td>
                        <td className="px-4 py-3 text-center">{oCoin}</td>
                        <td className="px-4 py-3 max-w-[12rem] truncate flex justify-evenly items-center">
                          <button
                            onClick={() => {
                              setOCoin((prev) => Number(prev) + Number(1));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +1
                          </button>
                          <button
                            onClick={() => {
                              setOCoin((prev) => Number(prev) + Number(2));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +2
                          </button>
                          <button
                            onClick={() => {
                              setOCoin((prev) => Number(prev) + Number(5));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +5
                          </button>
                        </td>
                        <td className="px-4 py-3 items-center text-center ">
                          <button
                            onClick={() => {
                              setOCoin((prev) => Number(prev) + Number(-1));
                            }}
                            className="w-['fit-content'] mr-5 bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -1
                          </button>
                          <button
                            onClick={() => {
                              setOCoin((prev) => Number(prev) + Number(-2));
                            }}
                            className="w-['fit-content'] mr-5 bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -2
                          </button>
                          <button
                            onClick={() => {
                              setOCoin((prev) => Number(prev) + Number(-5));
                            }}
                            className="w-['fit-content'] bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -5
                          </button>
                        </td>
                      </tr>

                      {/* Gulizar */}
                      <tr className="border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                        >
                          3
                        </th>
                        <td className="px-4 py-3 text-center">Gulizar</td>
                        <td className="px-4 py-3 text-center">{gCoin}</td>
                        <td className="px-4 py-3 max-w-[12rem] truncate flex justify-evenly items-center">
                          <button
                            onClick={() => {
                              setGCoin((prev) => Number(prev) + Number(1));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +1
                          </button>
                          <button
                            onClick={() => {
                              setGCoin((prev) => Number(prev) + Number(2));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +2
                          </button>
                          <button
                            onClick={() => {
                              setGCoin((prev) => Number(prev) + Number(5));
                            }}
                            className="w-['fit-content'] bg-green-500 px-3 py-1 rounded-md text-center text-white hover:bg-green-600 transition-all border-0"
                          >
                            +5
                          </button>
                        </td>
                        <td className="px-4 py-3 items-center text-center ">
                          <button
                            onClick={() => {
                              setGCoin((prev) => Number(prev) + Number(-1));
                            }}
                            className="w-['fit-content'] mr-5 bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -1
                          </button>
                          <button
                            onClick={() => {
                              setGCoin((prev) => Number(prev) + Number(-2));
                            }}
                            className="w-['fit-content'] mr-5 bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -2
                          </button>
                          <button
                            onClick={() => {
                              setGCoin((prev) => Number(prev) + Number(-5));
                            }}
                            className="w-['fit-content'] bg-red-600 px-3 py-1 rounded-md text-center text-white hover:bg-red-700 transition-all border-0"
                          >
                            -5
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Simple>
  );
}
export default Tables;
