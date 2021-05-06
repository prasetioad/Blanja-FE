import css from "./style.module.css";
import { useHistory } from 'react-router'
// IMAGES
import Cart from "../../../images/cart.png";
import Bell from "../../../images/bell.png";
import Mail from "../../../images/mail.png";
import NoNotification from "../../../images/noNotification.png"
// ATOMS
import { Button } from "../../../atoms";

export default function RightNav({ func, ud }) {
  const history = useHistory()
  return (
    <div className={"displayRow " + css.rightNav}>
      <div></div>
      <div className="displayRow">
        <img
          className={"hoverThis " + css.cartLogo}
          onClick={() => {
            history.push("/bag");
          }}
          src={Cart}
          alt="Cart"
        />
        {ud === null ? (
          <div
            className="displayRow"
            style={{ justifyContent: "space-between", width: "17vw" }}
          >
            <div
              onClick={() => {
                history.push("/login");
              }}
            >
              <Button
                cls={"hoverThis " + css.loginBtn}
                btnClr="#273AC7"
                ftClr="white"
                val="Login"
              />
            </div>
            <div
              onClick={() => {
                history.push("/register");
              }}
            >
              <Button
                cls={"hoverThis " + css.regBtn}
                btnClr="white"
                ftClr="#9B9B9B"
                val="Register"
              />
            </div>
          </div>
        ) : (
          <div className={"displayRow " + css.rightBtnZone}>
            <div className={"hideFirst dropdown textSet " + css.notificationZone}>
              <img alt="Bell" className="hoverThis searchLogo" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={Bell}/>
              <div className={"hideFirst dropdown-menu " + css.notificationList} aria-labelledby="dropdownMenuButton">
                  <img alt="NoNotification" className={css.noNotificationPicture} src={NoNotification}/>
              </div>
            </div>
            <img className={"hoverThis " + css.mail} src={Mail} alt="Mail" />
            <div className="hideFirst col-md-1 dropdown order-md-7">
              <img 
                className={"dropdown-toggle hoverThis imgNavbar " + css.profileBtn} 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false" 
                alt="profileBtn" 
                src={ud.image}
              />
              <div className={"hideFirst dropdown-menu " + css.dropdownUser} aria-labelledby="dropdownMenuButton">
                <div className={css.userDropdownWrapper}>
                    <div className="displayRow">
                      <img className={"hoverThis " + css.profileImage} src={ud.image}/>
                      <div className={css.userProfileNameAndPhone}>
                          <p className={css.userProfileName}>{ud.name}</p>
                          <p className={css.userProfilePhone}>{ud.phoneNumber}</p>
                      </div>
                    </div>
                    <div className={"displayRow " + css.userBtnArea}>
                      <Button cls={"hoverThis " + css.settingsBtn} val="Settings"/>
                      <Button cls={"hoverThis " + css.logoutBtn} func={func} val="Logout"/>
                    </div>
                </div> 
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
