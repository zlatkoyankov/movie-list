import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Row, Col} from 'react-bootstrap';

import Header from './presentational/header';
import Footer from './presentational/footer';
import MovieDescription from './presentational/MovieDescription';
import MoviesList from './moviesList';
import DraggableMovieList from './dragabbleComponent/draggableMovieList';
import * as moviesActions from '../actions/actions';
import { removeLocalStorage } from '../utils/localStoreAPI';

class Application extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      showMovieDescription: false,
      selectedMovie: null
    };

    this.onMovieClick = this.onMovieClick.bind(this);
    this.btnFavouriteMoviesClick = this.btnFavouriteMoviesClick.bind(this);
    this.btnAllMoviesClick = this.btnAllMoviesClick.bind(this);
    this.updateFavouriteMovies = this.updateFavouriteMovies.bind(this);
  }

  onMovieClick(movie) {
    if ( movie === this.state.selectedMovie ) {
      this.setState({
        showMovieDescription: false,
        selectedMovie: null
      });
    } else {
      this.setState({
        showMovieDescription: true,
        selectedMovie: movie
      });
    }
  }

  btnFavouriteMoviesClick(movie) {
    this.props.actions.addToAll(movie);
    this.props.actions.removeFromFavourite(movie);
  }

  btnAllMoviesClick(movie) {
    this.props.actions.addToFavourite(movie);
    this.props.actions.removeFromAll(movie);
  }

  removeLocalStorageBtnClick() {
    removeLocalStorage();
  }

  updateFavouriteMovies(movies) {
    this.props.actions.updateFavouriteMovies(movies);
  }

  render() {
    return (
        <div>
          <Header projectTitle="Favourite Movies Project"/>
          <Grid>
            <Row className="show-grid">
              <Button onClick={this.removeLocalStorageBtnClick}>Erase local storage</Button>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <DraggableMovieList movies={this.props.favouriteMovies}
                                    updateFavouriteMovies={this.updateFavouriteMovies}
                                    onMovieClick={this.onMovieClick}
                                    btnClick={this.btnFavouriteMoviesClick}
                />
                <MoviesList movies={this.props.allMovies}
                            onMovieClick={this.onMovieClick}
                            btnClick={this.btnAllMoviesClick}
                />
              </Col>
              <Col xs={6} md={6}>{this.state.showMovieDescription && <MovieDescription movie={this.state.selectedMovie} />}</Col>
            </Row>
          </Grid>
          <Footer text="© 2016 Zlatko Yankov"/>
        </div>
    );
  }
}

Application.propTypes = {
  allMovies: PropTypes.array.isRequired,
  favouriteMovies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    allMovies: state.allMovies,
    favouriteMovies: state.favouriteMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {
  actions: bindActionCreators(moviesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
