import { React, useState, useRef } from "react";
import "./App.css";
import { months, days, daysOfWeek } from "./helpers/yearInfo";

import Month from "./components/month";

function App() {
  const [currentMonth, changeCurrentMonth] = useState(2);
  const [currentYearSelected, updateYear] = useState(2022);

  const monthName = months[currentMonth - 1];

  let earlierMonth = months[currentMonth-2]
  let laterMonth = months[currentMonth]

  function getMonthInfo() {
    //  changeCurrentMonth(parseInt(months.indexOf(currentMonth)));
  }

  function getEarlierMonth(){
    console.log('earlier');
  }

  function getLaterMonth(){
    console.log('later');
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
          <button onClick={getEarlierMonth}>&#8249; {earlierMonth}</button>

          <div>
            {monthName}
          </div>
          <button onClick={getLaterMonth}>{laterMonth} &#8250;</button>
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
