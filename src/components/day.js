import {React, useState, useRef } from 'react';
import './calendar.css';
import Modal from "react-modal";
import { useDispatch } from 'react-redux';
import { changeDay } from '../features/daySelected';

function Day(props){
    const dispatch = useDispatch();
    const currentDay = useRef();
    function daySelected() {
        
        console.log(currentDay.current.getAttribute('day'));
        console.log(currentDay.current.getAttribute('year'));
      }
  
    
    return (
      <div className={`dayParent ${props.singleDay.toString()}`} onClick={() => {
        dispatch(changeDay({day:currentDay.current.getAttribute('day'),
         year:currentDay.current.getAttribute('year'), modal: true
        }))  
      }} ref={currentDay} day={props.singleDay.toString()} year={props.currentYear.toString()}>
      {props.singleDay.toString()}
      </div> 
    )
}

export default Day;

       {/* <Modal
            isOpen={IsOpen}
            // onAfterOpen={afterOpenModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >            
              <p>
                Play Again?
              </p>
              <button type="submit" onClick={resetModal}>Reset</button>
          </Modal> */}