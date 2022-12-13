import TAX from "../constants/tax.constants.js";

export const taxCalculator = function (salary, time) {
  let calculatedTax;
  switch (time) {
    case "weekly":
      calculatedTax = (salary / 4) * TAX;
      break;
    case "fortnightly":
      calculatedTax = (salary / 2) * TAX;
      break;
    case "monthly":
      calculatedTax = salary * TAX;
      break;
    case "annualy":
      calculatedTax = salary * 12 * TAX;
      break;
  }

  return calculatedTax;
};

export const netIncome = function (inc, time) {
  let netInc;

  switch (time) {
    case "weekly":
      netInc = inc / 4 - (inc / 4) * TAX;
      break;
    case "fortnightly":
      netInc = inc / 2 - (inc / 2) * TAX;
      break;
    case "monthly":
      netInc = inc - inc * TAX;
      break;
    case "annualy":
      netInc = inc * 12 - inc * 12 * TAX;
      break;
  }
  return netInc;
};

export const grossIncome = (inc, time) => {
  let salaryInc;
  switch (time) {
    case "weekly":
      salaryInc = inc / 4;
      break;
    case "fortnightly":
      salaryInc = inc / 2;
      break;
    case "monthly":
      salaryInc = inc;
      break;
    case "annualy":
      salaryInc = inc * 12;
      break;
  }
  return salaryInc;
};

// export const incomeSetter = (inc, time, gross) => {
//   let finalIncome;

//   if (gross) {
//     switch (time) {
//       case "weekly":
//         finalIncome = inc * 4;
//         break;
//       case "fortnightly":
//         finalIncome = inc * 2;
//         break;
//       case "monthly":
//         finalIncome = inc;
//         break;
//       case "annualy":
//         finalIncome = inc / 12;
//         break;
//     }
//     if (gross == false) {
//     }
//     console.log("dota");
//   }
//   return finalIncome;
// };
