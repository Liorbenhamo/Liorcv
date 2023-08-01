import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./styles/social.css";

function Instagram() {
  return (
    <div className="tile" id="instagram-tile">
      <a target="_blank" href="https://github.com/Liorbenhamo" linkedin-pic className="social-link">
        <FontAwesomeIcon icon={faGithub} className='linkedin-pic' />
      </a>
    </div>
  );
}

export default Instagram;