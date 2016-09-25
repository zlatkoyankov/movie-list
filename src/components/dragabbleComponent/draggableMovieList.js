import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Panel } from 'react-bootstrap';

import DraggableMovieRow from './draggableMovieRow';
import Star from '../presentational/star';

class DraggableMoviesList extends Component {
  constructor(props, context) {
    super(props, context);

    this.moveRow = this.moveRow.bind(this);

    this.state = {
      movies: this.props.movies
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      movies: nextProps.movies
    });
  }

  moveRow(dragIndex, hoverIndex) {
    const { movies } = this.state;
    const dragMovie = movies[dragIndex];

    this.setState(update(this.state, {
      movies: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragMovie]
        ]
      }
    }));
    this.props.updateFavouriteMovies(this.state.movies);
  }

  render() {
    const { movies } = this.state;
    const title = <h3><Star /> Favourite Movies</h3>;
    return (
      <Panel header={title} bsStyle="primary">
        <ul>
          {movies.map((movie, i) => {
            return (
              <DraggableMovieRow key={movie.id}
                    index={i}
                    id={movie.id}
                    movie={movie}
                    onClick={this.props.onMovieClick}
                    btnClick={this.props.btnClick}
                    moveRow={this.moveRow} />
            );
          })}
        </ul>
      </Panel>
    );
  }
}

DraggableMoviesList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
  updateFavouriteMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

export default DragDropContext(HTML5Backend)(DraggableMoviesList);
