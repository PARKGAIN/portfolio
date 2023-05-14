import { karla } from "./font";
import "../Header/index.css";

const Header = () => {
  return (
    <div className={`margin-top-25 font-size font-color ${karla.className}`}>
      Hello,
      <br />I am parkgain~
    </div>
  );
};

export default Header;
