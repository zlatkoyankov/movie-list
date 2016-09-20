import React, { PropTypes } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const Star = ({notEmpty}) => {
  let glyphSign = 'star-empty';
  if( notEmpty ) {
    glyphSign = 'star';
  }
  return  (<Glyphicon glyph={glyphSign} />);
};

Star.propTypes = {
  notEmpty: PropTypes.bool.isRequired
};

export default Star;
