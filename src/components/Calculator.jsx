import React, { useState } from "react";
import IncomeDetails from "./IncomeDetails";
import Income from "./Income";
import { Link, Route, Routes } from "react-router-dom";

const Calculator = () => {
  const [income, setInc] = useState("");

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
          <button>Income Detals</button>
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
                <IncomeDetails income={income} incSet={handleincomeSet} />
              }
            />
            <Route
              path="/Income"
              element={<Income incSet={handleincomeSet} income={income} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
