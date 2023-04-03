import "./Header.css"
import Socials from "./Socials"
import Share from "./Share"
import { Button } from "react-bootstrap"
function Header({setShow}){

    return(
        <div className="header-el">


        <h1>Common mistakes in Javascript <Share /> </h1>
        <h5>By: Omaran Bazna 'coding tutor' <Button onClick={()=>{setShow(true)}} variant="dark">Request tutor</Button></h5>
        <Socials />
      </div>
    )
}

export default Header