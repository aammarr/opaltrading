import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../static/horizontal-logo.png";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

const Header = () => {
  const location = useLocation();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <div
        className="container-fluid mb-5"
        style={{
          borderBottom: "1px solid rgb(237, 237, 237)",
          paddingBottom: "5px",
        }}
      >
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 col-sm-12 main-header">
              <Link to="/">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12">
              <ul className="nav navbar-header">
                <div className="header-navbar-item">
                  <Link
                    className={
                      location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="header-navbar-item">
                  <Link
                    className={
                      location.pathname === "/contact-us"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="header-navbar-item">
                  <Link
                    className={
                      location.pathname === "/about-us"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Slider {...settings} style={{ marginBottom: "50px" }}>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg"
            alt=""
            className="header-slider-image"
          />{" "}
        </div>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg"
            alt=""
            className="header-slider-image"
          />{" "}
        </div>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg"
            alt=""
            className="header-slider-image"
          />{" "}
        </div>
      </Slider> */}
    </div>
  );
};

export default Header;
