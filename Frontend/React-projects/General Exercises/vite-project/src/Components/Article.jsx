import { Outlet } from "react-router-dom";

const Article = () => {
  return (
    <>
      <h1>This is article page</h1>
      <Outlet />
    </>
  );
};

export default Article;
