import React from "react";
import Link from 'next/link'
export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <span
                  className="text-DarkBlue hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                Haydarov Asilbek
                </span>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li className="text-lovelyBlue hover:text-DarkBlue text-sm font-semibold block py-1 px-3">
                  <Link
                    href="/"
                  >
                    First launch in 2023
                  </Link>
                </li>
                <li className="text-lovelyBlue hover:text-DarkBlue text-sm font-semibold block py-1 px-3">
                  <Link
                    href="/tables"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                   V 1.0
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
