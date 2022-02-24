import { React, useState, useRef, useEffect } from "react";
import { months, days, daysOfWeek } from "../helpers/yearInfo";
import Day from "./day";
import "./calendar.css";

function Month(props) {
  const getDaysInMonth = function (month, year) {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysArray = [
    ...Array(getDaysInMonth(props.monthSelected, props.yearSelected)).keys(),
  ].map((x) => x + 1);
  const allDays = daysArray.map((day, i) => (
    <Day key={i} singleDay={day} currentYear={props.yearSelected}/>
  ));

  return (
    <div>
      {[allDays]}
    </div>
  );
}

export default Month;
