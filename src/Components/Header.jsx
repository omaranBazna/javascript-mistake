import "./Header.css"
import Socials from "./Socials"
import Share from "./Share"
function Header({}){

    return(
        <div className="header-el">


        <h1>Common mistakes in Javascript <Share /> </h1>
        <h2>By: Omaran Bazna 'coding tutor'</h2>
        <Socials />
      </div>
    )
}

export default Header