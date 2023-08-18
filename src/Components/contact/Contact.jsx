import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ntyjzzs",
      "template_2fjfcdn",
      form.current,
      "DRPN-tdBf7zgdx8FB"
    );
    form.current.reset();
    // form.current.reset().then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>okhaniemmanuel7@gmail.com</h5>
            <a href="mailto:okhaniemmanuel7@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Emmanuel</h5>
            <a href="mailto:okhaniemmanuel7@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>ChrisNuel</h5>
            <a href="https://twitter.com/ChrisEmmanuel4u">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
