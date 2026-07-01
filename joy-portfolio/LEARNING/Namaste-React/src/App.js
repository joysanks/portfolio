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
//         [React.createElement("h1", { key: "heading-1" }, "I am h1 tag"),
//         React.createElement("h2", { key: "heading-2" }, "I am h2 tag"),
//         ]// array of children
//     )
// );

// console.log(parent); // is a object which is called React Element. It is a lightweight object which is used to create the virtual DOM.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ======================Next part=====================

// import React from "react";
// import ReactDOM from "react-dom/client";

// // React Element

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// console.log(jsxHeading); // is a object which is called React Element. It is a lightweight object which is used to create the virtual DOM.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
// // ======================Next part=====================
// import React from "react";
// import ReactDOM from "react-dom/client";

// //functional component
// const elem = <span>React Element</span>;

// const title = (
//     <h1 className = "head" tabIndex="5">
//         {elem}
//         Namaste React using JSX
//     </h1>
// )
// // const Title = () => (
// //     <h1 className = "head" tabIndex="5">
// //         {elem}
// //         Namaste React using JSX
// //     </h1>
// // );

// const HeadingComponent = () => (
//     <div id = "container">
//         {/* <Title/> */}
//         {/* {Title()} */}
//         {title}
//         <h1 className="heading">Namaste React Functional component</h1>

//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

// ======================Next part---PROJECT 1=====================
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
// import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
const Contact = lazy(() => import( "./components/Contact"));

const Grocery = lazy(() => import( "./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
         element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
