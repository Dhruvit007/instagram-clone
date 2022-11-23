import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Profile from '../Profile'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyProfile extends Component {
  state = {apiStatus: apiStatusConstant.inProgress, myProfileData: {}}

  componentDidMount() {
    this.fetchMyProfileData()
  }

  fetchMyProfileData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/insta-share/my-profile'
    const response = await fetch(apiUrl, apiOptions)
    if (response.ok === true) {
      const data = await response.json()
      const profileData = data.profile
      this.setState({
        myProfileData: profileData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderMyProfileLoadingView = () => (
    <div className="loader-container profile-loading" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  renderMyProfileFailureView = () => (
    <div className="failure-view-container-2 failure-view-container-my-profile">
      <img
        src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1669180760/Group_7522_y0smlp.png"
        alt="failure view"
        className="failure-view-image"
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

  renderMyProfileSuccess = () => {
    const {myProfileData} = this.state
    console.log(myProfileData)
    return <Profile myProfileData={myProfileData} key={myProfileData.id} />
  }

  renderMyProfileViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderMyProfileLoadingView()
      case apiStatusConstant.success:
        return this.renderMyProfileSuccess()
      case apiStatusConstant.failure:
        return this.renderMyProfileFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-contain-container">
        <div className="profile-contain-container-1">
          <Header />
        </div>
        {this.renderMyProfileViews()}
      </div>
    )
  }
}

export default MyProfile
