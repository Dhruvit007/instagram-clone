import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}
class ReactSlick extends Component {
  state = {apiStatus: apiStatusConstant.initial, storyUserData: {}}

  componentDidMount() {
    this.fetchStoryData()
  }

  fetchStoryData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/insta-share/stories'
    const response = await fetch(apiUrl, apiOptions)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({storyUserData: data, apiStatus: apiStatusConstant.success})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onClickRetry = () => {
    this.fetchStoryData()
  }

  renderSliderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  renderSliderFailureView = () => (
    <div className="failure-view-container">
      {/* <BiError className="error-icon" /> */}
      <img
        src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1669180760/Group_7522_y0smlp.png"
        alt="failure view"
      />
      <p className="error-msg-view">Something Went wrong. Please try again</p>
      <button
        onClick={this.onClickRetry}
        className="try-again-btn"
        type="button"
      >
        Try Again
      </button>
    </div>
  )

  renderSlider = () => {
    const {storyUserData} = this.state
    const userStories = storyUserData.users_stories
    return (
      <ul className="slick-container">
        <Slider {...settings}>
          {userStories.map(eachLogo => (
            <li
              className="slick-item"
              id="custom-story-style"
              key={eachLogo.user_id}
            >
              <div className="image-story-container">
                <img
                  className="logo-image"
                  src={eachLogo.story_url}
                  alt="user story"
                />
              </div>
              <p className="story-user-name">{eachLogo.user_name}</p>
            </li>
          ))}
        </Slider>
      </ul>
    )
  }

  renderSliderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderSliderLoadingView()
      case apiStatusConstant.success:
        return this.renderSlider()
      case apiStatusConstant.failure:
        return this.renderSliderFailureView()
      default:
        return null
    }
  }

  render() {
    return <div className="main-container">{this.renderSliderViews()}</div>
  }
}

export default ReactSlick
