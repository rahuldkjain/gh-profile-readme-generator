import React from "react"
import {
  githubStatsLinkGenerator,
  topLanguagesLinkGenerator,
  streakStatsLinkGenerator,
} from "../utils/link-generators"

interface TitlePreviewProps {
  prefix: string
  title: string
}

export const TitlePreview: React.FC<TitlePreviewProps> = ({
  prefix,
  title,
}) => {
  if (prefix && title) {
    return (
      <h1 className="text-center text-xl font-bold">{`${prefix} ${title}`}</h1>
    )
  }
  return null
}

interface SubTitlePreviewProps {
  subtitle: string
}

export const SubTitlePreview: React.FC<SubTitlePreviewProps> = ({
  subtitle,
}) => {
  if (subtitle) {
    return <h3 className="text-center font-medium">{subtitle}</h3>
  }
  return null
}

interface SectionTitleProps {
  visible?: boolean
  label: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  visible = false,
  label,
}) => {
  if (!visible) return null
  if (label) {
    return <h3 className="w-full text-lg sm:text-xl">{label}</h3>
  }
  return null
}

interface DisplayWorkProps {
  prefix?: string
  project?: string
  link?: string
}

export const DisplayWork: React.FC<DisplayWorkProps> = ({
  prefix = "",
  project = "",
  link = "",
}) => {
  if (prefix && project) {
    if (link) {
      return (
        <div className="my-2">
          {`${prefix} `}
          <a href={link} className="no-underline text-blue-700" target="blank">
            {project}
          </a>
        </div>
      )
    }
    return (
      <div className="my-2">
        {`${prefix} `}
        <b>{project}</b>
      </div>
    )
  }
  if (prefix && link) {
    return (
      <div className="my-2">
        {`${prefix} `}
        <a href={link} className="no-underline text-blue-700" target="blank">
          {link}
        </a>
      </div>
    )
  }
  return null
}

interface WorkPreviewProps {
  work: {
    prefix: {
      currentWork: string
      currentLearn: string
      helpWith: string
      collaborateOn: string
      ama: string
      portfolio: string
      blog: string
      resume: string
      contact: string
      funFact: string
    }
    data: {
      currentWork: string
      currentLearn: string
      helpWith: string
      collaborateOn: string
      ama: string
      contact: string
      funFact: string
    }
    link: {
      currentWork: string
      helpWith: string
      portfolio: string
      blog: string
      resume: string
      collaborateOn: string
    }
  }
}

export const WorkPreview: React.FC<WorkPreviewProps> = ({ work }) => {
  const { prefix, data, link } = work
  return (
    <>
      <DisplayWork
        prefix={prefix.currentWork}
        project={data.currentWork}
        link={link.currentWork}
      />
      <DisplayWork prefix={prefix.currentLearn} project={data.currentLearn} />
      <DisplayWork
        prefix={prefix.helpWith}
        project={data.helpWith}
        link={link.helpWith}
      />
      <DisplayWork
        prefix={prefix.collaborateOn}
        project={data.collaborateOn}
        link={link.collaborateOn}
      />
      <DisplayWork prefix={prefix.ama} project={data.ama} />
      <DisplayWork prefix={prefix.portfolio} link={link.portfolio} />
      <DisplayWork prefix={prefix.blog} link={link.blog} />
      <DisplayWork prefix={prefix.resume} link={link.resume} />
      <DisplayWork prefix={prefix.contact} project={data.contact} />
      <DisplayWork prefix={prefix.funFact} project={data.funFact} />
    </>
  )
}

interface DisplaySocialProps {
  username?: string
  base?: string
  icon?: string
}

export const DisplaySocial: React.FC<DisplaySocialProps> = ({
  username = "",
  base = "",
  icon = "",
}) => {
  if (username) {
    return (
      <a
        className="no-underline text-blue-700 m-2"
        href={`${base}/${username}`}
        target="blank"
      >
        <img className="w-6 h-6" src={icon} alt="username" />
      </a>
    )
  }
  return null
}

interface SocialPreviewProps {
  social: Record<string, string>
}

export const SocialPreview: React.FC<SocialPreviewProps> = ({ social }) => {
  let viewSocial = false
  const iconBaseUrl =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/"
  Object.keys(social).forEach(key => {
    if (social[key] && key !== "github") viewSocial = true
  })
  return (
    <div className="flex justify-start items-end flex-wrap">
      <SectionTitle label="Connect with me:" visible={viewSocial} />
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
    </div>
  )
}

interface BadgeOptions {
  badgeLabel: string
  badgeColor: string
  badgeStyle: string
}

interface VisitorsBadgePreviewProps {
  github?: string
  show?: boolean
  options: BadgeOptions
}

export const VisitorsBadgePreview: React.FC<VisitorsBadgePreviewProps> = ({
  github = "",
  show = false,
  options,
}) => {
  const { badgeLabel, badgeColor, badgeStyle } = options
  if (show && github) {
    const visitorBadgeUrl = `https://komarev.com/ghpvc/?username=${github}&label=${badgeLabel}&color=${badgeColor}&style=${badgeStyle}`
    return <img className="m-1" src={visitorBadgeUrl} alt="profile-views" />
  }
  return null
}

interface GithubProfileTrophyPreviewProps {
  github?: string
  show?: boolean
  margin?: string
}

export const GithubProfileTrophyPreview: React.FC<
  GithubProfileTrophyPreviewProps
> = ({ github = "", show = false, margin = "" }) => {
  if (show && github) {
    const profileTrophyUrl = `https://github-profile-trophy.vercel.app/?username=${github}`
    return (
      <img
        className={`m-1 ${margin}`}
        src={profileTrophyUrl}
        alt="profile-trophy"
      />
    )
  }
  return null
}

interface GithubStatsCardPreviewProps {
  github?: string
  show?: boolean
  hideTitle?: boolean
  hideRank?: boolean
  hideBorder?: boolean
  showIcons?: boolean
  includeAllCommits?: boolean
  countPrivateCommits?: boolean
  lineHeight?: number
  theme?: string
  margin?: string
}

export const GithubStatsCardPreview: React.FC<GithubStatsCardPreviewProps> = ({
  github = "",
  show = false,
  hideTitle = false,
  hideRank = false,
  hideBorder = false,
  showIcons = true,
  includeAllCommits = false,
  countPrivateCommits = false,
  lineHeight = 10,
  theme = "default",
}) => {
  if (show && github) {
    const githubStatsCardUrl = githubStatsLinkGenerator({
      github,
      hideTitle,
      hideRank,
      hideBorder,
      showIcons,
      includeAllCommits,
      countPrivateCommits,
      lineHeight,
      theme,
    })
    return (
      <img className="m-1" src={githubStatsCardUrl} alt="github-stats-card" />
    )
  }
  return null
}

interface TopLanguagesCardPreviewProps {
  github?: string
  show?: boolean
  hideTitle?: boolean
  hideBorder?: boolean
  layout?: string
  cardWidth?: number
  theme?: string
}

export const TopLanguagesCardPreview: React.FC<
  TopLanguagesCardPreviewProps
> = ({
  github = "",
  show = false,
  hideTitle = false,
  hideBorder = false,
  layout = "default",
  cardWidth = 500,
  theme = "default",
}) => {
  if (show && github) {
    const topLanguagesCardUrl = topLanguagesLinkGenerator({
      github,
      hideTitle,
      hideBorder,
      layout,
      cardWidth,
      theme,
    })
    return (
      <img className="m-1" src={topLanguagesCardUrl} alt="top-languages-card" />
    )
  }
  return null
}

interface StreakStatsCardPreviewProps {
  github?: string
  show?: boolean
  hideBorder?: boolean
  locale?: string
  theme?: string
}

export const StreakStatsCardPreview: React.FC<StreakStatsCardPreviewProps> = ({
  github = "",
  show = false,
  hideBorder = false,
  locale = "en",
  theme = "default",
}) => {
  if (show && github) {
    const streakStatsCardUrl = streakStatsLinkGenerator({
      github,
      hideBorder,
      locale,
      theme,
    })
    return (
      <img className="m-1" src={streakStatsCardUrl} alt="streak-stats-card" />
    )
  }
  return null
}

interface MarkdownPreviewProps {
  prefix: string
  title: string
  subtitle: string
  work: WorkPreviewProps["work"]
  social: SocialPreviewProps["social"]
  visitorsBadgeOptions: VisitorsBadgePreviewProps
  githubStatsCardOptions: GithubStatsCardPreviewProps
  topLanguagesCardOptions: TopLanguagesCardPreviewProps
  streakStatsCardOptions: StreakStatsCardPreviewProps
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
  prefix,
  title,
  subtitle,
  work,
  social,
  visitorsBadgeOptions,
  githubStatsCardOptions,
  topLanguagesCardOptions,
  streakStatsCardOptions,
}) => {
  return (
    <div className="p-4 w-full">
      <TitlePreview prefix={prefix} title={title} />
      <SubTitlePreview subtitle={subtitle} />
      <WorkPreview work={work} />
      <SocialPreview social={social} />
      <VisitorsBadgePreview
        github={social.github}
        show={visitorsBadgeOptions.show}
        options={visitorsBadgeOptions.options}
      />
      <GithubProfileTrophyPreview
        github={social.github}
        show={githubStatsCardOptions.show}
        margin={githubStatsCardOptions.margin}
      />
      <GithubStatsCardPreview
        github={social.github}
        show={githubStatsCardOptions.show}
        hideTitle={githubStatsCardOptions.hideTitle}
        hideRank={githubStatsCardOptions.hideRank}
        hideBorder={githubStatsCardOptions.hideBorder}
        showIcons={githubStatsCardOptions.showIcons}
        includeAllCommits={githubStatsCardOptions.includeAllCommits}
        countPrivateCommits={githubStatsCardOptions.countPrivateCommits}
        lineHeight={githubStatsCardOptions.lineHeight}
        theme={githubStatsCardOptions.theme}
      />
      <TopLanguagesCardPreview
        github={social.github}
        show={topLanguagesCardOptions.show}
        hideTitle={topLanguagesCardOptions.hideTitle}
        hideBorder={topLanguagesCardOptions.hideBorder}
        layout={topLanguagesCardOptions.layout}
        cardWidth={topLanguagesCardOptions.cardWidth}
        theme={topLanguagesCardOptions.theme}
      />
      <StreakStatsCardPreview
        github={social.github}
        show={streakStatsCardOptions.show}
        hideBorder={streakStatsCardOptions.hideBorder}
        locale={streakStatsCardOptions.locale}
        theme={streakStatsCardOptions.theme}
      />
    </div>
  )
}

export default MarkdownPreview
