import "./share.css"
import { LinkedinShareButton,LinkedinIcon} from "react-share"
function Share(){

    return(
        <div className="share-c">
        <i  className="share fa-solid fa-share-nodes">
          

        </i>
        <div className="Demo__some-network">
       
          <LinkedinShareButton url={window.location.href} className="Demo__some-network__share-button">
            <LinkedinIcon size={42} round />
          </LinkedinShareButton>
        </div>

        </div>
    )
}

export default Share;