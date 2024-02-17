import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Cars from "./routes/Cars.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Blog from "./routes/Blog.jsx";
import Favourite from "./routes/Favourite.jsx";
import Search from "./routes/Search.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
