import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";

const Root = () => {
  return (
    <>
      <Header />
      <Sider />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
