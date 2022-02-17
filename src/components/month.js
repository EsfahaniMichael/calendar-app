import {React, useState, useRef } from 'react';
import {months, days, daysOfWeek} from '../helpers/yearInfo';
import Day from './day';
import './calendar.css';

function Month(props){
    const getDaysInMonth = function(month,year) {
       return new Date(year, month, 0).getDate();
      };
      console.log(getDaysInMonth(props.monthSelected, 2022))
    const daysArray = ([...Array(getDaysInMonth(props.monthSelected, 2022)).keys()].map(x => x+1));
    const allDays = daysArray.map((day) => 
    <div className='dayParent' key={day.toString()}>
        {day.toString()}
    </div>
    )  
    return (
        [allDays]
    )
}

export default Month;