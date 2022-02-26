import { React, useState, useRef, useEffect } from "react";
import "./App.css";
import { months } from "./helpers/yearInfo";
import Month from "./components/month";
import { useDispatch } from "react-redux";
import { changeDay } from "./features/daySelected";
// import { useSelector } from "react-redux";

function App() {
  console.log("App");

  const [currentMonth, changeCurrentMonth] = useState(new Date().getMonth());
  const [currentYearSelected, updateYear] = useState(new Date().getFullYear());
  const monthName = months[currentMonth];
  const [earlierMonth, changeEarlierMonth] = useState(currentMonth - 1);
  const [laterMonth, changeLaterMonth] = useState(currentMonth + 1);
  // console.log('1')

  const earlierMonthName = months[earlierMonth];
  const laterMonthName = months[laterMonth];

  const getDaysInMonth = function (month, year) {
    return new Date(year, month + 1, 0).getDate();
  };
  const daysArray = [
    ...Array(getDaysInMonth(currentMonth, currentYearSelected)).keys(),
  ].map((x) => x + 1);

  const dispatch = useDispatch();

  function updateDaySlice() {
    console.log('1')
    dispatch(
      changeDay({
        day: 2,
        year: currentYearSelected,
        modal: false,
        daysInMonth: daysArray.length,
      })
    );
      console.log('2')
  }
  function useDidUpdate (callback, deps) {
    const hasMount = useRef(false)
    useEffect(() => {
      if (hasMount.current) {
        callback()
      } else {
        hasMount.current = true
      }
    }, deps)
  }

  useDidUpdate(() => {
    updateDaySlice()
  }, [currentMonth])
  
  function getEarlierMonth() {
    // (currentMonth === 0) ? (changeCurrentMonth(11), updateYear(currentYearSelected-1)) : changeCurrentMonth(currentMonth-1);
    if (currentMonth === 0) {
      changeCurrentMonth(11);
      updateYear(currentYearSelected - 1);
    } else {
      changeCurrentMonth(currentMonth - 1);
    }
    earlierMonth === 0
      ? changeEarlierMonth(11)
      : changeEarlierMonth(earlierMonth - 1);
    laterMonth === 0 ? changeLaterMonth(11) : changeLaterMonth(laterMonth - 1);
  }

  function getLaterMonth() {
    // (currentMonth === 11) ? changeCurrentMonth(0) : changeCurrentMonth(currentMonth+1);
    if (currentMonth === 11) {
      changeCurrentMonth(0);
      updateYear(currentYearSelected + 1);
    } else {
      changeCurrentMonth(currentMonth + 1);
    }
    earlierMonth === 11
      ? changeEarlierMonth(0)
      : changeEarlierMonth(earlierMonth + 1);
    laterMonth === 11 ? changeLaterMonth(0) : changeLaterMonth(laterMonth + 1);
  }
  // console.log('2')

  return (
    <div className="App">
      <div>
        <div>{currentYearSelected}</div>
        <div className="leftRightButtonParent">
          <button onClick={getEarlierMonth}>&#8249; {earlierMonthName}</button>
          <div>{monthName}</div>
          <button onClick={getLaterMonth}>{laterMonthName} &#8250;</button>
        </div>
        <Month
          monthSelected={currentMonth}
          yearSelected={currentYearSelected}
          arr={daysArray}
          // currentDayModal={currentDaySelected}
        />
      </div>
    </div>
  );
}

export default App;
