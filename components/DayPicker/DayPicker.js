import React from "react";
import InputGroup from '../InputGroup/InputGroup'
// components

export default function DayPicker() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Yangi guruh</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Yangi Dars Jadvali
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <InputGroup
                    label="Hafta Kunlari"
                    inputType="select"
                    elementConfig={{ options: [{id:1, name: 'Dushanba - Chorshanba - Juma'},{id:2, name: 'Seshanba - Payshanba - Shanba'},{id:3, name: 'Boshqa kunlar'},] }}
                    changed={(e) => setName(e.target.value)}
                 />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <InputGroup
                    label="Vaqti"
                    inputType="select"
                    elementConfig={{ options: [{id:1, name: '10:00 - 11:30'},{id:2, name: '11:30 - 13:00'},{id:3, name: '13:00 - 14:30'},{id:4, name: '14:30 - 16:00'},{id:5, name: '16:00 - 17:30'},{id:6, name: '17:30 - 19:00'}, {id:7, name: '19:00 - 20:30'}] }}
                    changed={(e) => setName(e.target.value)}
                 />
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-4">
            <button type="submit" className="bg-lovelyBlue rounded text-white px-2 py-3">Submit</button>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
    </>
  );
}
