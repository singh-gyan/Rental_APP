import React, { Component } from "react";
import PropTypes from "prop-types";
import './PropertyCard.scss'
function PropertyCard({
  Title,
  Image,
  titleStyles,
  Content,
  contentStyles,
  cardStyles,
  sx,
}) {
  return (
    <div className='card-content' style={sx}>
      <div className='image'><img src={Image} alt='' /><div className='card' style={cardStyles}>
        <div className='body' >
          <div style={titleStyles}>{Title}</div>

          <div style={contentStyles}>{Content}</div>
        </div></div>
      
      </div>
    </div>
  );
}

PropertyCard.prototype = {
  Title: PropTypes.string,
  Image: PropTypes.string,
  titlestyles: PropTypes.object,
  Content: PropTypes.element,
  cardStyles: PropTypes.object,
  contentStyle: PropTypes.object,
};

export default PropertyCard;
