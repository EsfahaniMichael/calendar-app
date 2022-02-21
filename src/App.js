import { React, useState, useRef, useEffect } from "react";
import "./App.css";
import { months } from "./helpers/yearInfo";

import Month from "./components/month";

function App() {
  const [currentMonth, changeCurrentMonth] = useState(new Date().getMonth());
  const [currentYearSelected, updateYear] = useState(new Date().getFullYear());
  let monthName = months[currentMonth];

  const [earlierMonth, changeEarlierMonth] = useState(currentMonth - 1);
  const [laterMonth, changeLaterMonth] = useState(currentMonth + 1);
  const earlierMonthName = months[earlierMonth];
  const laterMonthName = months[laterMonth];

  useEffect(() => {});

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
        />
      </div>
    </div>
  );
}

export default App;
