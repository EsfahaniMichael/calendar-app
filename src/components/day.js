import {React, useState, useRef } from 'react';
import {months, days, daysOfWeek} from '../helpers/yearInfo';
import './calendar.css';

function Day(props){
//    console.log(props.numberOfDays)
    const currentMonth = months[new Date().getMonth()];
    const currentDay = daysOfWeek[new Date().getDay()];
    const currentYear = new Date().getFullYear();
   
    return (
        <div className='dayParent'>
            <p>Month: {currentMonth}</p>
            <p>Day: {days[8]}</p>
            <p>Day of week: {currentDay}</p>
            <p>Year: {currentYear}</p>
        </div>  
    )



}

export default Day;