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
        <li className='sidemenu-icons'>
          <FontAwesomeIcon className="sidemenu-fontIcons" icon={faHashtag}></FontAwesomeIcon>
          <a href="/">Dashboard</a>
        </li>
        <li className='sidemenu-icons'>
          <FontAwesomeIcon className="sidemenu-fontIcons" icon={faBookmark}></FontAwesomeIcon>
          <Link to="/services">Services</Link>
        </li>
        <li className='sidemenu-icons'>
          <FontAwesomeIcon className="sidemenu-fontIcons" icon={faUser}></FontAwesomeIcon>
          <a href="/">User Management</a>
        </li>
        
      </div>
    );
};

export default Sidemenu;