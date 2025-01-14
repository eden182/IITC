import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
// import EditorPage from "./EditorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
