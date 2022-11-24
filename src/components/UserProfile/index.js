import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import EachUserProfile from '../EachUserProfile'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UserProfile extends Component {
  state = {apiStatus: apiStatusConstant.inProgress, userData: {}}

  componentDidMount() {
    this.fetchMyUserData()
  }

  fetchMyUserData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {userId} = params
    console.log(userId)
    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/insta-share/users/${userId}`
    const response = await fetch(apiUrl, apiOptions)
    if (response.ok === true) {
      const data = await response.json()
      const profileData = data.user_details
      this.setState({
        userData: profileData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onClickRetry = () => {
    this.fetchMyUserData()
  }

  renderUserLoadingView = () => (
    <div className="loader-container profile-loading">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  renderUserFailureView = () => (
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

  renderUserSuccess = () => {
    const {userData} = this.state
    return <EachUserProfile myProfileData={userData} key={userData.id} />
  }

  renderUserViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderUserLoadingView()
      case apiStatusConstant.success:
        return this.renderUserSuccess()
      case apiStatusConstant.failure:
        return this.renderUserFailureView()
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
        {this.renderUserViews()}
      </div>
    )
  }
}

export default UserProfile
