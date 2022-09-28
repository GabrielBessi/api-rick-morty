import logoPage from "../../images/logo-pagina.webp";
import "./style.css";

const Header = () => {
  return (
    <div>
      <img className="img-style" src={logoPage} alt="" />
    </div>
  );
};

export default Header;
