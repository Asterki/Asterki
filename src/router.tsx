import {
    createBrowserRouter,
  } from "react-router-dom";

// Pages
import IndexPage from "./pages/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    }
]);

export default router;
