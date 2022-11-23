import './index.css'

const NotFound = props => {
  const {history} = props

  const onClickHomeRedirect = () => {
    history.replace('/')
  }

  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1669184204/Group_snlrdp.png"
        alt="page not found"
        className="page-not-found-image"
      />
      <h1 className="page-not-found-heading">PAGE NOT FOUND</h1>
      <p className="page-not-found-para">
        we are sorry, the page you requested could not be found.
        <br /> Please go back to the home page
      </p>
      <button
        onClick={onClickHomeRedirect}
        className="not-found-home-btn"
        type="button"
      >
        Home Page
      </button>
    </div>
  )
}

export default NotFound
