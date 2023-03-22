import { nanum_gothic } from "../../fonts/font";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className={`${nanum_gothic.className}`}>Contact</h1>
      <p className={`${nanum_gothic.className}`}>
        You can reach me at
        <a href="pgi082247@gmail.com">pgi082247@gmail.com</a>
      </p>
      <p className={`${nanum_gothic.className}`}>
        Check out my blog at
        <a href="https://parkgain.tistory.com/">
          https://parkgain.tistory.com/
        </a>
      </p>
    </div>
  );
};

export default Contact;
