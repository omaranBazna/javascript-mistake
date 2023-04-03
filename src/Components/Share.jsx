import "./share.css"
import { 
 
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,


  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
 
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,

  EmailIcon,

} from "react-share"

const shareUrl = window.location.href;
const title = 'JavaScript common mistakes';
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
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
           
          </div>
        </div>

        <div className="Demo__some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Demo__some-network__share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

        
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>


        

       

        <div className="Demo__some-network">
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>

          
        </div>

       

       

        

        <div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
 
       

        </div>
    )
}

export default Share;