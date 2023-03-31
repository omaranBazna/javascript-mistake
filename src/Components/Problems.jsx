import "./problems.css"
import { problemsArr } from "./problems/problems"
import Problem from "./Problem"
function Problems(){
    return(
        <div className="problems">
            
             {problemsArr.map((item,index)=>{
                return <Problem key={index} item={item} />
             })} 
        </div>
    )
}

export default Problems