import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  document.title = "Contact Us";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      phone,
      address,
      message,
    });
  };
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 pt-5 pb-5">
            <div className="contact-title">
              {" "}
              CONTACT <br /> US
            </div>
            <div className="contact-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              earum cum, minima omnis exercitationem quis molestias recusandae
              illum natus maxime mollitia, est iste nesciunt amet! Facilis
              fugiat quo voluptate consequuntur id nihil explicabo aspernatur
              cumque, error porro a quisquam molestiae ex voluptatum, quod aut
              aperiam dolore voluptates libero inventore nisi?
            </div>
          </div>
          <div className="col-lg-6 p-3">
            <div className="contact-title-second">Get In Touch</div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-column">
                  <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="first-name"
                  />
                </div>
                <div className="form-column">
                  <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="last-name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="email"
                  />
                </div>
                <div className="form-column">
                  <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <textarea
                    id="address"
                    rows="2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="address"
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <textarea
                    id="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="message"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
