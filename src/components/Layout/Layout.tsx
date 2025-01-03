import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;