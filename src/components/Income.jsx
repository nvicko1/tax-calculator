import React from "react";
import { Link } from "react-router-dom";
import { taxCalculator, grossIncome, netIncome } from "../utlis/tax";

const Income = ({ income, incSet, time }) => {
  return (
    <>
      <div className="p-2">
        <div
          style={{
            background: `linear-gradient(var(--primary-dark), var(--primary-light))`,
            padding: "3px",
            border: "2px solid gray",
            marginBottom: "2px",
            color: "white",
          }}
          className="w-full lg:w-[400px]"
        >
          <h2 className="m-2">
            Your Gross Income $
            {income ? Number(grossIncome(income, time)).toFixed(0) : 0} {time}
          </h2>
        </div>
        <div
          style={{
            background: `linear-gradient(var(--primary-dark), var(--primary-light))`,
            padding: "3px",
            border: "2px solid gray",
            marginBottom: "2px",
            color: "white",
          }}
          className="w-full  lg:w-[400px]"
        >
          <h2 className="m-2">
            Your Net Income $
            {income ? Number(netIncome(income, time)).toFixed(0) : 0} {time}
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto relative  m-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Frequency
              </th>
              <th scope="col" className="py-3 px-6">
                Gross income
              </th>
              <th scope="col" className="py-3 px-6">
                Tax
              </th>
              <th scope="col" className="py-3 px-6">
                Net Income
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Weekly
              </th>
              <td className="py-4 px-6">
                ${grossIncome(income, "weekly").toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${taxCalculator(income, "weekly").toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${netIncome(income, "weekly").toFixed(2)}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Fortnightly
              </th>
              <td className="py-4 px-6">
                ${grossIncome(income, "fortnightly").toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${taxCalculator(income, "fortnightly").toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${netIncome(income, "fortnightly").toFixed(2)}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Monthly
              </th>
              <td className="py-4 px-6">
                ${Number(grossIncome(income, "monthly")).toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${taxCalculator(income, "monthly").toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${netIncome(income, "monthly").toFixed(2)}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Annualy
              </th>
              <td className="py-4 px-6">
                ${Number(grossIncome(income, "annualy")).toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${taxCalculator(income, "annualy").toFixed(2)}
              </td>
              <td className="py-4 px-6">
                ${Math.round(netIncome(income, "annualy")).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-2">
        <Link to="/">
          <button
            style={{
              fontSize: "20px",
              border: "2px solid gray",
              marginBottom: "2px",
              color: "white",
            }}
            className="w-full mt-2 lg:w-[400px] hover:shadow-xl hover:shadow-indigo-500/50 "
            onClick={() => incSet(0, "monthly")}
          >
            Calculate Again
          </button>
        </Link>
      </div>
    </>
  );
};

export default Income;
