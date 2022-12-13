import ReactDOM from "react-dom/client";
import React from "react";
import Wrapper from "./Wrapper";

const root = ReactDOM.createRoot(document.getElementById("app"));
const App = () => {
  return <Wrapper />;
};
root.render(<App />);
