import {React, useState, useRef } from 'react';
import {months, days, daysOfWeek} from '../helpers/yearInfo';
import Day from './day';
import './calendar.css';

function Month(props){
    

    function daySelected(){
        console.log('hi')
    }
    const getDaysInMonth = function(month,year) {
       return new Date(year, month+1, 0).getDate();
      };
    const daysArray = ([...Array(getDaysInMonth(props.monthSelected, props.yearSelected)).keys()].map(x => x+1));
    const allDays = daysArray.map((day) => 
    <div className='dayParent' onClick={daySelected} key={day.toString()}>
        {day.toString()}
    </div>
    )  
    return (
        <div>
        {/* <div>{monthName} {props.yearSelected}</div> */}
        {[allDays]}
        </div>
    )
}

export default Month;