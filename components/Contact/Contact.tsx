import Link from "next/link";
import { nanum_gothic } from "../../fonts/font";
import "../Contact/Contact.css";
import { SlEnvolope } from "react-icons/sl";
import { PencilIcon } from "@heroicons/react/24/outline";

const Contact = ({ isMobile }: any) => {
  return (
    <div className="contact-container">
      <h1 className={`${nanum_gothic.className} mb-20`}>Contact</h1>
      <div
        className={
          isMobile
            ? `mobile-txt text-end mb-10 ${nanum_gothic.className}`
            : `contact-txt text-end mb-10 ${nanum_gothic.className}`
        }
      >
        <SlEnvolope size={30} className="cursor-pointer" />
        &nbsp; mail
      </div>
      <Link
        className={isMobile ? "mobile-txt" : "mb-25 text-end"}
        href="mailto:pgi082247@gmail.com"
      >
        pgi082247@gmail.com
      </Link>

      <div
        className={
          isMobile
            ? `mobile-txt text-end mb-10 ${nanum_gothic.className}`
            : `contact-txt text-end mb-10 ${nanum_gothic.className}`
        }
      >
        <PencilIcon width={30} className="cursor-pointer" />
        &nbsp; blog
      </div>
      <Link
        href="https://parkgain.tistory.com/"
        className={isMobile ? "mobile-txt" : "text-end"}
      >
        https://parkgain.tistory.com/
      </Link>
    </div>
  );
};

export default Contact;
