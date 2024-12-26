import { useSelector } from "react-redux";
import { RootState } from "../store";
import PostsContainer from "@/components/PostsContainer";
import Yourpost from "./Yourpost";

function HomePage() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <Yourpost btnText={"Filter"} />
      <PostsContainer />
    </div>
  );
}

export default HomePage;
