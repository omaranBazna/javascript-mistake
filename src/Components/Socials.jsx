import "./Socials.css"
function Socials(){
return (
    <div className="socials">

        <a 
    href="#" onClick={()=>{window.open("https://www.linkedin.com/in/omaran-bazna-64234b102/");return false;}}> <i className="fa-brands fa-linkedin-in"></i></a>

    <a 
      
        href="#" onClick={()=>{window.open("https://github.com/omaranBazna");return false;}}
      >
<i className="fa-brands fa-github" 
  
  ></i>
    </a>

    <a href="mailto:omran4d@gmail.com" >
      <i className="fa fa-envelope" aria-hidden="true"></i>
    </a>
    </div>
)
}

export default Socials