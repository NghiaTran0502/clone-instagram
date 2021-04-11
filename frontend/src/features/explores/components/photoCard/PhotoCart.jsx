import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './PhotoCart.scss';

const PhotoCart = props => {

   const { photos, onClick } = props;

   const { url, like, comment } = photos;

   return (
      <div className="photo" onClick={onClick}>
         <img src={url} alt="" />
         <div className="photo__overlay">
            <div className="photo__info">
               <div>
                  <span>
                     <FontAwesomeIcon icon={faHeart} /> {like}
                  </span>
               </div>
               <div>
                  <span>
                     <FontAwesomeIcon icon={faComment} /> {comment}
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}

PhotoCart.propTypes = {
   photos: PropTypes.object.isRequired,
   onClick: PropTypes.func.isRequired,
}

export default PhotoCart
