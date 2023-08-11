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
        <div className="products-title">VISION & MISSION</div>

        <div className="row">
          <div className="col-lg-6 col-md-6 home-left-column">
            {/* <img
              src={mission}
              alt=""
              style={{ width: "80%", padding: "30px" }}
            /> */}
            <div className="left-title"></div>
            <div className="left-description">
              Our vision is to turn trash into treasure, unlocking the hidden
              potential of discarded materials and transforming them into
              valuable creations. By practicing a circular economy, we strive to
              minimize waste, maximize resource efficiency, and promote
              sustainable consumption and production. Through our
              environmentally aware and friendly approach, we envision a world
              where up-cycling becomes a widespread practice, inspiring
              individuals and businesses to embrace creativity, reduce waste,
              and contribute to a greener, more harmonious planet.
            </div>
            <div className="left-title2" style={{ marginTop: "20px" }}></div>
            <div className="left-description">
              Our mission is to transform discarded materials into valuable and
              innovative creations. We believe in giving new purpose to items
              that would otherwise end up in landfills, reducing waste and
              promoting sustainability. Through our dedication to upcycling, we
              aim to inspire a more conscious and responsible approach towards
              resources, forging a path towards a greener and more circular
              economy.
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            {/* <div className="video-top-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!
            </div> */}
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6">
                <img src="images/home-image1.jpeg" alt="" width="90%" />
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="right-title">UPCYCLE THE RECYCLED</div>
              </div>
            </div>
            <video
              src="http://opaltrading.ae/video/opal_trading_video.mp4"
              style={{ width: "100%" }}
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="container-lg">
          <div className="products-title">OUR PRODUCTS</div>
          {/* <div className="all-products">
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
          </div> */}

          <div className="row">
            <div className="col-lg-6">
              <div className="product-heading">1. Virgin Raw Materials</div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 pt-3">
                  <ul className="list-items">
                    <li>Polyethylene</li>
                    <li>Polypropylene </li>
                    <li> PET</li>
                    <li>PVC </li>
                    <li>Polyamides</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-2">
                  <img src="images/home-image2.jpeg" alt="" width="100%" />
                </div>
                <div
                  className="col-lg-5 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image3.jpeg"
                    alt="home image 3"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image4.jpeg"
                    alt="home image 4"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
              </div>
              <div className="product-heading">
                3. INDUSTRIAL PLANT AND EQUIPMENT
              </div>
              <div
                className="left-description"
                style={{ textAlign: "justify" }}
                className="list-items"
              >
                Working with polymers and recycled materials we have also worked
                closely with machinery experts and source clients the best
                machinery for their end application. Be it for various products
                or they would like to a make a good quality recycle material to
                ensure quality’s strength durability and customers expectations
                are met.
              </div>
              <ul className="list-items">
                <li>Used equipment sales & purchasing.</li>
                <li> New equipment recommendations & future technology.</li>
                <li>
                  Machinery service and preventative maintenance plans as well
                  as spare parts recommendations.
                </li>
              </ul>
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image7.jpeg"
                    alt="home image 7"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image8.jpeg"
                    alt="home image 8"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
              </div>
              <div style={{ fontSize: "18px" }}>
                Helping you make the most informed decision on your equipment.
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="product-heading">2. Recycled Raw Materials</div>
              <ul className="list-items">
                <li>LDPE Regranulate (from films)</li>
                <li>LLDPE Regranualte (from films)</li>
                <li>PP RAFFIA Regranulate </li>
                <li>PP INJECTION Regranualte </li>
                <li>HDPE BLOW Flakes and Granules </li>
                <li>Post Cosumer PET Bottle Bales</li>
                <li>PET Flakes Hot/Cold/Unwashed </li>
                <li>Post consumer PE Film</li>
              </ul>
              <div className="row">
                {" "}
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image5.jpeg"
                    alt="home image 5"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image6.jpeg"
                    alt="home image 6"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image7.jpeg"
                    alt="home image 7"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image8.jpeg"
                    alt="home image 8"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
              </div>
              <div className="product-heading">4. OTHER PRODUCTS</div>
              <ul className="list-items">
                {" "}
                <li> Threads & Yarns</li>
                <li> Household Utensils</li>
                <li> Plastic & Nylon Raw Materials</li>
                <li>Ropes, Sacks & Jute Bags</li>
              </ul>
              <div className="row">
                {" "}
                <div
                  className="col-lg-5 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image11.jpeg"
                    alt="home image 11"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-6"
                  style={{ paddingRight: "4px", paddingLeft: "4px" }}
                >
                  <img
                    src="images/home-image12.jpeg"
                    alt="home image 12"
                    style={{ marginBottom: "10px" }}
                    className="home-images"
                  />
                </div>
                <div className="list-items" style={{ paddingBottom: "30px" }}>
                  We also trade other products used for making jute bags,
                  household goods (such as flasks, utensils), polypropylene
                  sacks etc.
                </div>
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
          At Opal Trading DMCC, we are committed to promoting high quality
          expertise with a strong passion on sustainability by upcycling
          recycled materials which are sourced from suppliers around the world.
          We are able to give new life to materials that would otherwise end up
          in landfills or polluting the environment. We do this by working
          closely with raw material suppliers, machinery experts and additive
          specialists to help customers with achieving a closed loop circular
          economy whilst maintaining high quality products for their customers.{" "}
          <br />
          <br />
          Our goal is to create a more sustainable and circular economy by being
          a solution to bringing together the best raw materials, machineries
          and training and guiding our customers on how to then recycle these
          products back to the same or other products. By doing so, we help
          support and build a sustainable world for future generations. We are
          proud to be a part of the movement towards a more sustainable future.
          <br />
          <br />
          We prioritize sustainable practices throughout the sourcing and
          upcycling process to ensure that the materials we use are
          environmentally responsible and do not contribute to further harm to
          our planet. At Opal Trading DMCC, we believe that sustainability is
          not only a responsibility but also an opportunity to create a better
          future for ourselves and future generations.
          <br />
          <br />
          Join us in our mission to promote sustainability and a circular
          economy by partnering with us for your requirements.
        </div>
      </div>
    </>
  );
};

export default Home;
