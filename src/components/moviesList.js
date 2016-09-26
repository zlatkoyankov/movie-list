import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import MovieRow from './presentational/movieRow';

class MoviesList extends Component {
  render() {
    const title = <h3>All Movies</h3>;

    return (
      <Panel header={title} bsStyle="info">
        <ul className="moviesList">
          {this.props.movies.map( movie => {
            return (<MovieRow key={movie.id}
                              movie={movie}
                              onClick={this.props.onMovieClick}
                              btnClick={this.props.btnClick}
                              text={movie.title + " (" +  movie.release_date.substr(0,4) + ")"}/>);
          })}
        </ul>
      </Panel>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired
};

export default connect()(MoviesList);
