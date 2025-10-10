import ContactImage from "../assets/Contact.png";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-img-wrapper">
        <img src={ContactImage} alt="Contact" className="contact-img" />
      </div>

      <div className="contact-frame">
        <div className="contact-info">
          <p>
            Hi there! Do you have any questions? <br />
            You can reach out to me at:{" "}
            <a href="mailto:temp.email">temp.email</a> <br />
            Alternatively, you can also follow me <br />
            on Instagram @frog and get support there! <br />
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
}
