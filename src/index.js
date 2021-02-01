import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hotjar } from 'react-hotjar';

ReactDOM.render(<App />, document.getElementById("root"));
hotjar.initialize(2212804, 6);