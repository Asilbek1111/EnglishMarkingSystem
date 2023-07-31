import React from 'react'

const Guruhlar =({ color })=>{
    return(
        <>
         <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded text-black"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg text-black"
                }
              >
                O'qituvchining Guruhlari
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Hafta Kunlari
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Soat
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  O'quchilar soni
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold mt-3" +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                   Dushanba - Chorshanba - Shanba
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  10:00 - 12:00
                </td>
                <td className="border-t-0 px-6 text-2xl align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                10
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold mt-3" +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Dushanba - Chorshanba - Shanba
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                14:00 - 15:00
                </td>
                <td className="border-t-0 px-6 text-2xl align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                8
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold mt-3" +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Seshanba - Payshanba - Shanba
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                09:00 - 11:00
                </td>
                <td className="border-t-0 px-6 text-2xl align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                5
                </td>
              </tr><tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold mt-3" +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Dushanba - Chorshanba - Shanba
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                15:00 - 17:00
                </td>
                <td className="border-t-0 px-6 text-2xl align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                12
                </td>
              </tr><tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold mt-3" +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Seshanba - Payshanba - Shanba
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                18:00 - 20:00
                </td>
                <td className="border-t-0 px-6 text-2xl align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                7
                </td>
              </tr>
           </tbody>
          </table>
        </div>
      </div>
        </>
    )
}
export default Guruhlar