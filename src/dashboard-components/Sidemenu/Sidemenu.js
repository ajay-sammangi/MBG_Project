import React from 'react';
import {Link} from 'react-router-dom'
import '../Sidemenu/Sidemenu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHashtag} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
const Sidemenu = () => {
    return (
      <div className="sidemenu">
        <li className="sidemenu-icons">
          <a href="/" className="select-menu">
            <FontAwesomeIcon
              className="sidemenu-fontIcons mr-2"
              icon={faHashtag}
            />
            Dashboard
          </a>
        </li>
        <li className="sidemenu-icons">
          <Link to="/services" className="select-menu">
            <FontAwesomeIcon
              className="sidemenu-fontIcons mr-2"
              icon={faBookmark}
            />
            Services
          </Link>
        </li>
        <li className="sidemenu-icons">
          <a href="/" className="select-menu">
            <FontAwesomeIcon
              className="sidemenu-fontIcons mr-2"
              icon={faUser}
            />
            User Management
          </a>
        </li>
      </div>
    );
};

export default Sidemenu;