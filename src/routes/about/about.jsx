import "./about.scss";

const About = () => {
  document.title = "About Us";
  return (
    <div>
      <div className="container-lg">
        <div className="about-title">About Us</div>
        <div className="about-description">
          GSP Label is pioneer in providing Self Adhesive Labels. We are engaged
          in providing a wide range of labels and stickers that are manufactured
          as per requirement of clients since last two decades. We can also
          Print Self Adhesive labels in Roll & Sheet Form.
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-4 col-sm-12">
            <div className="list-title">Our Labels and Stickers:-</div>
            <ul>
              <li>Automobile Labels & Stickers</li>
              <li>Automobile Labels & Stickers</li>
              <li>Automobile Labels & Stickers</li>
              <li>Automobile Labels & Stickers</li>
              <li>Automobile Labels & Stickers</li>
              <li>Automobile Labels & Stickers</li>
              <li>Automobile Labels & Stickers</li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-12 p-3"
            style={{ border: "1px solid #eee", borderRadius: "2px" }}
          >
            <img
              src="https://gsplabels.com/img/office.jpg"
              alt=""
              className="about-image"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-12 p-3"
            style={{ border: "1px solid #eee", borderRadius: "2px" }}
          >
            <img
              src="https://gsplabels.com/img/office.jpg"
              alt=""
              className="about-image"
            />
          </div>
        </div>
        <div className="about-description">
          Our Stickers and Labels used in various industries. Our products can
          be customized as per the specific requirements of our clients. We work
          with a customer-oriented approach and are committed to ensure the
          supply of superior quality stickers and holograms labels to our
          customers. <br /> <br /> We have also carved a niche as one of the
          trustworthy 3D Graphic, Holographic and transfer labels manufactures
          and suppliers in India. We have always looked forward to establish
          long-term relationship with our consumers. Our endeavors are to serve
          our customers with our advanced and innovative products.
        </div>
      </div>
    </div>
  );
};

export default About;
