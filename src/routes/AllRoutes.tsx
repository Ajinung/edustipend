import { createBrowserRouter } from "react-router-dom";
import { Body } from "../pages";
import { Homelayout } from "../Components";

export const elements = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,

    children: [
      {
        index: true,
        element: <Body />,
      },
    ],
  },
]);
