
import Editor from "@monaco-editor/react";
function Problem({item}){

    return(<div><h1>{item}</h1>
    <div style={{width:"80%",margin:"auto"}}>
    <Editor
     style={{border:"4px solid grey"}}
     height="200px"
     width="100%"
     defaultLanguage="javascript"
     defaultValue={`console.log("helloword")`}
     language={"javascript"}
    value={`console.log("hello word")`}
    theme="vs-dark"
   /></div>
    </div>)
}

export default Problem