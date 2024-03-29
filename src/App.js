import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";

const LayOut = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appLayOut = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayOut} />);
