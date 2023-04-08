
import Editor from "@monaco-editor/react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Problem({index,fontSize,setFontSize,item,value ,setValue}){
      if(!item){
        return <h1>Problem missing</h1>
      }
    const handleChange = (val) => setValue(val);
    return(<div>

        <h1 style={{width:"87%"}} className="m-4 mx-auto">{index+1}.{item.title}</h1> 
        <div style={{width:"87%"}}> <div style={{gap:"15px",display:"flex",justifyContent:"flex-start",alignItems:"center", width:"87%",margin:"auto"}}>
        
        {item.tags && item.tags.length>0 && item.tags.map((val,index)=>{
           return <div key={index} className="tag">{val}</div>
        })}
        </div></div>
        <div className="problem-header mx-auto" style={{width:"87%",display:"flex",gap:"4px",justifyContent:"flex-end",alignItems:"center"}}>
     



        <div style={{display:"flex",gap:"4px",justifyContent:"center",alignItems:"center"}}>

      <DropdownButton onSelect={(event)=>{setFontSize(event)}} key={fontSize} title={fontSize}>
        {[10,12,14,16,18,20,22,24,26].map((item,index)=>{
            return <Dropdown.Item key={index} eventKey={item} >{item}</Dropdown.Item>
        })}
        
      
      </DropdownButton>

        <ToggleButtonGroup style={{border:"1px solid rgb(200,200,200)"}} type="radio" name="options" value={value} onChange={handleChange}>
      <ToggleButton variant={value===1?"light":"dark"} name="option1" id="tbg-btn-1" value={1}>
          <i className="fa-sharp fa-regular fa-sun"></i>
      </ToggleButton>
      <ToggleButton variant={value===1?"light":"dark"} name="option2" id="tbg-btn-2" value={2}>
        <i className="fa-solid fa-moon"></i>
      </ToggleButton>
    
    </ToggleButtonGroup>
    </div>
        
      </div>  
    <div style={{borderRadius:"5px",overflow:"hidden", border:"2px solid rgb(173, 173, 173)",width:"87%",margin:"auto"}}>
 
  <Editor
     style={{border:"4px solid grey"}}
     height="200px"
     width="100%"
     
     defaultLanguage="javascript"
     defaultValue={item.code}
     language={"javascript"}
    value={item.code}
    theme={value===1?"vs-light":"vs-dark"}
    options={{readOnly:true,fontSize:fontSize}}
   /></div>

   <div  style={{width:"87%",margin:"auto"}}>
    <h3 className="m-3">Error message</h3>
    <p style={{padding:"15px",border:"2px solid rgb(200,200,200)",borderRadius:"5px"}}>{item.error}</p>
   </div>

   <div  style={{width:"87%",margin:"auto"}}>
    <h3 className="m-3">Explanation</h3>
    <p style={{padding:"15px",border:"2px solid rgb(200,200,200)",borderRadius:"5px"}}>{item.explanation}</p>
   </div>

    </div>)
}

export default Problem