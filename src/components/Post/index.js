import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiError} from 'react-icons/bi'
import EachPost from '../EachPost'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Post extends Component {
  state = {apiStatus: apiStatusConstant.inProgress, postUserData: []}

  componentDidMount() {
    this.fetchPostData()
  }

  fetchPostData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/insta-share/posts'
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
    this.fetchPostData()
  }

  renderPostLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  renderPostSuccess = () => {
    const {postUserData} = this.state
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
      <>
        {updatedPostData.map(eachPost => (
          <EachPost key={eachPost.postId} eachPost={eachPost} />
        ))}
      </>
    )
  }

  renderPostFailureView = () => (
    <div className="failure-view-container-2">
      <BiError className="error-icon" />
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

  render() {
    return <div className="post-container-1">{this.renderPostViews()}</div>
  }
}

export default Post
