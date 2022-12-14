import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import EachPost from '../EachPost'

import Header from '../Header'
import ReactSlick from '../Slider'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInputHome: '',
    isSearching: false,
    apiStatus: apiStatusConstant.initial,
    postUserData: [],
  }

  componentDidMount() {
    this.fetchPostData()
    console.log('component did mount called')
  }

  fetchPostData = async () => {
    const {searchInputHome} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    let apiUrl
    if (searchInputHome === '') {
      apiUrl = 'https://apis.ccbp.in/insta-share/posts'
    } else {
      apiUrl = `https://apis.ccbp.in/insta-share/posts?search=${searchInputHome}`
    }

    const response = await fetch(apiUrl, apiOptions)
    if (response.ok === true) {
      const data = await response.json()
      const postData = data.posts
      this.setState({
        postUserData: postData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onClickRetry = () => {
    this.setState({apiStatus: apiStatusConstant.initial}, this.fetchPostData)
  }

  renderPostLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  renderNoSearchResultView = () => (
    <>
      <img
        src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1669394593/Group_1_jixbbk.png"
        alt="search not found"
        className="search-not-found-image"
      />
      <h1 className="search-not-found-header">Search Not Found</h1>
      <p className="search-not-found-error-msg">
        Try different keyword or search again
      </p>
    </>
  )

  renderPostSuccess = () => {
    const {postUserData} = this.state
    if (postUserData.length === 0) {
      return this.renderNoSearchResultView()
    }
    const updatedPostData = postUserData.map(eachPostData => ({
      comments: eachPostData.comments,
      createdAt: eachPostData.created_at,
      likesCount: eachPostData.likes_count,
      postDetails: eachPostData.post_details,
      postId: eachPostData.post_id,
      profilePic: eachPostData.profile_pic,
      userId: eachPostData.user_id,
      userName: eachPostData.user_name,
    }))
    return (
      <ul className="post-list-item-container">
        {updatedPostData.map(eachPost => (
          <EachPost key={eachPost.postId} eachPost={eachPost} />
        ))}
      </ul>
    )
  }

  renderPostFailureView = () => (
    <div className="failure-view-container-2">
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
        Try again
      </button>
    </div>
  )

  renderPostViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderPostLoadingView()
      case apiStatusConstant.success:
        return this.renderPostSuccess()
      case apiStatusConstant.failure:
        return this.renderPostFailureView()
      default:
        return null
    }
  }

  onClickSearchIcon = searchInput => {
    this.setState({apiStatus: apiStatusConstant.initial})
    let searchingStatus
    if (searchInput === '') {
      searchingStatus = false
    } else {
      searchingStatus = true
    }
    this.setState(
      {searchInputHome: searchInput, isSearching: searchingStatus},
      this.fetchPostData,
    )
  }

  render() {
    const {isSearching} = this.state
    return (
      <div className="home-contain-container">
        <div className="home-contain-container-1">
          <Header onClickSearchIcon={this.onClickSearchIcon} />
          {!isSearching && <ReactSlick />}
        </div>
        <hr className="hr-line" />
        {isSearching && (
          <h1 className="search-result-heading">Search Results</h1>
        )}
        <div className="post-container-1">{this.renderPostViews()}</div>
      </div>
    )
  }
}

export default Home
