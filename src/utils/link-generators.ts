interface Options {
  theme?: string
  titleColor?: string
  textColor?: string
  bgColor?: string
  hideBorder?: boolean
  cacheSeconds?: number
  locale?: string
}

interface GitHubOptions {
  github: string
  options?: Options
  hideBorder?: boolean
  locale?: string
  theme?: string
  hideTitle?: boolean
  layout?: string
  cardWidth?: number
  hideRank?: boolean
  showIcons?: boolean
  includeAllCommits?: boolean
  countPrivateCommits?: boolean
  lineHeight?: number
}

const githubStatsStylingQueryString = (options: Options): string => {
  const params: Record<string, string | boolean | number> = {
    show_icons: true,
    ...(options.theme && options.theme !== "none" && { theme: options.theme }),
    ...(options.titleColor && { title_color: options.titleColor }),
    ...(options.textColor && { text_color: options.textColor }),
    ...(options.bgColor && { bg_color: options.bgColor }),
    ...(options.hideBorder && { hide_border: options.hideBorder }),
    ...(options.cacheSeconds && { cache_seconds: options.cacheSeconds }),
    ...(options.locale && { locale: options.locale }),
  }

  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
  return queryString
}

const streakStatsStylingQueryString = (options: Options): string => {
  const params: Record<string, string> = {
    ...(options.theme && options.theme !== "none" && { theme: options.theme }),
  }

  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
  return queryString
}

export const githubStatsLinkGenerator = ({
  github,
  options,
}: GitHubOptions): string =>
  `https://github-readme-stats.vercel.app/api?username=${github}${
    options ? "&" + githubStatsStylingQueryString(options) : ""
  }}`

export const topLanguagesLinkGenerator = ({
  github,
  options,
}: GitHubOptions): string =>
  `https://github-readme-stats.vercel.app/api/top-langs?username=${github}${
    options ? "&" + githubStatsStylingQueryString(options) : ""
  }&layout=compact`

export const streakStatsLinkGenerator = ({
  github,
  options,
}: GitHubOptions): string =>
  `https://github-readme-streak-stats.herokuapp.com/?user=${github}${
    options ? "&" + streakStatsStylingQueryString(options) : ""
  }`
