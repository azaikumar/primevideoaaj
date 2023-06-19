import Popup from 'reactjs-popup'
// import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <div>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <button type="button" className="thumbnail-btn">
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="thumbnail-img"
              />
            </button>
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
