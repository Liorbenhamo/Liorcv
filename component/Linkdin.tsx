import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./styles/social.css"
function Linkdin() {
  return (
    <div className="tile" id="linkedin-tile">
        <a target="_blank" href="https://www.linkedin.com/in/liorbenhamo/" className="social-link">
        <FontAwesomeIcon icon={faLinkedinIn} className="linkedin-pic" />
        </a>
      </div>
  )
}

export default Linkdin