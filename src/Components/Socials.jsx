import "./Socials.css"
function Socials(){
return (
    <div className="socials">

        <a 
    href="#" onclick='window.open("https://www.linkedin.com/in/omaran-bazna-64234b102/");return false;'
    > <i class="fa-brands fa-linkedin-in"></i></a>

    <a 
      
        href="#" onclick='window.open("https://github.com/omaranBazna");return false;'
      >
<i class="fa-brands fa-github" 
  
  ></i>
    </a>

    <a href="mailto:omran4d@gmail.com" >
      <i class="fa fa-envelope" aria-hidden="true"></i>
    </a>
    </div>
)
}

export default Socials