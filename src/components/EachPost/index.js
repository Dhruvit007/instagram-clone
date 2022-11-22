import {BsHeartFill} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import './index.css'

const EachPost = props => {
  const {eachPost} = props
  const {
    comments,
    createdAt,
    likesCount,
    postDetails,
    profilePic,
    userName,
  } = eachPost
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
          <BsHeartFill className="post-like" />
          <FaRegComment />
          <BiShareAlt />
        </div>
        <p className="likes-count">{likesCount} likes</p>
        <p className="post-caption">{postDetails.caption}</p>
        {comments.map(eachComment => (
          <p className="comment-details">
            {eachComment.user_name}
            <span className="comment">{eachComment.comment}</span>
          </p>
        ))}

        <p className="post-time">{createdAt}</p>
      </div>
    </div>
  )
}

export default EachPost
