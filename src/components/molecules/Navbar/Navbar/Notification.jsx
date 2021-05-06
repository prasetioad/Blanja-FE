import css from "./style.module.css";
// IMAGES
import Bell from "../../../images/bell.png";
import NoNotification from "../../../images/noNotification.png"

export default function Notification() {
   return(
      <div className={"hideFirst dropdown textSet " + css.notificationZone}>
         <img alt="Bell" className="hoverThis searchLogo" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={Bell}/>
         <div className={"hideFirst dropdown-menu " + css.notificationList} aria-labelledby="dropdownMenuButton">
            <img alt="NoNotification" className={css.noNotificationPicture} src={NoNotification}/>
         </div>
      </div>
   )
}