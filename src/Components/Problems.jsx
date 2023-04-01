import "./problems.css"
import { problemsArr } from "./problems/problems"
import Problem from "./Problem"
import Button from "react-bootstrap/Button"
import {Col,Row,Container} from "react-bootstrap"
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      onHide={()=>{}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Coding tutor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you looking for coding tutor to: </h4>

        <ul>
           <li>Learning algorithm and data structure and cracking the technical interview.</li>
           <li>Master full stack web development.</li>
           <li>Helping in your University course  and assignments.</li>

        </ul>
        
      </Modal.Body>
      <Modal.Footer>
         <Button variant="danger" onClick={()=>{window.open("https://www.codementor.io/@omran4d")}}> Request tutor</Button>
        <Button onClick={props.onHide}>No thank you</Button>
      </Modal.Footer>
    </Modal>
  );
}



function Problems(){
    const [index,setIndex]=useState(1)
    const [value, setValue] = useState(1);
    const [fontSize,setFontSize]=useState(18)
    const [modalShow, setModalShow] = useState(false);
    const nextPage=()=>{
      if(index<problemsArr.length-1){
        setIndex(index+1)
        if(index==1){
          setModalShow(true)
        }
      }
    }
    const previousPage=()=>{
         if(index>0){
            setIndex(index-1)
         }
    }
    return(
        <div className="problems" style={{marginBottom:"130px"}}>
             

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              <Problem setFontSize={setFontSize} fontSize={fontSize} value={value} setValue={setValue} index={index}  item={problemsArr[index]} />
            
                <Container style={{width:"87%"}} className="mx-auto m-4" fluid> 
                    <Row>
                        <Col sm={5} md={3} className="m-1">
                            {index>0 &&
        <Button style={{width:"100%"}} className="ml-auto" onClick={previousPage}>Previous</Button>}</Col>
        <Col sm={2} md={5}  className="m-1">
        </Col>
        <Col sm={5} md={3}  className="m-1">
            {index<problemsArr.length-1 &&
         <Button style={{width:"100%"}} className="mr-auto" onClick={nextPage}>Next</Button>
            }
      </Col> </Row>  
      
      <Row><h4 className="buyme">Buy me a : 
        <a target="_blank" href="https://buy.stripe.com/4gw6r4cMT1rVbxCaEM">☕ $1.5</a>
        
         
         <a href="https://buy.stripe.com/14k2aOfZ5eeHdFKaEN">🍨 $3.0</a>
      <a target="_blank" href="https://buy.stripe.com/bIY8zcfZ5daD6di6oy">🎁 $5.0</a>
      </h4>
        </Row></Container>
        
         </div>
    )
}

export default Problems