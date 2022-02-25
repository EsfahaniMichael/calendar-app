import { React, useState, useRef, useEffect } from "react";
import "./App.css";
import { months } from "./helpers/yearInfo";
import { Counter } from "./features/counter/counter";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import Month from "./components/month";
import { useDispatch } from "react-redux";
import { changeDay } from "./features/daySelected";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "30%",
  },
};

function App() {
  const [currentMonth, changeCurrentMonth] = useState(new Date().getMonth());
  const [currentYearSelected, updateYear] = useState(new Date().getFullYear());
  const monthName = months[currentMonth];
  const [earlierMonth, changeEarlierMonth] = useState(currentMonth - 1);
  const [laterMonth, changeLaterMonth] = useState(currentMonth + 1);
  const earlierMonthName = months[earlierMonth];
  const laterMonthName = months[laterMonth];

  const currentDayModal = useSelector((state) => state.currentday.value);
  const dispatch = useDispatch();

  useEffect(() => {});

  function getEarlierMonth() {
    // (currentMonth === 0) ? (changeCurrentMonth(11), updateYear(currentYearSelected-1)) : changeCurrentMonth(currentMonth-1);
    if (currentMonth === 0) {
      changeCurrentMonth(11);
      updateYear(currentYearSelected - 1);
    } else {
      changeCurrentMonth(currentMonth - 1);
    }
    earlierMonth === 0
      ? changeEarlierMonth(11)
      : changeEarlierMonth(earlierMonth - 1);
    laterMonth === 0 ? changeLaterMonth(11) : changeLaterMonth(laterMonth - 1);
  }

  function getLaterMonth() {
    // (currentMonth === 11) ? changeCurrentMonth(0) : changeCurrentMonth(currentMonth+1);
    if (currentMonth === 11) {
      changeCurrentMonth(0);
      updateYear(currentYearSelected + 1);
    } else {
      changeCurrentMonth(currentMonth + 1);
    }
    earlierMonth === 11
      ? changeEarlierMonth(0)
      : changeEarlierMonth(earlierMonth + 1);
    laterMonth === 11 ? changeLaterMonth(0) : changeLaterMonth(laterMonth + 1);
  }
  return (
    <div className="App">
      <div>
        <div>{currentYearSelected}</div>
        <div className="leftRightButtonParent">
          <button onClick={getEarlierMonth}>&#8249; {earlierMonthName}</button>
          <div>{monthName}</div>
          <button onClick={getLaterMonth}>{laterMonthName} &#8250;</button>
        </div>
        <Month
          monthSelected={currentMonth}
          yearSelected={currentYearSelected}
        />

        <Modal
          isOpen={currentDayModal.modal}
          // onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button
            onClick={() => {
              dispatch(
                changeDay({
                  day: currentDayModal.day,
                  year: currentDayModal.year,
                  modal: false,
                })
              );
            }}
            aria-label="Close Day Info Modal Box"
          >
            ×
          </button>
          <div>Day: {currentDayModal.day}</div>
          <div>Year: {currentDayModal.year}</div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
