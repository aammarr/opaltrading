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
            At Opal Trading DMCC, our vision is to lead the way in transforming
            the global plastic industry through sustainable practices and
            innovative solutions. We strive to create a future where plastic
            recycling is the norm, virgin raw materials are traded responsibly,
            plant and machinery for recycling are installed with the latest
            technology to provide innovative solutions and create a circular
            economy , and waste is transformed into valuable treasures. <br />
            <br />
            We envision a world where plastic waste is no longer seen as a
            problem, but as an opportunity for positive change. Our commitment
            lies in promoting a circular economy, where plastic materials are
            continuously reused, reducing the demand for virgin resources and
            minimizing the environmental impact.
            <br />
            <br />
            Through our strong knowledge and expertise, we aim to revolutionize
            the industry, offering a efficient and holistic solutions that
            contribute to a cleaner and greener planet. By establishing and
            working with strategic partners and collaborations, we foster a
            global network that facilitates the responsible trading of virgin
            raw materials, ensuring transparency and sustainability in the
            supply chain as well as advising our clients the best solutions for
            their individual requirements. <br />
            <br />
            Furthermore, we are dedicated to providing comprehensive services,
            including the sale of state-of-the-art plant and machinery,
            empowering businesses and individuals to embark on their own
            recycling journeys. We believe in democratizing the process, making
            recycling accessible and economically viable for all and cutting our
            carbon footprint together. <br />
            <br />
            Moreover, we are passionate about upcycling and finding innovative
            ways to transform trash into valuable treasures. By nurturing
            creativity and encouraging sustainable design, we inspire a society
            that appreciates the beauty and potential of recycled materials.
            <br />
            <br />
            Together, we are committed to driving a ideal shift in the plastic
            industry, where waste becomes a resource and sustainability becomes
            the foundation of our future. Join us as we pave the way towards a
            circular and prosperous world, where plastic recycling, responsible
            trading, upcycling, and turning trash into treasure redefine the way
            we interact with our planet.
          </div>
          <div className="about-border"></div>{" "}
          <div className="col-lg-6 col-md-6">
            <h1 className="steps">STEP TOWARDS A CIRCULAR ECONOMY</h1>
            <p className="steps-description">
              We follow a process of helping clients convert plastic waste into
              high-quality flakes/granules, which can be used to create a range
              of end products. This includes helping clients transform plastic
              bottles into yarn, which is then spun into fabric and used to make
              garments. <br />
              <br />
              We also help clients repurpose bag scraps into new bags and
              recycle plastic bottle scraps into new bottles. By helping clients
              transform plastic scrap into granules, we are able to create a
              wide range of products that are both environmentally friendly and
              sustainable.
            </p>
          </div>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: "4px" }}>
            <img
              src={RenovOne}
              alt="RenovImageOne"
              width="100%"
              style={{ marginBottom: "10px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6" style={{ paddingRight: "4px" }}>
            <img
              src={RenovThree}
              alt="RenovImageThree"
              width="100%"
              style={{ marginBottom: "10px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: "4px" }}>
            <img
              src={RenovFour}
              alt="RenovImageFour"
              width="100%"
              style={{ marginBottom: "10px" }}
            />
          </div>
        </div>
        <div className="about-border"></div>{" "}
        <div className="row">
          <div className="col-lg-6 col-md-6 renov-image">
            <img
              src={RenovSix}
              alt="RenovImageSix"
              className="renov-image-main"
            />
            <div className="about-description">
              Our global initiative involves collaborating with customers across
              various industries to address environmental concerns. We engage
              with these customers to facilitate waste collection and provide
              consultation on the latest machinery and technologies. Through our
              efforts, we aim to contribute to the cleanup of the environment
              while simultaneously offering training opportunities to
              individuals. Moreover, we empower people to earn additional income
              by purchasing the collected plastic waste from them. Our program
              is now expanding to includes other countries, connecting
              industries, machine suppliers, and customers to foster economic
              growth and provide opportunities in regions with limited education
              and low incomes. <br />
              <br />
              We prioritize sustainable practices throughout the sourcing and
              upcycling process to ensure that the materials we use are
              environmentally responsible and do not contribute to further harm
              to our planet. We believe that sustainability is not only a
              responsibility but also an opportunity to create a better future
              for ourselves and future generations.
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src="images/about-image.jpeg"
              alt="RenovImageFive"
              className="about-image-five"
            />
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div
              className="col-lg-4 col-md-4"
              style={{ padding: "0", paddingRight: "8px" }}
            >
              <img src="images/about-image2.jpeg" alt="" width="100%" />
            </div>
            <div
              className="col-lg-4 col-md-4"
              style={{ padding: "0", paddingRight: "8px" }}
            >
              <img
                src="images/about-image3.jpeg"
                alt=""
                width="100%"
                height="93%"
              />
            </div>
            <div className="col-lg-4 col-md-4" style={{ padding: "0" }}>
              <img
                src="images/about-image4.jpeg"
                alt=""
                width="100%"
                height="93%"
              />
            </div>
          </div>
          <div className="about-description">
            Opal Trading DMCC is proud to be a part of the Renov8 movement,
            dedicated to promoting sustainable practices and creating a more
            sustainable future for all. As a part of this movement, our goal is
            to promote the 4 Rs - responsible waste management practices,
            revitalising waste into valuable resources, recreating products
            using high-quality recycled plastic, and promoting reuse to reduce
            waste and promote a circular economy. <br />
            <br />
            With this approach, we are committed to being responsible in our
            waste management practices. We believe in the importance of
            collecting different waste and providing training to segregate it
            correctly. By doing so, we can reduce the environmental impact of
            waste and promote a circular economy.
          </div>{" "}
          {/* <div className="about-description">
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
          </div> */}
        </div>
        {/* <div className="about-border"></div>{" "}
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
        </div> */}
        <div className="row">
          <div className="col-lg-6 pt-4">
            <img
              src="images/about-image5.jpeg"
              alt=""
              width="100%"
              height="90%"
            />
          </div>
          <div className="col-lg-6">
            <div className="about-description">
              Through our revitalise approach, we aim to transform waste into a
              valuable resource. We use state-of-the-art technology and
              machinery to upcycle waste into high-quality flakes or granulate.
              Our goal is to produce recycled plastic that meets food-grade
              standards, ensuring that the products we create are safe for
              consumers.
              <br />
              <br />
              Our recreate approach involves using this high-quality recycled
              plastic to create new products that are both sustainable and
              functional. We believe in the power of design to create innovative
              solutions that meet the needs of consumers while also taking into
              account environmental considerations. Our products range from
              reusable bags to food containers and other everyday items.
              <br />
              <br />
              Through our reuse approach, we ensure that our products are used
              and reused, reducing waste and promoting a circular economy. We
              believe that by providing sustainable alternatives to single-use
              products, we can make a positive impact on the environment and
              inspire others to do the same.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
