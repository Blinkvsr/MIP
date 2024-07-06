import "./style.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faX } from '@fortawesome/free-solid-svg-icons';

export default function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top">
      <h1>Logo Here</h1>
      <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? (
          <FontAwesomeIcon icon={faX} className="icon-black" />
        ) : (
          <FontAwesomeIcon icon={faList} className="icon-black" />
        )}
      </button>
      <ul className={isOpen ? "open" : "closed"}>
        <li>home</li>
        <li>products</li>
        <li>services</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
