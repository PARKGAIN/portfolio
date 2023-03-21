import { SlEnvolope } from "react-icons/sl";
import { PencilIcon } from "@heroicons/react/24/outline";
import { goUrl } from "../../utils/goUrl";

const Contact = () => {
  return (
    <>
      Contact
      <div> Email </div>
      <SlEnvolope size={30} />
      <div>pgi082247@gmail.com</div>
      Blog 사이트
      <PencilIcon
        width={30}
        onClick={() => goUrl("https://parkgain.tistory.com")}
        className="cursor-pointer"
      />
    </>
  );
};

export default Contact;
