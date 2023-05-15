import "./home.scss";
import { Link } from "react-router-dom";
import secure from "../../static/secure.png";
import mission from "../../static/Mission-text.png";

const Home = () => {
  document.title = "Opal Trading";
  return (
    <>
      <div className="check"></div>
      <div className="container-lg mb-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={mission}
              alt=""
              style={{ width: "80%", padding: "30px" }}
            />
          </div>
          <div className="col-lg-6">
            <video
              src="https://www.dropbox.com/s/9svwtjjimv6ehn7/Renov8%20HD%20Teaser%20v15.mp4?dl=0"
              style={{ width: "100%" }}
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="container-lg text-center mb-5">
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
      </div>

      <div className="home-divider-new"></div>

      {/* <div class="divider-home">
        <div class="divider-icon-home">
          <img src={divider} alt="" className="divider-home-image" />
        </div>
      </div> */}
      <div className="container-lg mt-5 home-main">
        <div className="home-description">
          {/* <div className="home-bottom-title">Welcome to Opal Trading DMCC</div> */}
          We are committed to providing our clients with the highest quality
          service while maintaining a strong focus on environmental
          sustainability. Our team consists of highly skilled and trained
          professionals who are committed to delivering exceptional service to
          our clients. We work closely with our clients to develop customized
          waste management and recycling programs that meet their specific needs
          and requirements. Our commitment to environmental responsibility
          extends beyond our operations to the wider community. We strive to
          educate and raise awareness about the importance of waste reduction,
          recycling, and environmental sustainability.
          <br />
          <br /> We are proud to be part of the growing movement towards a
          circular economy, and we are dedicated to playing our part in creating
          a better and more sustainable future for all.
        </div>
      </div>
    </>
  );
};

export default Home;
