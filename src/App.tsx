import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/ui/layout";
import Home from "./pages/home";

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);

export { router };
