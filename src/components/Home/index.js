import {Component} from 'react'
import Header from '../Header'
import ReactSlick from '../Slider'
import Post from '../Post'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {searchInputHome: ''}

  onClickSearchIcon = searchInput => {
    this.setState({searchInputHome: searchInput})
  }

  render() {
    const {searchInputHome} = this.state
    console.log(searchInputHome)
    return (
      <div className="home-contain-container">
        <div className="home-contain-container-1">
          <Header onClickSearchIcon={this.onClickSearchIcon} />
          <ReactSlick />
        </div>
        <hr className="hr-line" />
        <Post searchInput={searchInputHome} />
      </div>
    )
  }
}

export default Home
