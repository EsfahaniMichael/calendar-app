import {React, useState, useRef } from 'react';
import {months, days, daysOfWeek} from '../helpers/yearInfo';
import Day from './day';
import './calendar.css';

function Month(props){
   console.log(props.numberOfDays)
   
    return (
        <Day numOfDays={30}/>  
    )



}

export default Month;