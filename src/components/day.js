import {React, useState, useRef } from 'react';
import {currentMonth, currentDay, currentDayNum, currentYear} from '../helpers/yearInfo';
import './calendar.css';

function Day(props){
    return (
        <div className='dayParent'>
            <p>Month: {currentMonth}</p>
            <p>Day: {currentDayNum}</p>
            <p>Day of week: {currentDay}</p>
            <p>Year: {currentYear}</p>
        </div>  
    )
}

export default Day;