import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react"
import gsap from "gsap"
import axios from "axios"
import { Link } from "gatsby"
import { act } from "react-dom/test-utils"
import links from "../constants/page-links"
import logo from "../images/mdg.png"

const Header = props => {
  const { heading } = props
  const [stats, setstats] = useState({
    starsCount: 0,
    forksCount: 0,
  })
  // State to control the visibility of the V2 announcement banner
  const [showBanner, setShowBanner] = useState(true)

  const shouldRequestStats = () => {
    const isFirstRequest = stats.starsCount === 0
    const isVisible = window.document.visibilityState === "visible"
    const hasFocus = window.document.hasFocus()
    return isFirstRequest || (isVisible && hasFocus)
  }

  const fetchData = async () => {
    if (shouldRequestStats()) {
      const response = await axios.get(
        "https://api.github.com/repos/rahuldkjain/github-profile-readme-generator"
      )

      const {
        stargazers_count: stargazersCount,
        forks_count: forksCount,
      } = response.data

      act(() =>
        setstats({
          starsCount: stargazersCount,
          forksCount,
        })
      )
    }
  }
  useEffect(() => {
    fetchData()
    setInterval(fetchData, 60000)

    gsap.set(".star, .fork", {
      transformOrigin: "center",
    })
    gsap.to(".star, .fork", {
      rotateZ: "360",
      duration: 2,
      ease: "elastic.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <>
      {/* V2 Announcement Banner - Upgraded version with better UX */}
      {showBanner && (
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3.5 px-4 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center flex-1 min-w-0">
              <span className="text-2xl mr-3">✨</span>
              <div className="text-sm sm:text-base">
                <strong className="font-bold text-white">
                  V2 Available Now!
                </strong>
                <span className="hidden sm:inline ml-2 opacity-95">
                  Redesigned UI · More features · Faster performance
                </span>
                <span className="sm:hidden ml-1 opacity-95">
                  Try the new version
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://rahuldkjain.github.io/github-profile-readme-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-700 px-5 py-2 rounded-lg text-sm font-bold hover:bg-purple-50 hover:shadow-md transform hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                Upgrade to V2 →
              </a>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white hover:text-gray-200 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all duration-200"
                aria-label="Dismiss banner"
                type="button"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="shadow flex items-center justify-center flex-col mb-2 py-2">
        <Link to={links.home}>
          <h1 className="text-base font-bold font-title sm:text-2xl text-blue-800 flex justify-center items-center flex-col">
            <img
              src={logo}
              className="w-12 h-12"
              alt="github profile markdown generator logo"
            />
            <div>{heading}</div>
          </h1>
        </Link>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator"
            aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub"
            target="blank"
            className="mr-2"
          >
            <div className="text-xxs sm:text-sm border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 px-2">
              <StarIcon size={16} id="star-icon" className="px-1 w-6 star" />
              Star this repo
              <span className="github-count px-1 sm:px-2">
                {stats.starsCount}
              </span>
            </div>
          </a>
          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
            aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub"
            target="blank"
          >
            <div className="text-xxs sm:text-sm border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 px-2">
              <RepoForkedIcon
                size={16}
                id="fork-icon"
                className="px-1 w-6 fork"
              />
              Fork on GitHub
              <span className="github-count px-1 sm:px-2">
                {stats.forksCount}
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
Header.propTypes = {
  heading: PropTypes.string.isRequired,
}
