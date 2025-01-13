import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
// import EditorPage from "./EditorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // {
        //   path: "/",
        //   element: <EditorPage />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

{
  /* <span className="text-white text-xl ml-4">
          {userData?.user?.profileImage ? (
            <img
              className="min-w-12 rounded-full aspect-square object-cover"
              alt="photo profile"
              src={userData.user.profileImage}
            />
          ) : (
            <span className="w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1">
              {userData?.user?.firstName?.charAt(0).toUpperCase()}
            </span>
          )}
        </span> */
}
