// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React",
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ======================Next part=====================
// nested
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag"),
//         ]// array of children
//     )
// );

// console.log(parent); // is a object which is called React Element. It is a lightweight object which is used to create the virtual DOM.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ======================Next part=====================

import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

console.log(jsxHeading); // is a object which is called React Element. It is a lightweight object which is used to create the virtual DOM.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
