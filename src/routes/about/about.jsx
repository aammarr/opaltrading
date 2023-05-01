import "./about.scss";

const About = () => {
  document.title = "About Us";
  return (
    <div>
      <div className="container-lg">
        <div className="row mb-3">
          <div className="col-lg-6 col-md-4 col-sm-12">
            <div className="about-title">ABOUT US</div>
            <div className="about-description">
              At [Opal Trading DMCC], we are committed to promoting
              sustainability by upcycling recycled materials like:
            </div>
            {/* <div className="list-title">Our Labels and Stickers:-</div> */}
            <ul>
              <li>LDPE</li>
              <li>LLDPE</li>
              <li>PP RAFFIA</li>
              <li>PP INJECTION</li>
              <li>HDPE BLOW</li>
              <li>PET BOTTLE BALES</li>
              <li>PET FLAKES HW & CW</li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-12 p-3"
            style={{
              border: "1px solid #eee",
              borderRadius: "2px",
              marginTop: "auto",
            }}
          >
            <img
              src="https://gsplabels.com/img/office.jpg"
              alt=""
              className="about-image"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-12 p-3"
            style={{
              border: "1px solid #eee",
              borderRadius: "2px",
              marginTop: "auto",
            }}
          >
            <img
              src="https://gsplabels.com/img/office.jpg"
              alt=""
              className="about-image"
            />
          </div>
        </div>
        <div className="about-description-new">
          By sourcing these materials from suppliers around the world, we are
          able to give new life to materials that would otherwise end up in
          landfills or polluting the environment. Our goal is to create a more
          sustainable and circular economy by upcycling these recycled materials
          and selling them further. By doing so, we help reduce the demand for
          virgin materials and support the growth of a market for recycled
          materials. We are proud to be a part of the movement towards a more
          sustainable future.
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
    </div>
  );
};

export default About;
