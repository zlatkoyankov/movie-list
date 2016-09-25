import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import Star from './star';

const MovieRow = ({movie, onClick, btnClick, text}) => {

  const btnClickHandler = (e) => {
    e.stopPropagation();
    btnClick(movie);
  };

  const listItemClickHandler = (e) => {
    e.stopPropagation();
    onClick(movie);
  };

  return  (<li className="movieRow"
               onClick={listItemClickHandler}>
            <Button onClick={btnClickHandler}>Add to <Star /></Button>
            <span>{text}</span>
          </li>);
};

MovieRow.propTypes ={
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

MovieRow.defaultProps = { favourite: true };

export default MovieRow;
