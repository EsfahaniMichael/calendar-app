import {React, useState, useRef } from 'react';
import './App.css';
import {months, days, daysOfWeek} from './helpers/yearInfo';

import Month from './components/month';


function App() {
  const [currentMonth, changeCurrentMonth] = useState(2);
  function getMonthInfo(){
    //  changeCurrentMonth(parseInt(months.indexOf(currentMonth)));
  }
  // console.log(currentMonth)
  return (
    <div className="App">
     <Month monthSelected={currentMonth}/>
    </div>
  );
}

export default App;
