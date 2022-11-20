import React, {Component} from 'react'
import Slider from 'react-slick'

/* Add css to your project */
import './index.css'

const companyLogosData = [
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png',
  },
  {
    id: '0a932287-8002-4fc8-95d1-8cbed3224e37',
    url:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/facebook-img_fxqbxv.png',
  },
  {
    id: '8211ce0c-d7dc-4d2b-8468-5e48ad9ae985',
    url:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/google-img_cnnaol.png',
  },
  {
    id: 'daa48153-3f16-4797-8469-5d63c9cba938',
    url:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/zomato-img_gb1k9w.png',
  },
  {
    id: '2f4b518e-29b3-45c3-a7a5-80929f7898d9',
    url:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/swiggy-img_jgxg6g.png',
  },
  {
    id: '895b9b4d-a283-4ee1-9fb8-933a3c4b449c',
    url:
      'https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/amazon-img_yvggab.png',
  },
  {
    id: 'a8c67fd0-bab9-46ec-95de-cbfa2e3473f6',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'a8c67fd0-bab9-46ec-95de-cbfa2e3473f6',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'a8c67fd0-bab9-46ec-95de-cbfa2e3473f6',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'a8c67fd0-bab9-46ec-95de-cbfa2e3473f6',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
]

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
  renderSlider = () => (
    <Slider {...settings}>
      {companyLogosData.map(eachLogo => {
        const {id, url} = eachLogo
        return (
          <div className="slick-item" id="custom-story-style" key={id}>
            <img className="logo-image" src={url} alt="company logo" />
            <p className="story-user-name">name</p>
          </div>
        )
      })}
    </Slider>
  )

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default ReactSlick
