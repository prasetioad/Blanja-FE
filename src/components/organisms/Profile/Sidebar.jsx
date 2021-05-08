import css from './profile.module.css';
import Pen from '../../images/Pen.png';
// MOLECULES
import { SidebarUser, SidebarStore } from '../../molecules';

export default function Sidebar({ ms, sm, au, ud }) {
   return(
      <div className={"displayColumn " + css.sidebar}>
         <div className={"displayRow " + css.sidebarUser}>
            <img alt="Profile Picture" className={"hoverThis " + css.profileImage} src={`${process.env.REACT_APP_API_IMG}${ud.image}`}/>
            <div className={"displayColumn " + css.userProfileNameAndPhone}>
               <p className={css.userProfileName}>{ud.name.length > 25 ? ud.name.slice(0,25) + "..." : ud.name}</p>
               <div className="displayRow hoverThis">
                  <img alt="Pen" className={css.penLogo} src={Pen}/>
                  <span className={css.userChangeProfileText}>Ubah Profile</span>
               </div>
            </div>
         </div>
         { ud.role === 1 ? <SidebarStore ms={ms} sm={sm}/> : ud.role === 2 ? <SidebarUser ms={ms} sm={sm}/> : null }
      </div>
   )
}