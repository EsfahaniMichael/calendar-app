import {React, useState, useRef } from 'react';
import './calendar.css';
import Modal from "react-modal";

function Day(props){
    const currentDay = useRef();
    function daySelected() {
        console.log(currentDay.current.innerText);
      }

    return (
        
        <div className="dayParent" onClick={daySelected} ref={currentDay}>
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