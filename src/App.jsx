// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main layout
import MainLayout from "./layout/MainLayout";

//pages
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Subjects from "./pages/Subjects";
import Test from "./pages/Test";


function App() {  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/subjects",
          element: <Subjects/>,
        },
        {
          path: "/tests",
          element: <Test/>,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    }
  ]);
  return <RouterProvider router={routes} />;
}

export default App;