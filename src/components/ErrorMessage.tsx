import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorMessage = () => {
  const { message } = useRouteError();

  return <div>Error: {message}</div>;
};

export default ErrorMessage;
