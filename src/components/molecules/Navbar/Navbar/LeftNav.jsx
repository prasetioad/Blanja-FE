import { useHistory } from "react-router";
import css from "./style.module.css";
// IMAGES
import Logo from "../../../images/tukuLogo.png";
import Search from "../../../images/Search.png";
import Filter from "../../../images/filter.png";

export default function LeftNav({ func }) {
  const history = useHistory();

  const handleClickLogo = () => {
    history.push("/");
  };
  return (
    <div className={"displayRow " + css.leftNav}>
      <img
        className={css.logo}
        src={Logo}
        alt="Logo"
        style={{ cursor: "pointer" }}
        onClick={() => handleClickLogo()}
      />
      <div className="displayRow">
        <div className={"displayRow " + css.searchBorder}>
          <input className={css.inputSearch} placeholder="Search ..." />
          <img className={css.searchLogo} src={Search} alt="Search" />
        </div>
        <img
          className={"hoverThis " + css.filterBtn}
          onClick={func}
          src={Filter}
          alt="Filter"
        />
      </div>
    </div>
  );
}
