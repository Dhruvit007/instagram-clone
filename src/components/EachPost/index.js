import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsHeart} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import './index.css'

class EachPost extends Component {
  state = {likeCount: '', isLiked: false}

  componentDidMount() {
    const {eachPost} = this.props
    const {likesCount} = eachPost
    this.setState({likeCount: likesCount})
  }

  postLikeApiCall = async () => {
    const {eachPost} = this.props
    const {postId} = eachPost
    const likeObj = {
      like_status: true,
    }

    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(likeObj),
    }

    const postLikeApi = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const response = await fetch(postLikeApi, option)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.setState(prevState => ({
        likeCount: prevState.likeCount + 1,
        isLiked: true,
      }))
    }
  }

  postUnLikeApiCall = async () => {
    const {eachPost} = this.props
    const {postId} = eachPost
    const likeObj = {
      like_status: false,
    }

    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(likeObj),
    }

    const postLikeApi = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const response = await fetch(postLikeApi, option)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.setState(prevState => ({
        likeCount: prevState.likeCount - 1,
        isLiked: false,
      }))
    }
  }

  render() {
    const {eachPost} = this.props
    const {comments, createdAt, postDetails, profilePic, userName} = eachPost
    const {likeCount} = this.state
    const {isLiked} = this.state
    return (
      <div className="post-container">
        <div className="profile-pic-name-container">
          <div className="profile-pic-container">
            <img src={profilePic} alt="hhh" className="profile-pic" />
          </div>
          <p className="person-name">{userName}</p>
        </div>
        <img src={postDetails.image_url} alt="yyz" className="post-photo" />
        <div className="about-post-container">
          <div className="reaction-container">
            {isLiked ? (
              <button onClick={this.postUnLikeApiCall} type="button">
                <FcLike />
              </button>
            ) : (
              <button onClick={this.postLikeApiCall} type="button">
                <BsHeart />
              </button>
            )}

            <FaRegComment />
            <BiShareAlt />
          </div>
          <p className="likes-count">{likeCount} likes</p>
          <p className="post-caption">{postDetails.caption}</p>
          {comments.map(eachComment => (
            <p className="comment-details" key={eachComment.user_name}>
              {eachComment.user_name}
              <span className="comment">{eachComment.comment}</span>
            </p>
          ))}

          <p className="post-time">{createdAt}</p>
        </div>
      </div>
    )
  }
}

export default EachPost
