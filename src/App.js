import { React, useState, useRef, useEffect } from "react";
import "./App.css";
// import { months, days, daysOfWeek } from "./helpers/yearInfo";

import Month from "./components/month";

function App() {
  const months = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];

  /// gives currentMonth a number value
  const [currentMonth, changeCurrentMonth] = useState(new Date().getMonth());
  const [currentYearSelected, updateYear] = useState(new Date().getFullYear());
  let monthName = months[currentMonth];

  //gives earlier and later month a str value
  const  [earlierMonth, changeEarlierMonth] = useState(currentMonth-1)
  const [laterMonth, changeLaterMonth] = useState(currentMonth+1)
  const earlierMonthName = months[earlierMonth];
  const laterMonthName = months[laterMonth];

  useEffect() /// useeffect to update the year... once state gets changed for currentMonth, useEffect triggers, lets update the
  // year based off of current Month. 

  function getMonthInfo() {
    //  changeCurrentMonth(parseInt(months.indexOf(currentMonth)));
  }

  function getEarlierMonth(){
    (currentMonth === 0) ? changeCurrentMonth(11) : changeCurrentMonth(currentMonth-1);
    (earlierMonth === 0) ? changeEarlierMonth(11) : changeEarlierMonth(earlierMonth-1);
    (laterMonth === 0) ? changeLaterMonth(11) : changeLaterMonth(laterMonth-1);
  }

  function getLaterMonth(){
    (currentMonth === 11) ? changeCurrentMonth(0) : changeCurrentMonth(currentMonth+1);
    (earlierMonth === 11) ? changeEarlierMonth(0) : changeEarlierMonth(earlierMonth+1);
    (laterMonth === 11) ? changeLaterMonth(0) : changeLaterMonth(laterMonth+1);
  }
 
  function getYearInfo() {
    //updateYear()
  }
  // console.log(currentMonth)
  return (
    <div className="App">
      <div>
      <div>{currentYearSelected}</div>
        <div className="leftRightButtonParent">
          <button onClick={getEarlierMonth}>&#8249; {earlierMonthName}</button>
          <div>
            {monthName}
          </div>
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
