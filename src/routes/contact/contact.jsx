import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  document.title = "Contact Us";

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env);
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result?.text === "OK") {
            toast.success("Email Sent Successfully!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            form.current.reset();
          }
        },
        (error) => {
          toast.error(error.text, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-column">
                  <input
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                    className="first-name"
                    name="first_name"
                    required
                  />
                </div>
                <div className="form-column">
                  <input
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                    className="last-name"
                    name="last_name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-column">
                  <input
                    type="number"
                    id="phone"
                    placeholder="Phone"
                    className="number"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <textarea
                    id="address"
                    rows="2"
                    placeholder="Address"
                    className="address"
                    name="address"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-column">
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    className="message"
                    name="message"
                    required
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
