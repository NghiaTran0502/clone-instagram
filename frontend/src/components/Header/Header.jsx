import {
   faCommentDots,
   faHeart,
   faPlusSquare,
   faUserCircle,
   faCompass
} from '@fortawesome/free-regular-svg-icons';
import {
   faHome,
   faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = props => {
   return (
      <header className="header">
         <div className="header__main">
            <div className="header__top">
               <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="Logo" className="header__top--logo" />
               <Link to='#' className="header__top--message">
                  <FontAwesomeIcon icon={faCommentDots} />
               </Link>
            </div>
            <div className="header__search">
               <input type="text" name="search" id="search" placeholder="Search" />
            </div>
            <div className="header__navBar">
               <Link to="#" className="header__navBar--home" >
                  <FontAwesomeIcon icon={faHome} />
               </Link>
               <Link to='#' className="header__navBar--message">
                  <FontAwesomeIcon icon={faCommentDots} />
               </Link>
               <Link to="#" className="header__navBar--search" >
                  <FontAwesomeIcon icon={faSearch} />
               </Link>
               <Link to="#" className="header__navBar--compass" >
                  <FontAwesomeIcon icon={faCompass} />
               </Link>
               <Link to="#" className="header__navBar--post" >
                  <FontAwesomeIcon icon={faPlusSquare} />
               </Link>
               <Link to="#" className="header__navBar--notification" >
                  <FontAwesomeIcon icon={faHeart} />
               </Link>
               <Link to="#" className="header__navBar--profile" >
                  <FontAwesomeIcon icon={faUserCircle} />
               </Link>
            </div>
         </div>
      </header >
   );
};

Header.propTypes = {

};

export default Header;