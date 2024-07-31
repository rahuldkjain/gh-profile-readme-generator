import React from "react"
import { isMediumUsernameValid } from "../utils/validation"
import { icons, skills as SKILLS, skillWebsites } from "../constants/skills"
import {
  githubStatsLinkGenerator,
  topLanguagesLinkGenerator,
  streakStatsLinkGenerator,
} from "../utils/link-generators"
import { DEFAULT_SOCIAL } from "../constants/defaults"

interface MarkdownTitleProps {
  prefix: string
  title: string
}
const Title: React.FC<MarkdownTitleProps> = props => {
  const { prefix, title } = props
  if (prefix && title) {
    return (
      <>
        {`<h1 align="center">${`${prefix} ${title}`}</h1>`}
        <br />
      </>
    )
  }
  return ""
}

interface MarkdownSubTitleProps {
  subtitle: string
}
const SubTitle: React.FC<MarkdownSubTitleProps> = props => {
  const { subtitle } = props
  if (subtitle) {
    return (
      <>
        {`<h3 align="center">${subtitle}</h3>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface MarkdownSectionTitleProps {
  label: string
}

const SectionTitle: React.FC<MarkdownSectionTitleProps> = props => {
  const { label } = props
  if (label) {
    return (
      <>
        {`<h3 align="left">${label}</h3>`}
        <br />
      </>
    )
  }
  return ""
}

interface MarkdownDisplayWorkProps {
  prefix: string
  project?: string
  link?: string
}
const DisplayWork: React.FC<MarkdownDisplayWorkProps> = props => {
  const { prefix, project, link } = props
  if (prefix && project) {
    if (link) {
      return (
        <>
          {`- ${prefix} [${project}](${link})`}
          <br />
          <br />
        </>
      )
    }
    return (
      <>
        {`- ${prefix} **${project}**`}
        <br />
        <br />
      </>
    )
  }
  if (prefix && link) {
    return (
      <>
        {`- ${prefix} [${link}](${link})`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface MDDisplaySocialProps {
  username?: string
  base: string
  icon: string
}
const DisplaySocial: React.FC<MDDisplaySocialProps> = props => {
  const { username, base, icon } = props
  if (username) {
    return (
      <>
        {`<a href="${base}/${username}" target="blank"><img align="center" src="${icon}" alt="${username}" height="30" width="40" /></a>`}
        <br />
      </>
    )
  }
  return ""
}

interface MDVisitorsBadgeProps {
  github: string
  show: boolean
  badgeOptions: {
    badgeLabel: string
    badgeColor: string
    badgeStyle: string
  }
}
const VisitorsBadge: React.FC<MDVisitorsBadgeProps> = props => {
  const { github, badgeOptions, show } = props
  const link = `https://komarev.com/ghpvc/?username=${github}&label=${badgeOptions.badgeLabel}&color=${badgeOptions.badgeColor}&style=${badgeOptions.badgeStyle}`
  if (show) {
    return (
      <>
        {`<p align="left"> <img src="${link}" alt="${github}" /> </p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface MDTwitterBadgeProps {
  twitter: string
  base: string
  show: boolean
}
const TwitterBadge: React.FC<MDTwitterBadgeProps> = props => {
  const { twitter, show, base } = props
  const link = `https://img.shields.io/twitter/follow/${twitter}?logo=twitter&style=for-the-badge`
  if (show) {
    return (
      <>
        {`<p align="left"> <a href="${base}/${twitter}" target="blank"><img src="${link}" alt="${twitter}" /></a> </p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface MDGithubProfileTrophyProps {
  github: string
  show: boolean
}
const GithubProfileTrophy: React.FC<MDGithubProfileTrophyProps> = props => {
  const { show, github } = props
  const link = `https://github-profile-trophy.vercel.app/?username=${github}`
  if (show) {
    return (
      <>
        {`<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="${link}" alt="${github}" /></a> </p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface MDGithubStatsProps {
  github: string
  options: {
    theme?: string
    titleColor?: string
    textColor?: string
    bgColor?: string
    hideBorder?: boolean
    cacheSeconds?: number
    locale?: string
  }
  show: boolean
}
const GitHubStats: React.FC<MDGithubStatsProps> = props => {
  const { show, github, options } = props
  if (show) {
    return (
      <>
        {`<p>&nbsp;<img align="center" src="${githubStatsLinkGenerator({
          github,
          options,
        })}" alt="${github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

const isSocial = (social: { [key: string]: any }) => {
  let status = false
  const SOCIAL_KEYS = Object.keys(DEFAULT_SOCIAL)
  Object.keys(social).forEach(key => {
    if (SOCIAL_KEYS.includes(key)) {
      status = true
    }
  })
  return status
}

interface MDSkills {
  skills: { [key: string]: any }
}
const DisplaySkills: React.FC<MDSkills> = props => {
  const { skills } = props
  const listChosenSkills: string[] = []
  SKILLS.forEach(skill => {
    if (skills[skill]) {
      listChosenSkills.push(
        `
        <a href="${skillWebsites[skill]}" target="_blank" rel="noreferrer">
          <img src="${icons[skill]}" alt="${skill}" width="40" height="40"/>
        </a>
        `
      )
    }
  })
  return listChosenSkills.length > 0 ? (
    <>
      <SectionTitle label="Languages and Tools:" />
      {`<p align="left">${listChosenSkills.join(" ")}</p>`}
      <br />
      <br />
    </>
  ) : (
    ""
  )
}

interface MDDisplayDynamicBlogsProps {
  show?: boolean
}
const DisplayDynamicBlogs: React.FC<MDDisplayDynamicBlogsProps> = props => {
  const { show } = props
  if (show) {
    return (
      <>
        ### Blogs posts
        <br />
        {"<!-- BLOG-POST-LIST:START -->"}
        <br />
        {"<!-- BLOG-POST-LIST:END -->"}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface DisplayTopLanguagesProps {
  github: string
  options: {
    theme?: string
    titleColor?: string
    textColor?: string
    bgColor?: string
    hideBorder?: boolean
    cacheSeconds?: number
    locale?: string
  }
  show?: boolean
  showStats?: boolean
}

const DisplayTopLanguages: React.FC<DisplayTopLanguagesProps> = props => {
  const { show, showStats, github, options } = props
  if (show) {
    if (!showStats) {
      return (
        <>
          {`<p><img align="center" src="${topLanguagesLinkGenerator({
            github,
            options,
          })}" alt="${github}" /></p>`}
          <br />
          <br />
        </>
      )
    }
    return (
      <>
        {`<p><img align="left" src="${topLanguagesLinkGenerator({
          github,
          options,
        })}" alt="${github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface MDDisplayStreaksStats {
  github: string
  options: {
    theme?: string
    titleColor?: string
    textColor?: string
    bgColor?: string
    hideBorder?: boolean
    cacheSeconds?: number
    locale?: string
  }
  show: boolean
}
const DisplayStreakStats: React.FC<MDDisplayStreaksStats> = props => {
  const { show, github, options } = props
  if (show) {
    return (
      <>
        {`<p><img align="center" src="${streakStatsLinkGenerator({
          github,
          options,
        })}" alt="${github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

interface DisplaySupportProps {
  support: Support
}
const DisplaySupport: React.FC<DisplaySupportProps> = props => {
  const { support } = props
  let viewSupport = false
  Object.keys(support).forEach((key: string) => {
    /*@ts-ignore*/
    if (support[key]) {
      viewSupport = true
    }
  })
  return viewSupport ? (
    <div>
      <SectionTitle label="Support:" />
      {"<p>"}
      {support.buyMeACoffee &&
        `<a href="https://www.buymeacoffee.com/${support.buyMeACoffee}">
      <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${support.buyMeACoffee}" /></a>`}
      {support.buyMeAKofi &&
        `<a href="https://ko-fi.com/${support.buyMeAKofi}">
      <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="${support.buyMeAKofi}" /></a>`}
      {"</p><br><br>"}
      <br />
      <br />
    </div>
  ) : (
    ""
  )
}

interface Prefix {
  title: string
  currentWork: string
  currentLearn: string
  collaborateOn: string
  helpWith: string
  ama: string
  contact: string
  resume: string
  funFact: string
  portfolio: string
  blog: string
}

interface GithubStatsOptions {
  theme: string
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds?: number
  locale: string
}

interface TopLanguagesOptions {
  theme: string
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds?: number
  locale: string
}

interface StreakStatsOptions {
  theme: string
}

interface Data {
  title: string
  subtitle: string
  currentWork: string
  currentLearn: string
  collaborateOn: string
  helpWith: string
  ama: string
  contact: string
  funFact: string
  twitterBadge: boolean
  visitorsBadge: boolean
  badgeStyle: string
  badgeColor: string
  badgeLabel: string
  githubProfileTrophy: boolean
  githubStats: boolean
  githubStatsOptions: GithubStatsOptions
  topLanguages: boolean
  topLanguagesOptions: TopLanguagesOptions
  streakStats: boolean
  streakStatsOptions: StreakStatsOptions
  devDynamicBlogs: boolean
  mediumDynamicBlogs: boolean
  rssDynamicBlogs: boolean
}
interface Link {
  currentWork?: string
  collaborateOn?: string
  helpWith?: string
  portfolio?: string
  blog?: string
  resume?: string
}

interface Social {
  github: string
  twitter: string
  linkedin?: string
  codepen?: string
  dev?: string
  stackoverflow?: string
  codesandbox?: string
  kaggle?: string
  fb?: string
  instagram?: string
  dribbble?: string
  behance?: string
  hashnode?: string
  medium?: string
  youtube?: string
  codechef?: string
  hackerrank?: string
  codeforces?: string
  leetcode?: string
  hackerearth?: string
  geeks_for_geeks?: string
  topcoder?: string
  discord?: string
  rssurl?: string
}
interface Skills {}
interface Support {
  buyMeACoffee: string
  buyMeAKofi: string
}

interface MarkdownProps {
  prefix: Prefix
  data: Data
  link: Link
  social: Social
  skills: Skills
  support: Support
}

const Markdown: React.FC<MarkdownProps> = props => {
  const { prefix, data, link, social, skills, support } = props
  const iconBaseUrl =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/"
  return (
    <div id="markdown-content" className="break-words">
      <>
        <Title prefix={prefix.title} title={data.title} />
      </>
      <>
        <SubTitle subtitle={data.subtitle} />
      </>
      <>
        <VisitorsBadge
          show={data.visitorsBadge}
          github={social.github}
          badgeOptions={{
            badgeLabel: encodeURI(data.badgeLabel),
            badgeColor: data.badgeColor,
            badgeStyle: data.badgeStyle,
          }}
        />
      </>
      <>
        <GithubProfileTrophy
          show={data.githubProfileTrophy}
          github={social.github}
        />
        <TwitterBadge
          base="https://twitter.com"
          show={data.twitterBadge}
          twitter={social.twitter}
        />
      </>
      <>
        <DisplayWork
          prefix={prefix.currentWork}
          project={data.currentWork}
          link={link.currentWork}
        />
      </>
      <>
        <DisplayWork prefix={prefix.currentLearn} project={data.currentLearn} />
      </>
      <>
        <DisplayWork
          prefix={prefix.collaborateOn}
          project={data.collaborateOn}
          link={link.collaborateOn}
        />
      </>
      <>
        <DisplayWork
          prefix={prefix.helpWith}
          project={data.helpWith}
          link={link.helpWith}
        />
      </>
      <>
        <DisplayWork prefix={prefix.portfolio} link={link.portfolio} />
      </>
      <>
        <DisplayWork prefix={prefix.blog} link={link.blog} />
      </>
      <>
        <DisplayWork prefix={prefix.ama} project={data.ama} />
      </>
      <>
        <DisplayWork prefix={prefix.contact} project={data.contact} />
      </>
      <>
        <DisplayWork prefix={prefix.resume} link={link.resume} />
      </>
      <>
        <DisplayWork prefix={prefix.funFact} project={data.funFact} />
      </>
      <>
        <DisplayDynamicBlogs
          show={
            (data.devDynamicBlogs && social.dev) ||
            (data.rssDynamicBlogs && social.rssurl) ||
            (data.mediumDynamicBlogs &&
              social.medium &&
              isMediumUsernameValid(social.medium))
              ? true
              : false
          }
        />
      </>
      {isSocial(social) ? (
        <>
          <SectionTitle label="Connect with me:" />
          {'<p align="left">'}
        </>
      ) : (
        ""
      )}
      <br />
      <>
        <DisplaySocial
          base="https://codepen.io"
          icon={`${iconBaseUrl}codepen.svg`}
          username={social.codepen}
        />
      </>
      <>
        <DisplaySocial
          base="https://dev.to"
          icon={`${iconBaseUrl}devto.svg`}
          username={social.dev}
        />
      </>
      <>
        <DisplaySocial
          base="https://twitter.com"
          icon={`${iconBaseUrl}twitter.svg`}
          username={social.twitter}
        />
      </>
      <>
        <DisplaySocial
          base="https://linkedin.com/in"
          icon={`${iconBaseUrl}linked-in-alt.svg`}
          username={social.linkedin}
        />
      </>
      <>
        <DisplaySocial
          base="https://stackoverflow.com/users"
          icon={`${iconBaseUrl}stack-overflow.svg`}
          username={social.stackoverflow}
        />
      </>
      <>
        <DisplaySocial
          base="https://codesandbox.com"
          icon={`${iconBaseUrl}codesandbox.svg`}
          username={social.codesandbox}
        />
      </>
      <>
        <DisplaySocial
          base="https://kaggle.com"
          icon={`${iconBaseUrl}kaggle.svg`}
          username={social.kaggle}
        />
      </>
      <>
        <DisplaySocial
          base="https://fb.com"
          icon={`${iconBaseUrl}facebook.svg`}
          username={social.fb}
        />
      </>
      <>
        <DisplaySocial
          base="https://instagram.com"
          icon={`${iconBaseUrl}instagram.svg`}
          username={social.instagram}
        />
      </>
      <>
        <DisplaySocial
          base="https://dribbble.com"
          icon={`${iconBaseUrl}dribbble.svg`}
          username={social.dribbble}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.behance.net"
          icon={`${iconBaseUrl}behance.svg`}
          username={social.behance}
        />
      </>
      <>
        <DisplaySocial
          base="https://hashnode.com"
          icon={`${iconBaseUrl}hashnode.svg`}
          username={social.hashnode}
        />
      </>
      <>
        <DisplaySocial
          base="https://medium.com"
          icon={`${iconBaseUrl}medium.svg`}
          username={social.medium}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.youtube.com/c"
          icon={`${iconBaseUrl}youtube.svg`}
          username={social.youtube}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.codechef.com/users"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
          username={social.codechef}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerrank.com"
          icon={`${iconBaseUrl}hackerrank.svg`}
          username={social.hackerrank}
        />
      </>
      <>
        <DisplaySocial
          base="https://codeforces.com/profile"
          icon={`${iconBaseUrl}codeforces.svg`}
          username={social.codeforces}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.leetcode.com"
          icon={`${iconBaseUrl}leet-code.svg`}
          username={social.leetcode}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerearth.com"
          icon={`${iconBaseUrl}hackerearth.svg`}
          username={social.hackerearth}
        />
      </>
      <>
        <DisplaySocial
          base="https://auth.geeksforgeeks.org/user"
          icon={`${iconBaseUrl}geeks-for-geeks.svg`}
          username={social.geeks_for_geeks}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.topcoder.com/members"
          icon={`${iconBaseUrl}topcoder.svg`}
          username={social.topcoder}
        />
      </>
      <>
        <DisplaySocial
          base="https://discord.gg"
          icon={`${iconBaseUrl}discord.svg`}
          username={social.discord}
        />
      </>
      <>
        <DisplaySocial
          base=""
          icon={`${iconBaseUrl}rss.svg`}
          username={social.rssurl}
        />
      </>
      {isSocial(social) ? (
        <>
          {"</p>"}
          <br />
          <br />
        </>
      ) : (
        ""
      )}
      <>
        <DisplaySkills skills={skills} />
      </>
      <>
        <DisplaySupport support={support} />
      </>
      <>
        <DisplayTopLanguages
          show={data.topLanguages}
          showStats={data.githubStats}
          github={social.github}
          options={data.topLanguagesOptions}
        />
      </>
      <>
        <GitHubStats
          show={data.githubStats}
          github={social.github}
          options={data.githubStatsOptions}
        />
      </>
      <>
        <DisplayStreakStats
          show={data.streakStats}
          github={social.github}
          options={data.streakStatsOptions}
        />
      </>
    </div>
  )
}
export default Markdown
