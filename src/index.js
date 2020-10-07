// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
var express = require("express");
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
var app = express();

app.get("/", (req, res) => res.status(200).json({ result: "Hello from PI!" }));

app.listen(3000, () => {
	console.log("running on port 3000");
});
