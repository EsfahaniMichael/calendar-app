import {React, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


// export function Day(props){

//   const count = useSelector((state) => currentDay.current.innerText)

//   const currentDay = useRef();
//   function daySelected() {
//       console.log(currentDay.current.innerText);
//     }

//   return (
      
//       <div className="dayParent" onClick={daySelected} ref={currentDay}>
//       {props.singleDay.toString()}
//       </div> 
//   )
// }