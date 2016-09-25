import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

const Star = ( {notEmpty} ) => {
  let glyphSign = 'star-empty';
  if( notEmpty ) {
    glyphSign = 'star';
  }
  return  (<Glyphicon glyph={glyphSign} />);
};

Star.propTypes = {
  notEmpty: PropTypes.bool
};

Star.defaultProps = { notEmpty: true };

export default Star;
