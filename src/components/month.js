import { React, useState, useRef, useEffect } from "react";
import { months, days, daysOfWeek } from "../helpers/yearInfo";
import Day from "./day";
import "./calendar.css";
import { useDispatch } from "react-redux";
import { changeDay } from "../features/daySelected";
import { useSelector } from "react-redux";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "30%",
  },
};

function Month(props) {
  const currentDayModal = useSelector((state) => state.currentday.value);
  const dispatch = useDispatch();
  console.log(props.arr)
  // const getDaysInMonth = function (month, year) {
  //   return new Date(year, month + 1, 0).getDate();
  // };
  // const daysArray = [
  //   ...Array(getDaysInMonth(props.monthSelected, props.yearSelected)).keys(),
  // ].map((x) => x + 1);

  // function updateDaySlice(){
  //   dispatch(changeDay({day:1,
  //    year:1,
  //     modal: false, daysInMonth: 1,
  //   }))
  // }
  // setTimeout(() => {updateDaySlice()}, 5000);
  console.log("Month");

  const allDays = props.arr.map((day, i) => (
    <Day key={i} singleDay={day} currentYear={props.yearSelected} />
  ));

  return (
    <div>
      {[allDays]}
      <div>DAYS IN MONTH: {currentDayModal.daysInMonth}</div>
      <div>Day: {currentDayModal.day}</div>
      <div>Year: {currentDayModal.year}</div>
      <Modal
        isOpen={currentDayModal.modal}
        // onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button
          onClick={() => {
            dispatch(
              changeDay({
                day: currentDayModal.day,
                year: currentDayModal.year,
                modal: false,
                daysInMonth: currentDayModal.daysInMonth,
              })
            );
          }}
          aria-label="Close Day Info Modal Box"
        >
          ×
        </button>
          <div>Day: {currentDayModal.day}</div>
          <div>Year: {currentDayModal.year}</div>
          <div>DAYS IN MONTH: {currentDayModal.daysInMonth}</div>
      </Modal>
    </div>
  );
}

export default Month;
