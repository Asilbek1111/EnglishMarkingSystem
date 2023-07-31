import React, { useEffect, useState } from "react";
import Simple from "./Simple";
import StarIcon from "@material-ui/icons/Star";
import axios from "../axios";
import DeleteIcon from "@material-ui/icons/Delete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Delete from "@material-ui/icons/Delete";
import SweetAlert from "react-bootstrap-sweetalert";
import Allert from "../components/Allert";
const Table = () => {
  const [data, setData] = useState([]);
  const [el, setEl] = useState();
  const [editShow, setEditShow] = useState(false);
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    axios
      .get("/popularTours")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Delete = (e, el) => {
    console.log(el._id);
    axios
      .delete(`/popularTours/${el._id}`)
      .then((res) => {
        console.log(res);
        setShow(true);
        axios
          .get("/popularTours")
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };
  const onCancel = () => {
    setShowWarning(false);
  };
  const onConfirm = () => {
    setShow(false);
  };
  const onConfirmEdit = () => {};
  const onCancelEdit = () => {
    setEditShow(false);
  };
  console.log(data);
  return (
    <Simple>
      <SweetAlert
        success
        title="SuccessFully deleted"
        show={show}
        onConfirm={onConfirm}
        onCancel={onConfirm}
        confirmBtnCssClass="px-6 py-3 bg-DarkBlue text-white rounded text-xl cursor-pointer"
        //  timeout={2000}
      />
      <SweetAlert
        danger
        confirmBtnText="ok"
        confirmBtnBsStyle="danger"
        title="You cannot post it"
        show={showWarning}
        onConfirm={onCancel}
        onCancel={onCancel}
        confirmBtnCssClass="px-6 py-3 bg-red-600 text-white rounded text-xl cursor-pointer"
        focusCancelBtn
      ></SweetAlert>
      <Allert
        showCancel
        show={editShow}
        onCancel={onCancelEdit}
        onConfirm={onConfirmEdit}
        el={el}
        url="popularTours"
      />
      <h1 className="text-gray-900 hover:text-DarkBlue text-2xl mb-4 font-bold text-center">
        TourPakets
      </h1>
      {data.map((el) => {
        const img = el.img.slice(8, 25);
        console.log(img);
        return (
          <>
            <div
              className=" w-full h-auto"
              style={{
                backgroundImage: `url(https://back.ielts-mock.uz/uploads/${img})`,
              }}
            >
              <div className="grid sm:grid-cols-1 md:mx-60 sm:grid-rows-1 md:grid-cols-7 gap-4 sm:p-4 md:p-10">
                <div className="card-1 md:col-span-4 grid-rows-2 gap-4 px-4 py-5">
                  <div className="text-3xl mb-6 font-bold">
                    <h3 className="text-white sm:text-center md:text-left">
                      {el.title_ru} <br /> {el.title_eng}
                    </h3>
                  </div>
                  <div className="text-lg sm:text-md">
                    <h3 className="text-DarkBlue font-bold sm:text-center md:text-left">
                      {el.description_ru} <br />
                      {el.description_eng}
                    </h3>
                  </div>
                </div>
                <div className="card-2 px-3 md:col-span-3 text-center mb-2">
                  <div className=" bg-white py-4 w-full rounded-md">
                    <h5 className="mt-6 mb-6 text-3xl font-bold">
                      {el.location} от $ {el.price} на человека.
                    </h5>
                    <button className="bg-DarkBlue mb-4 hover:bg-blue-900 text-white font-bold py-2.5 px-5 rounded">
                      Бронировать
                    </button>
                    <span className="block text-gray-800 font-bold mb-1">
                      {el.cardBottomText}
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="bg-DarkBlue text-white rounded-md px-2 py-1"
                onClick={() => {
                  setEl(el), setEditShow(true);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-800 text-white rounded-md px-2 py-1"
                onClick={(e) => Delete(e, el)}
              >
                Delete
              </button>
            </div>
          </>
        );
      })}
    </Simple>
  );
};
export default Table;
