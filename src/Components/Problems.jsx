import "./problems.css"
import { problemsArr } from "./problems/problems"
function Problems(){
    return(
        <div className="problems">
            
             {problemsArr.map((item)=>{
                return <div>{item}</div>
             })} 
        </div>
    )
}

export default Problems