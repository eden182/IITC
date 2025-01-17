import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-foreground mt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
