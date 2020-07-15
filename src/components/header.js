import { Link } from "gatsby"
import React from "react"
import {StarIcon, RepoForkedIcon} from '@primer/octicons-react'

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="heading">
        <div onClick={() => window.location.reload(false)}>
          {props.heading}
        </div>
      </h1>
      <div className="github">
        <a href="https://github.com/rahuldkjain/github-profile-readme-generator" 
        aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub" target="blank">
          <div className="github-button"> <StarIcon size={16} /> Star this repo </div>
        </a>
        <a href="https://github.com/rahuldkjain/github-profile-readme-generator/fork" 
        aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub" target="blank">
          <div className="github-button"><RepoForkedIcon size={16} /> Fork on Github </div>
        </a>
      </div>
    </div>
  )
}

export default Header
