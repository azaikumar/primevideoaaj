import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem key={eachItem.id} data={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
