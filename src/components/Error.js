import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      Error
      <br />
      {err.status}
      <br />
      {err.statusText}
      <br />
    </div>
  );
};

export default Error;
