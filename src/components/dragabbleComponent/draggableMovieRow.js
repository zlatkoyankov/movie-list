import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { Button, Glyphicon } from 'react-bootstrap';
import Star from '../presentational/star';

const movieSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class DraggableMovieRow extends Component {
  render() {
    const { movie, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    const btnClickHandler = (e) => {
      e.stopPropagation();
      this.props.btnClick(movie);
    };

    const listItemClickHandler = (e) => {
      e.stopPropagation();
      this.props.onClick(movie);
    };

    return connectDragSource(connectDropTarget(
      <li className="movieRow" style={{ opacity }} onClick={listItemClickHandler}>
        <Glyphicon glyph="th" />
        <Button onClick={btnClickHandler}>Remove from<Star /></Button>
        <span>{movie.title} ({movie.release_date.substr(0,4)})</span>
      </li>
    ));
  }
}


DraggableMovieRow.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
  moveRow: PropTypes.func.isRequired
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

function collect2(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

let dragTarget = DropTarget('row', cardTarget, collect)(DraggableMovieRow);

export default DragSource('row', movieSource, collect2)(dragTarget);
