import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MULTI } from '../constants/tax.constants'

const IncomeDetails = (props) => {
  const [income, setIncome] = useState(props.income)
  const [gross, setGross] = useState(true)

  const handleIncome = (e) => {
    setIncome(e.target.value)
  }

  const handleGross = (e) => {
    setGross(e.target.value)
  }

  return (
    <div className="mx-2 my-2">
      <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
        <h2>What is your income?</h2>
        <div className="mx-4">
          <input
            className="w-full border p-2  mt-2 outline:solid-var lg:w-[400px]  "
            type="text"
            placeholder="0000&euro;"
            value={income}
            onChange={handleIncome}
          />
        </div>
        <form action="" className="lg:justify-between w-full items-center">
          <div className="flex flex-col my-2 py-2 mx-4">
            <label htmlFor="">Salary:</label>
            <select
              defaultValue={props.time}
              value={props.time}
              onChange={(e) => props.handleSetTime(e.target.value)}
              name="weekly"
              className="lg:w-[400px] md:w-full border p-2"
            >
              <option value="weekly">Weekly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="monthly">Monthly</option>
              <option value="annualy">annualy</option>
            </select>
          </div>
          <ul className="grid w-full md:grid-cols-2 lg:grid-cols-1 lg:w-[400px]">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value={true}
                className="hidden peer "
                onChange={handleGross}
              />
              <label
                for="hosting-small"
                className=" hover:scale-105 peer-checked:scale-105 inline-flex lg:w-[400px] justify-between items-center p-3 w-full text-zinc-50 peer-checked:bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white border border-primary-dark cursor-pointer dark:hover:text-gray-50 dark:border-gray-50 dark:peer-checked:text-blue-50 peer-checked:border-zinc-900 peer-checked:text-blue-50 peer-checked:shadow-lg peer-checked:shadow-indigo-500/50 hover:text-gray-50 hover:bg-primary-dark bg-slate-500 "
              >
                <div>
                  <div className="w-full">Gross income</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value={false}
                onChange={handleGross}
                className="hidden peer"
              />
              <label
                for="hosting-big"
                className="hover:scale-105 peer-checked:scale-105 inline-flex lg:w-[400px] justify-between items-center p-3 w-full text-zinc-50 peer-checked:bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white border border-primary-dark cursor-pointer dark:hover:text-gray-50 dark:border-gray-50 dark:peer-checked:text-blue-50 peer-checked:border-zinc-900 peer-checked:text-blue-50 peer-checked:shadow-lg peer-checked:shadow-indigo-500/50 hover:text-gray-50 hover:bg-primary-dark bg-slate-500"
              >
                <div className="block">
                  <div className="w-full">net inome</div>
                </div>
              </label>
            </li>
          </ul>
          <Link to="/income">
            <div className="flex flex-col my-2 p-2">
              <button
                id="btn"
                style={{
                  fontSize: '18px',
                  border: '2px solid gray',
                  marginBottom: '2px',
                  color: 'white',
                }}
                className="lg:w-[400px] mx-2 hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105"
                onClick={() =>
                  props.incSet(
                    gross === 'false' ? income * MULTI : income,
                    props.time
                  )
                }
              >
                <Link to="/income">Calculate</Link>
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default IncomeDetails
