import React from "react";
import { Link } from "react-router-dom";
import TAX from "../constants/tax.constants.js";
import { taxCalculator, grossIncome, netIncome } from "../utlis/tax";

const Income = ({ income, incSet }) => {
  return (
    <div>
      <h2 className="m-2">Your Income ${income} a month</h2>
      <div className="overflow-x-auto relative shadow-md m-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                ${netIncome(income, "annualy").toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-2">
        <Link to="/">
          <button
            className="lg:w-[400px] mx-2 hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105"
            onClick={() => incSet(0, "monthly")}
          >
            Calculate Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Income;
