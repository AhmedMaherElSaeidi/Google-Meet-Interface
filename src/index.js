import React from "react";
import ReactDOM from "react-dom/client";
import CardContainer from "./components/cardContainer.component";

import "./sass/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const app = <React.Fragment><CardContainer/></React.Fragment>;

root.render(app);
