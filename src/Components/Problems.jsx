import "./problems.css"
import { problemsArr } from "./problems/problems"
import Problem from "./Problem"
import Button from "react-bootstrap/Button"
import {Col,Row,Container} from "react-bootstrap"
import { useState } from "react";
function Problems(){
    const [index,setIndex]=useState(1)
    const [value, setValue] = useState(1);
    const [fontSize,setFontSize]=useState(18)
    const nextPage=()=>{
      if(index<problemsArr.length-1){
        setIndex(index+1)
      }
    }
    const previousPage=()=>{
         if(index>0){
            setIndex(index-1)
         }
    }
    return(
        <div className="problems" style={{marginBottom:"130px"}}>
             
              <Problem setFontSize={setFontSize} fontSize={fontSize} value={value} setValue={setValue} index={index}  item={problemsArr[index]} />
            
                <Container style={{width:"87%"}} className="mx-auto m-4" fluid> 
                    <Row>
                        <Col className="col-2">
                            {index>0 &&
        <Button className="ml-auto" onClick={previousPage}>Previous</Button>}</Col>
        <Col className="col-8">
        </Col>
        <Col className="col-2 ">
            {index<problemsArr.length-1 &&
         <Button className="mr-auto" onClick={nextPage}>Next</Button>
            }
      </Col> </Row>  </Container>
        
         </div>
    )
}

export default Problems