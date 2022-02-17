import {React, useState, useRef } from 'react';
import {months, days, daysOfWeek} from '../helpers/yearInfo';
import Day from './day';
import './calendar.css';

function Month(props){
    return (
        <Day month={props.monthSelected}/>  
    )
}

export default Month;