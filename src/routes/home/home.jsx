import "./home.scss";
import { Link } from "react-router-dom";
import secure from "../../static/secure.png";
import mission from "../../static/Mission-text.png";
import ImageOne from "../../static/Images/edit-1.jpg";
// import ImageTwo from "../../static/Images/edit-1.jpg";
import ImageThree from "../../static/Images/edit-2.jpg";
// import ImageFour from "../../static/Images/edit-1.jpg";
import ImageFive from "../../static/Images/edit-3.jpg";
import ImageSix from "../../static/Images/edit-5.jpg";
import ImageSeven from "../../static/Images/edit-4.jpg";
// import ImageEight from "../../static/Images/edit-1.jpg";

const Home = () => {
  document.title = "Opal Trading";
  return (
    <>
      <div className="check"></div>
      <div className="container-lg mb-5">
        <div className="row">
          <div className="col-lg-6 home-left-column">
            {/* <img
              src={mission}
              alt=""
              style={{ width: "80%", padding: "30px" }}
            /> */}
            <div className="left-title">Mission</div>
            <div className="left-description">Upcycle the recycled</div>
            <div className="left-border"></div>
            <div className="left-title" style={{ marginTop: "20px" }}>
              Vision
            </div>
            <div className="left-description">Turning Trash to treasure</div>
            <div className="left-border"></div>
            <div className="left-description">
              Practicing a circular economy{" "}
            </div>
            <div className="left-border"></div>
            <div className="left-description">
              Being environmentally aware and friendly{" "}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-top-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!
            </div>
            <video
              src="https://www.dropbox.com/s/9svwtjjimv6ehn7/Renov8%20HD%20Teaser%20v15.mp4?dl=0"
              style={{ width: "100%" }}
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="container-lg">
          <div className="products-title">OUR PRODUCTS</div>
          <div className="all-products">
            <div className="product-main">
              <img src={ImageOne} alt="ImageOne" className="product-image" />
              <div className="product-title">
                LDPE Regranulate <br /> (From Films)
              </div>
            </div>
            <div className="product-main">
              <img src={ImageOne} alt="ImageOne" className="product-image" />
              <div className="product-title">
                LLDPE Regranulate <br /> (From Films)
              </div>
            </div>
            <div className="product-main">
              <img src={ImageThree} alt="ImageOne" className="product-image" />
              <div className="product-title">
                PP RAFFIA <br /> Regranulate
              </div>
            </div>
            <div className="product-main">
              <img src={ImageOne} alt="ImageOne" className="product-image" />
              <div className="product-title">
                PP INJECTION <br /> Regranulate
              </div>
            </div>
            <div className="product-main">
              <img src={ImageFive} alt="ImageOne" className="product-image" />
              <div className="product-title">
                HDPE BLOW <br /> Flakes & Granules
              </div>
            </div>
            <div className="product-main">
              <img src={ImageSix} alt="ImageOne" className="product-image" />
              <div className="product-title">
                POST CONSUMER <br /> PET BOTTLE BALES
              </div>
            </div>
            <div className="product-main">
              <img src={ImageSeven} alt="ImageOne" className="product-image" />
              <div className="product-title">
                PET FLAKES <br /> HW & CW & UW
              </div>
            </div>
            <div className="product-main">
              <img src={ImageOne} alt="ImageOne" className="product-image" />
              <div className="product-title">
                Post Consumer <br /> PE FILM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-lg text-center mb-5">
        <div class="row">
          <div className="col-lg-4 home-card">
            <Link to="#">
              <img src={secure} alt="" className="card-icon" />
              <div className="card-title">Pharmaceutical Labels</div>
              <div className="card-description">
                We offer quality labels that are manufactured using the best
                quality...{" "}
              </div>
              <div className="card-read-more">Read More..</div>
            </Link>
          </div>
          <div className="col-lg-4 home-card">
            <Link to="#">
              <img src={secure} alt="" className="card-icon" />
              <div className="card-title">Pharmaceutical Labels</div>
              <div className="card-description">
                We offer quality labels that are manufactured using the best
                quality...{" "}
              </div>
              <div className="card-read-more">Read More..</div>
            </Link>
          </div>
          <div className="col-lg-4 home-card">
            <Link to="#">
              <img src={secure} alt="" className="card-icon" />
              <div className="card-title">Pharmaceutical Labels</div>
              <div className="card-description">
                We offer quality labels that are manufactured using the best
                quality...{" "}
              </div>
              <div className="card-read-more">Read More..</div>
            </Link>
          </div>
          <div className="col-lg-4 home-card">
            <Link to="#">
              <img src={secure} alt="" className="card-icon" />
              <div className="card-title">Pharmaceutical Labels</div>
              <div className="card-description">
                We offer quality labels that are manufactured using the best
                quality...{" "}
              </div>
              <div className="card-read-more">Read More..</div>
            </Link>
          </div>
          <div className="col-lg-4 home-card">
            <Link to="#">
              <img src={secure} alt="" className="card-icon" />
              <div className="card-title">Pharmaceutical Labels</div>
              <div className="card-description">
                We offer quality labels that are manufactured using the best
                quality...{" "}
              </div>
              <div className="card-read-more">Read More..</div>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="home-divider-new"></div>

      {/* <div class="divider-home">
        <div class="divider-icon-home">
          <img src={divider} alt="" className="divider-home-image" />
        </div>
      </div> */}
      <div className="container-lg mt-5 home-main">
        <div className="home-description">
          {/* <div className="home-bottom-title">Welcome to Opal Trading DMCC</div> */}
          At [Opal Trading DMCC], we are committed to promoting sustainability
          by upcycling recycled materials which are sourced from suppliers
          around the world. We are able to give new life to materials that would
          otherwise end up in landfills or polluting the environment. <br />
          <br />
          Our goal is to create a more sustainable and circular economy by
          upcycling these recycled materials and producing a quality flake or
          granulate. By doing so, we help support and build a sustainable yet
          circular economy. We are proud to be a part of the movement towards a
          more sustainable future.
          <br />
          <br />
          We prioritize sustainable practices throughout the sourcing and
          upcycling process to ensure that the materials we use are
          environmentally responsible and do not contribute to further harm to
          our planet. At [Opal Trading DMCC], we believe that sustainability is
          not only a responsibility but also an opportunity to create a better
          future for ourselves and future generations.
          <br />
          <br />
          Join us in our mission to promote sustainability and a circular
          economy by partnering with us for your upcycled plastic needs.
        </div>
      </div>
    </>
  );
};

export default Home;
