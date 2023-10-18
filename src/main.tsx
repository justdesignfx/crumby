import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./assets/scss/global.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./global/routes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/" ? true : false,
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
