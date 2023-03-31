import "./share.css"
import { LinkedinShareButton,LinkedinIcon} from "react-share"
function Share(){
    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
        
        } catch (err) {
         
        }
      
        document.body.removeChild(textArea);
      }
      function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(function() {
       
        }, function(err) {
        
        });
      }



    return(
        <div className="share-c">
        <i  className=" fa-solid fa-share-nodes"></i>
        <i onClick={()=>{copyTextToClipboard(window.location.href)}} className="share fas fa-copy"></i>

        <div className="Demo__some-network">
       
          <LinkedinShareButton url={window.location.href} className="Demo__some-network__share-button">
            <LinkedinIcon size={30} round />
          </LinkedinShareButton>
        </div>

        </div>
    )
}

export default Share;