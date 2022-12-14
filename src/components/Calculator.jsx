import React, { useState } from "react";
import IncomeDetails from "./IncomeDetails";
import Income from "./Income";
import { Link, Route, Routes } from "react-router-dom";

const Calculator = () => {
  const [income, setInc] = useState("");
  const [time, setTime] = useState("monthly");

  const handleSetTime = (value) => {
    setTime(value);
  };

  const handleincomeSet = (inc, time) => {
    let finalIncome;
    switch (time) {
      case "weekly":
        finalIncome = (inc * 4).toFixed(2);
        break;
      case "fortnightly":
        finalIncome = (inc * 2).toFixed(2);
        break;
      case "monthly":
        finalIncome = Number(inc).toFixed(2);
        break;
      case "annualy":
        finalIncome = (Number(inc) / 12).toFixed(2);
        break;
    }
    setInc(finalIncome);
  };

  return (
    <div className="max-w-[1140px] items-center justify-center mx-auto my-2 ">
      <div className="flex">
        <Link to="/">
          <button
            style={{
              border: "2px solid gray",
              color: "white",
              fontSize: "18px",
            }}
          >
            Income Detals
          </button>
        </Link>
      </div>
      <div className="max-w-[1140px] border shadow-lg h-[600px]">
        <div className="flex justify-between border">
          <div className="justify-center flex">
            <h2 className="my-2 mx-2">Income Tax Calculator</h2>
          </div>
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <IncomeDetails
                  income={income}
                  handleSetTime={handleSetTime}
                  incSet={handleincomeSet}
                  time={time}
                />
              }
            />
            <Route
              path="/Income"
              element={
                <Income
                  handleSetTime={handleSetTime}
                  incSet={handleincomeSet}
                  income={income}
                  time={time}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
