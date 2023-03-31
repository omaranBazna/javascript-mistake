
import Editor from "@monaco-editor/react";
function Problem({item}){

    return(<div><h1>{item.title}</h1>
    <div style={{width:"80%",margin:"auto"}}>
    <Editor
     style={{border:"4px solid grey"}}
     height="200px"
     width="100%"
     defaultLanguage="javascript"
     defaultValue={item.code}
     language={"javascript"}
    value={item.code}
    theme="vs-dark"
    options={{readOnly:true}}
   /></div>
    </div>)
}

export default Problem