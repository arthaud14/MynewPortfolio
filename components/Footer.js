import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 h-10">
        <ul className="w-full h-full flex justify-center items-center">
          <li>
            <a
              className="p-5"
              href="https://www.linkedin.com/in/arthaud-primevert-56b225108/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a className="p-5" href="https://www.github.com/arthaud14/">
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
          </li>
          <li>
            <a
              className="p-5"
              href="https://www.flickr.com/photos/arthaudprimevert/"
            >
              <FontAwesomeIcon icon={faFlickr} size="2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-sm text-center dark:text-gray-50">
        2022 Copyright - Arthaud PRIMEVERT
      </div>
    </footer>
  );
}
