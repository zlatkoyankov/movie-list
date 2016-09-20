import React, { PropTypes } from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';

const MovieRow = ({onClick, btnClick, favourite, text}) => {
  const btnText = favourite ? "Remove from favourite" : "Add to favourite";
  return  (<ListGroupItem className="movieRow" bsStyle="info">
            <Button onClick={btnClick}>{btnText}</Button>
            <span onClick={onClick}>{text}</span>
          </ListGroupItem>);
};

MovieRow.propTypes ={
  onClick: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
  favourite: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default MovieRow;
