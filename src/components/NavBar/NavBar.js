import "./../NavBar/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            JaviHouses
            <FontAwesomeIcon className="house-icon" icon={faHome} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
