import {Component} from 'react'
import {Link} from 'react-router-dom'
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

    const {
      comments,
      createdAt,
      postDetails,
      profilePic,
      userName,
      userId,
    } = eachPost
    const {likeCount} = this.state
    const {isLiked} = this.state
    return (
      <li className="post-container">
        <div className="profile-pic-name-container">
          <div className="profile-pic-container">
            <img
              src={profilePic}
              alt="post author profile"
              className="profile-pic"
            />
          </div>
          <Link to={`/users/${userId}`} className="nav-item">
            <p className="person-name">{userName}</p>
          </Link>
        </div>
        <img src={postDetails.image_url} alt="post" className="post-photo" />
        <div className="about-post-container">
          <div className="reaction-container">
            {isLiked ? (
              <button
                className="like-icon"
                onClick={this.postUnLikeApiCall}
                type="button"
                // testid="unLikeIcon"
              >
                <FcLike />
              </button>
            ) : (
              <button
                className="like-icon"
                onClick={this.postLikeApiCall}
                type="button"
                // testid="likeIcon"
              >
                <BsHeart />
              </button>
            )}

            <FaRegComment />
            <BiShareAlt />
          </div>
          <p className="likes-count">{likeCount} likes</p>
          <p className="post-caption">{postDetails.caption}</p>
          {comments.map(eachComment => (
            <p className="comment" key={eachComment.user_name}>
              <span className="comment-details"> {eachComment.user_name}</span>
              {eachComment.comment}
            </p>
          ))}

          <p className="post-time">{createdAt}</p>
        </div>
      </li>
    )
  }
}

export default EachPost
