import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturentMenu from "./components/ResturentMenu";
import Cart from "./components/Cart";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const LayOut = () => {
  return (
    <div className="root">
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
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
      {
        path: "/restaurant/:resId",
        element: <ResturentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayOut} />);
