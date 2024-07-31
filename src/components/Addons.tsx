import React, { useState, useEffect } from "react"
import { ToolsIcon, XCircleIcon } from "@primer/octicons-react"
import { isMediumUsernameValid } from "@utils/validation"
import PAGE_LINKS from "@constants/page-links"

interface AddonsItemProps {
  inputId: string
  inputChecked: boolean
  onInputChange: () => void
  Options?: React.ReactElement
  children: React.ReactNode
}

const AddonsItem: React.FC<AddonsItemProps> = ({
  inputId,
  inputChecked,
  onInputChange,
  Options,
  children,
}) => {
  const [open, setOpen] = useState(false)
  const Icon = open ? XCircleIcon : ToolsIcon

  return (
    <>
      <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
        <label htmlFor={inputId} className="checkbox-label flex items-center">
          <input
            id={inputId}
            type="checkbox"
            className="checkbox-label__input"
            checked={inputChecked}
            onChange={onInputChange}
          />
          <span className="checkbox-label__control" />
          <span className="pl-4">{children}</span>
        </label>
        {Options && (
          <button
            type="button"
            id={`${inputId}-open-btn`}
            onClick={() => setOpen(!open)}
            className="flex ml-3 focus:bg-gray-400"
            style={{ outline: "none" }}
          >
            <Icon className="transform scale-100 md:scale-125" />
          </button>
        )}
      </div>
      {Options && open && Options}
    </>
  )
}

interface CustomizeOptionsProps {
  title: string
  CustomizationOptions: React.ReactElement
}

const CustomizeOptions: React.FC<CustomizeOptionsProps> = ({
  title,
  CustomizationOptions,
}) => (
  <div
    className="border-2 border-solid border-gray-900 bg-gray-100 p-2 ml-8"
    style={{ maxWidth: "21rem" }}
  >
    <header className="text-base sm:text-lg">{title}</header>
    <hr className="border-gray-500" />
    <div className="text-sm sm:text-lg flex flex-col mt-2 ml-0 md:ml-4">
      {CustomizationOptions}
    </div>
  </div>
)

interface BadgeOptions {
  badgeStyle: string
  badgeColor: string
  badgeLabel: string
}

interface CustomizeBadgeProps {
  githubName: string
  badgeOptions: BadgeOptions
  onBadgeUpdate: (option: keyof BadgeOptions, value: string) => void
}

const CustomizeBadge: React.FC<CustomizeBadgeProps> = ({
  githubName,
  badgeOptions,
  onBadgeUpdate,
}) => (
  <>
    <label htmlFor="badge-style">
      Style:&nbsp;
      <select
        id="badge-style"
        onChange={e => onBadgeUpdate("badgeStyle", e.target.value)}
        value={badgeOptions.badgeStyle}
      >
        <option value="flat">Flat</option>
        <option value="flat-square">Flat Square</option>
        <option value="plastic">Plastic</option>
      </select>
    </label>

    {/* Rest of the CustomizeBadge component... */}
  </>
)

interface GithubStatsOptions {
  theme: string
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds: number
  locale: string
}

interface CustomizeGithubStatsBaseProps {
  prefix: string
  options: GithubStatsOptions
  onUpdate: (
    option: keyof GithubStatsOptions,
    value: string | boolean | number
  ) => void
}

const CustomizeGithubStatsBase: React.FC<CustomizeGithubStatsBaseProps> = ({
  prefix,
  options,
  onUpdate,
}) => (
  <>
    <label htmlFor={`${prefix}-theme`}>
      Theme:&nbsp;
      <select
        id={`${prefix}-theme`}
        onChange={({ target: { value } }) => onUpdate("theme", value)}
        defaultValue={options.theme}
      >
        {/* Theme options... */}
      </select>
    </label>
    {/* Rest of the CustomizeGithubStatsBase component... */}
  </>
)

interface StreakStatsOptions {
  theme: string
}

interface CustomizeStreakStatsProps {
  prefix: string
  options: StreakStatsOptions
  onUpdate: (option: keyof StreakStatsOptions, value: string) => void
}

const CustomizeStreakStats: React.FC<CustomizeStreakStatsProps> = ({
  prefix,
  options,
  onUpdate,
}) => (
  <>
    <label htmlFor={`${prefix}-theme`}>
      Theme:&nbsp;
      <select
        id={`${prefix}-theme`}
        onChange={({ target: { value } }) => onUpdate("theme", value)}
        defaultValue={options.theme}
      >
        <option value="default">default</option>
        <option value="dark">dark</option>
        <option value="highcontrast">highcontrast</option>
      </select>
    </label>
  </>
)

interface AddonsProps {
  data: {
    visitorsBadge: boolean
    githubProfileTrophy: boolean
    githubStats: boolean
    topLanguages: boolean
    streakStats: boolean
    twitterBadge: boolean
    devDynamicBlogs: boolean
    mediumDynamicBlogs: boolean
    rssDynamicBlogs: boolean
    badgeStyle: string
    badgeColor: string
    badgeLabel: string
    githubStatsOptions: GithubStatsOptions
    topLanguagesOptions: GithubStatsOptions
    streakStatsOptions: StreakStatsOptions
  }
  social: {
    github: string
    dev: string
    medium: string
    rssurl: string
  }
  handleDataChange: (option: string, e: { target: { value: any } }) => void
  handleCheckChange: (option: string) => void
}

const Addons: React.FC<AddonsProps> = ({
  data,
  social,
  handleDataChange,
  handleCheckChange,
}) => {
  const [debounce, setDebounce] = useState<NodeJS.Timeout | undefined>(
    undefined
  )
  const [badgeOptions, setBadgeOptions] = useState<BadgeOptions>({
    badgeStyle: data.badgeStyle,
    badgeColor: data.badgeColor,
    badgeLabel: data.badgeLabel,
  })

  useEffect(() => {
    setBadgeOptions({
      badgeStyle: data.badgeStyle,
      badgeColor: data.badgeColor,
      badgeLabel: data.badgeLabel,
    })
  }, [data.badgeStyle, data.badgeColor, data.badgeLabel])

  const [githubStatsOptions, setGithubStatsOptions] =
    useState<GithubStatsOptions>({
      ...data.githubStatsOptions,
    })

  useEffect(() => {
    setGithubStatsOptions({
      ...data.githubStatsOptions,
    })
  }, [data.githubStatsOptions])

  const [topLanguagesOptions, setTopLanguagesOptions] =
    useState<GithubStatsOptions>({
      ...data.topLanguagesOptions,
    })

  useEffect(() => {
    setTopLanguagesOptions({
      ...data.topLanguagesOptions,
    })
  }, [data.topLanguagesOptions])

  const [streakStatsOptions, setStreakStatsOptions] =
    useState<StreakStatsOptions>({
      ...data.streakStatsOptions,
    })

  useEffect(() => {
    setStreakStatsOptions({
      ...data.streakStatsOptions,
    })
  }, [data.streakStatsOptions])

  const blogPostPorkflow = () => {
    // Implementation...
  }

  const onBadgeUpdate = (option: keyof BadgeOptions, value: string) => {
    // Implementation...
  }

  const onStatsUpdate = (
    option: keyof GithubStatsOptions,
    value: string | boolean | number
  ) => {
    // Implementation...
  }

  const onTopLangUpdate = (
    option: keyof GithubStatsOptions,
    value: string | boolean | number
  ) => {
    // Implementation...
  }

  const onStreakStatsUpdate = (
    option: keyof StreakStatsOptions,
    value: string
  ) => {
    // Implementation...
  }

  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Add-ons
      </div>
      <AddonsItem
        inputId="visitors-count"
        inputChecked={data.visitorsBadge}
        onInputChange={() => handleCheckChange("visitorsBadge")}
        Options={
          <CustomizeOptions
            title="Customize Badge"
            CustomizationOptions={
              <CustomizeBadge
                githubName={social.github}
                badgeOptions={badgeOptions}
                onBadgeUpdate={onBadgeUpdate}
              />
            }
          />
        }
      >
        display visitors count badge
      </AddonsItem>
      <AddonsItem
        inputId="github-profile-trophy"
        inputChecked={data.githubProfileTrophy}
        onInputChange={() => handleCheckChange("githubProfileTrophy")}
      >
        display github trophy
      </AddonsItem>
      <AddonsItem
        inputId="github-stats"
        inputChecked={data.githubStats}
        onInputChange={() => handleCheckChange("githubStats")}
        Options={
          <CustomizeOptions
            title="Customize Github Stats Card"
            CustomizationOptions={
              <CustomizeGithubStatsBase
                prefix="stats"
                options={githubStatsOptions}
                onUpdate={onStatsUpdate}
              />
            }
          />
        }
      >
        display github profile stats card
      </AddonsItem>
      <AddonsItem
        inputId="top-languages"
        inputChecked={data.topLanguages}
        onInputChange={() => handleCheckChange("topLanguages")}
        Options={
          <CustomizeOptions
            title="Customize Top Skills Card"
            CustomizationOptions={
              <CustomizeGithubStatsBase
                prefix="top-lang"
                options={topLanguagesOptions}
                onUpdate={onTopLangUpdate}
              />
            }
          />
        }
      >
        display top skills
      </AddonsItem>
      <AddonsItem
        inputId="streak-stats"
        inputChecked={data.streakStats}
        onInputChange={() => handleCheckChange("streakStats")}
        Options={
          <CustomizeOptions
            title="Customize Streak Stats Card"
            CustomizationOptions={
              <CustomizeStreakStats
                prefix="streak-stats"
                options={streakStatsOptions}
                onUpdate={onStreakStatsUpdate}
              />
            }
          />
        }
      >
        display github streak stats
      </AddonsItem>
      <AddonsItem
        inputId="twitter-badge"
        inputChecked={data.twitterBadge}
        onInputChange={() => handleCheckChange("twitterBadge")}
      >
        display twitter badge
      </AddonsItem>
      <AddonsItem
        inputId="dev-dynamic-blogs"
        inputChecked={data.devDynamicBlogs}
        onInputChange={() => handleCheckChange("devDynamicBlogs")}
      >
        display latest dev.to blogs dynamically (GitHub Action)
      </AddonsItem>
      <AddonsItem
        inputId="medium-dynamic-blogs"
        inputChecked={data.mediumDynamicBlogs}
        onInputChange={() => handleCheckChange("mediumDynamicBlogs")}
      >
        display latest medium blogs dynamically (GitHub Action)
      </AddonsItem>
      <AddonsItem
        inputId="rss-dynamic-blogs"
        inputChecked={data.rssDynamicBlogs}
        onInputChange={() => handleCheckChange("rssDynamicBlogs")}
      >
        display latest blogs from your personal blog dynamically (GitHub Action)
      </AddonsItem>

      {(data.devDynamicBlogs && social.dev) ||
      (data.rssDynamicBlogs && social.rssurl) ||
      (data.mediumDynamicBlogs &&
        social.medium &&
        isMediumUsernameValid(social.medium)) ? (
        <div className="workflow">
          <div>
            download
            <span
              id="blog-post-worklow-span"
              onClick={blogPostPorkflow}
              onKeyDown={e => e.keyCode === 13 && blogPostPorkflow()}
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer", color: "#002ead" }}
            >
              {" "}
              blog-post-workflow.yml
            </span>{" "}
            file(learn
            <a
              href={PAGE_LINKS.addons}
              target="blank"
              style={{ color: "#002ead" }}
            >
              {" "}
              how to setup
            </a>
            )
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Addons
