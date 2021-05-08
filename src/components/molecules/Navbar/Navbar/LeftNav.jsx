import css from "./style.module.css";
import { useHistory } from "react-router"
// IMAGES
import Logo from "../../../images/tukuLogo.png";
import Search from "../../../images/Search.png";
import Filter from "../../../images/filter.png";

export default function LeftNav({ func }) {
  const history = useHistory()
  return (
    <div className={"displayRow " + css.leftNav}>
      <img alt="Logo" className={"hoverThis " + css.logo} onClick={ () => { history.push("/") } } src={Logo}/>
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
