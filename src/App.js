import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
