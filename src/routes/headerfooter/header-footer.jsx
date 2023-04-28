import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.";
import Footer from "../../components/footer/footer";

const HeaderFooter = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HeaderFooter;
