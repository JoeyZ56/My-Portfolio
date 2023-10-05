import "./Footer.scss";
import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  //destructoring formdata
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    //sanity
    client.create(contact).then(() => {
      setLoading(false);
      setisFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          {/* //"mailto" is a specail property that takes you to a link to email the person */}
          <a href="mailto:jzazzicoding@gmail.com" className="p-text">
            jzazzicoding@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          {/* //"tel:" */}
          <a href="tel: +1 (530) 327-4639" className="p-text">
            +1 (530) 327-4639
          </a>
        </div>
      </div>
      {/* //Shows this code if user hasnt submitted form */}
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        //shows if user has submitted form
        <div>
          <h3 className="head-text">Thank You for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
