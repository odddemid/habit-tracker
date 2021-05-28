import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { routes } from "./routes";

export const App = (): JSX.Element => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};
