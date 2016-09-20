import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel, ListGroup } from 'react-bootstrap';
import MovieRow from './presentational/movieRow';

class MoviesList extends Component {
  render() {
    const title = (<h3>{this.props.title}</h3>);
    return (
      <div>
        <Panel header={title} bsStyle={this.props.style}>
          <ListGroup className="moviesList">
            {this.props.movies.map( (movie, index) => {
              return (<MovieRow key={index}
                                favourite={this.props.favourite}
                                onClick={this.props.onMovieClick}
                                btnClick={this.props.btnClick}
                                text={movie.title} />);
            })}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
  favourite: PropTypes.bool
};

export default connect()(MoviesList);
