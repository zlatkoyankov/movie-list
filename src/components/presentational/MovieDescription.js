import React, { Component, PropTypes } from 'react';
import { Panel, Table } from 'react-bootstrap';

class MovieDescription extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <Panel header="Movie Description" bsStyle="success">
        <Table bordered responsive>
          <tbody>
          <tr>
            <td className="fontBold">Title</td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td className="fontBold">Release date</td>
            <td>{movie.release_date}</td>
          </tr>
          <tr>
            <td className="fontBold">Genres</td>
            <td>{movie.genres}</td>
          </tr>
          <tr>
            <td className="fontBold">Original language</td>
            <td>{movie.original_language}</td>
          </tr>
          <tr>
            <td className="fontBold">Overview</td>
            <td>{movie.overview}</td>
          </tr>
          </tbody>
        </Table>
      </Panel>
    );
  }
}

MovieDescription.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieDescription;
