import "./about.scss";
import RenovOne from "../../static/Images/renov-1.jpg";
import RenovThree from "../../static/Images/renov-2.jpg";
import RenovFour from "../../static/Images/renov-3.jpg";
import RenovTwo from "../../static/Images/renov-4.jpg";
import RenovFive from "../../static/Images/reveo8-image-2.jpg";
import RenovSix from "../../static/Images/renov 8 logo white.jpeg";
import RenovSeven from "../../static/Images/corporate-social-image.jpg";

const About = () => {
  document.title = "About Us";
  return (
    <div>
      <div className="container-lg">
        <div className="row mb-3">
          <div className="about-title">ABOUT US</div>
          <div className="about-description">
            We are committed to providing our clients with the highest quality
            service while maintaining a strong focus on environmental
            sustainability. Our team consists of highly skilled and trained
            professionals who are committed to delivering exceptional service to
            our clients. <br />
            <br /> We work closely with our clients to meet their specific needs
            and requirements. Our commitment to environmental responsibility
            extends beyond our operations to the wider community. We strive to
            educate and raise awareness about the importance of waste reduction,
            recycling, and environmental sustainability. <br />
            <br /> We are proud to be part of the growing movement towards a
            circular economy, and we are dedicated to playing our part in
            creating a better and more sustainable future for all. <br />
            <br />
            We follow a process of converting plastic waste into high-quality
            granules, which can be used to create a range of end products. This
            includes transforming plastic bottles into yarn, which is then spun
            into fabric and used to make garments. We also repurpose bag scraps
            into new bags and recycle plastic bottle scraps into new bottles. By
            transforming plastic scrap into granules, we are able to create a
            wide range of products that are both environmentally friendly and
            environmentally sustainable.
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src={RenovOne}
              alt="RenovImageOne"
              width="100%"
              style={{ marginBottom: "23px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src={RenovTwo}
              alt="RenovImageTwo"
              width="100%"
              style={{ marginBottom: "23px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src={RenovThree}
              alt="RenovImageThree"
              width="100%"
              style={{ marginBottom: "23px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src={RenovFour}
              alt="RenovImageFour"
              width="100%"
              style={{ marginBottom: "23px" }}
            />
          </div>
        </div>
        <div className="about-border"></div>{" "}
        <div className="row">
          <div className="col-lg-5 renov-image">
            <img
              src={RenovSix}
              alt="RenovImageSix"
              className="renov-image-main"
            />
            <div className="about-title">Our Goal</div>
            <div className="about-description">
              Opal Trading DMCC is proud to be a part of the Renov8 movement,
              dedicated to promoting sustainable practices and creating a more
              sustainable future for all. As a part of this movement, our goal
              is to promote the 4 Rs - responsible waste management practices,
              revitalising waste into valuable resources, recreating products
              using high-quality recycled plastic, and promoting reuse to reduce
              waste and promote a circular economy.
            </div>
          </div>
          <div className="col-lg-7">
            <img src={RenovFive} alt="RenovImageFive" width="100%" />
          </div>
          <div className="about-description">
            With this approach, we are committed to being{" "}
            <span className="goal-text">responsible</span> in our waste
            management practices. We believe in the importance of collecting
            different waste and providing training to segregate it correctly. By
            doing so, we can reduce the environmental impact of waste and
            promote a circular economy. <br />
            <br /> Through our <span className="goal-text">revitalise </span>
            approach, we aim to transform waste into a valuable resource. We use
            state-of-the-art technology and machinery to upcycle waste into
            high-quality flakes or granulate. Our goal is to produce recycled
            plastic that meets food-grade standards, ensuring that the products
            we create are safe for consumers. <br />
            <br /> Our <span className="goal-text">recreate</span> approach
            involves using this high-quality recycled plastic to create new
            products that are both sustainable and functional. We believe in the
            power of design to create innovative solutions that meet the needs
            of consumers while also taking into account environmental
            considerations. Our products range from reusable bags to food
            containers and other everyday items. <br />
            <br />
            Through our <span className="goal-text">reuse</span> approach, we
            ensure that our products are used and reused, reducing waste and
            promoting a circular economy. We believe that by providing
            sustainable alternatives to single-use products, we can make a
            positive impact on the environment and inspire others to do the
            same.
          </div>
        </div>
        <div className="about-border"></div>{" "}
        <div className="row">
          <div className="col-lg-5">
            <div className="about-title">Corporate Social Responsibility</div>
            <div className="about-description">
              Opal as a part of the Renov8 initiative is dedicated to improving
              the livelihoods of women in developing countries. The focus is on
              empowering women through education, training, and job creation. We
              believe that education is the key to unlocking opportunities and
              improving lives. That's why we offer active training and build
              knowledge to equip women with the skills they need to access
              better job opportunities. Our vocational training programs include
              courses on basic computer skills, English language classes, and
              other skills-based training that can help women break into new
              industries and achieve their goals. In addition to education, we
              also provide job opportunities through our collection centers.
            </div>
          </div>
          <div className="col-lg-7">
            <img src={RenovSeven} alt="RenovImageFive" width="100%" />
          </div>
          <div className="about-description">
            By setting up these centers, we not only create employment
            opportunities for women but also help to boost the local economy. We
            ensure that all wages paid are fair and in line with the local
            standards. Our slogan "Knowledge is Power" highlights the importance
            of education and training for women. It is our belief that when
            women are empowered through education and employment, they become
            agents of change in their communities. With this initiative, we are
            committed to making a difference. Our focus on improving livelihoods
            is not just a corporate responsibility but a moral obligation. We
            measure the impact of our CSR initiatives to ensure that they are
            making a meaningful difference in the lives of the women we are
            supporting. By doing so, we inspire others to join us in making a
            positive impact in the world.
          </div>
        </div>
        <div className="about-final-text">
          The Renov8 initiative is also committed to reducing waste and
          improving sustainability through recycling initiatives.{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
