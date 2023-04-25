import { Menu } from "semantic-ui-react";

const Nav = () => {
  let activeItem;

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} />
      <Menu.Item name="about" active={activeItem === "about"} />
    </Menu>
  );
};

export default Nav;
