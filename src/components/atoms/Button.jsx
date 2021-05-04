export default function Button({ btnClr, cls, ftClr, val }){
   return(
      <div>
         <button className={"displayRow " + cls} style={{ background: btnClr, color: ftClr}} type="submit">
            <span style={{margin: "auto"}}>{val}</span>
         </button>
      </div>
   )
}