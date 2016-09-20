import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col} from 'react-bootstrap';

import Header from './presentational/header';
import Footer from './presentational/footer';
import MoviesList from './moviesList';
import Star from './presentational/star';

class Application extends Component {
  constructor(props, context){
    super(props, context);

    this.onMovieClick = this.onMovieClick.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  onMovieClick(e) {
    /* eslint-disable no-console */
    console.log("Movie is Clicked");
  }

  btnClick() {
    /* eslint-disable no-console */
    console.log("Button is clicked");
  }

  render() {
    return (
        <div>
          <Header projectTitle="Favourite Movies Project"/>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <MoviesList title="Favourite Movies"
                            style="primary"
                            movies={this.props.favouriteMovies}
                            onMovieClick={this.onMovieClick}
                            btnClick={this.btnClick}
                />
                <MoviesList title="All Movies"
                            style="info"
                            movies={this.props.allMovies}
                            favourite={false}
                            onMovieClick={this.onMovieClick}
                            btnClick={this.btnClick}
                />
              </Col>
              <Col xs={6} md={6}>Movie Description section</Col>
            </Row>
          </Grid>
          <Footer text="© 2016 Zlatko Yankov"/>
        </div>
    );
  }
}

Application.propTypes = {
  allMovies: PropTypes.array.isRequired,
  favouriteMovies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    allMovies: state.allMovies,
    favouriteMovies: state.favouriteMovies
  };
}

export default connect(mapStateToProps)(Application);
