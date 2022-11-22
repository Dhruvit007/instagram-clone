import {Component} from 'react'
import {BsHeartFill} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import './index.css'

class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="profile-pic-name-container">
          <div className="profile-pic-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png"
              alt="hhh"
              className="profile-pic"
            />
          </div>
          <p className="person-name">Leslie Alexander</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-1-img.png"
          alt="yyz"
          className="post-photo"
        />
        <div className="about-post-container">
          <div className="reaction-container">
            <BsHeartFill className="post-like" />
            <FaRegComment />
            <BiShareAlt />
          </div>
          <p className="likes-count">1081 likes</p>
          <p className="post-caption">The sky is the daily bread of the eyes</p>
          <p className="comment-details">
            Arjun Mark
            <span className="comment">
              Aim for the sky, but move slowly, enjoying every step along the
              way.
            </span>
          </p>
          <p className="comment-details">
            Mark Wood
            <span className="comment">My favorite!</span>
          </p>
          <p className="post-time">4 Hours Ago</p>
        </div>
      </div>
    )
  }
}

export default Post
