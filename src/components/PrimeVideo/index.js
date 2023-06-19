import {Component} from 'react'
import './index.css'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )

    const comedyMoviesList = moviesList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-logo"
          />
        </div>
        <div className="movies-container">
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div className="movies-container">
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
