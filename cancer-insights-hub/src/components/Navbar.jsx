import { Link } from "react-scroll";
import Menuitem from "./Menuitem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="home" className="navbar__logo" smooth={true}>
          CIS
        </Link>
        <ul className="navbar__menu">
          <Menuitem dest="statistics" title="Statistics" />
          <Menuitem dest="research" title="Research" />
          <Menuitem dest="news" title="News" />
          <Menuitem dest="resources" title="Resources" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
