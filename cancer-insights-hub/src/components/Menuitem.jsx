import { Link } from "react-scroll";

const Menuitem = (props) => {
  return (
    <li className="navbar__menu__item">
      <Link
        to={props.dest}
        className="navbar__menu__link"
        smooth={true}
        spy={true}
        offset={-80}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default Menuitem;
