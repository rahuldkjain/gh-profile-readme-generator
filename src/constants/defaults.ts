// Define types for the structure of your objects
export interface GithubStatsOptions {
  theme: string
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds: number | null
  locale: string
}

export interface TopLanguagesOptions {
  theme: string
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds: number | null
  locale: string
}

export interface StreakStatsOptions {
  theme: string
}

export interface DefaultDataProps {
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

export interface DefaultPrefixProps {
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

export interface DefaultLinkProps {
  currentWork: string
  collaborateOn: string
  helpWith: string
  portfolio: string
  blog: string
  resume: string
}

export interface DefaultSocialProps {
  github: string
  dev: string
  linkedin: string
  codepen: string
  stackoverflow: string
  kaggle: string
  codesandbox: string
  fb: string
  instagram: string
  twitter: string
  dribbble: string
  behance: string
  medium: string
  youtube: string
  codechef: string
  hackerrank: string
  codeforces: string
  leetcode: string
  topcoder: string
  hackerearth: string
  geeks_for_geeks: string
  discord: string
  rssurl: string
}

export interface DefaultSupportProps {
  buyMeACoffee: string
}

// Export the constants with their respective types
export const DEFAULT_PREFIX: DefaultPrefixProps = {
  title: "Hi 👋, I'm",
  currentWork: "🔭 I’m currently working on",
  currentLearn: "🌱 I’m currently learning",
  collaborateOn: "👯 I’m looking to collaborate on",
  helpWith: "🤝 I’m looking for help with",
  ama: "💬 Ask me about",
  contact: "📫 How to reach me",
  resume: "📄 Know about my experiences",
  funFact: "⚡ Fun fact",
  portfolio: "👨‍💻 All of my projects are available at",
  blog: "📝 I regularly write articles on",
}

export const DEFAULT_DATA: DefaultDataProps = {
  title: "",
  subtitle: "A passionate frontend developer from India",
  currentWork: "",
  currentLearn: "",
  collaborateOn: "",
  helpWith: "",
  ama: "",
  contact: "",
  funFact: "",
  twitterBadge: false,
  visitorsBadge: false,
  badgeStyle: "flat",
  badgeColor: "0e75b6",
  badgeLabel: "Profile views",
  githubProfileTrophy: false,
  githubStats: false,
  githubStatsOptions: {
    theme: "",
    titleColor: "",
    textColor: "",
    bgColor: "",
    hideBorder: false,
    cacheSeconds: null,
    locale: "en",
  },
  topLanguages: false,
  topLanguagesOptions: {
    theme: "",
    titleColor: "",
    textColor: "",
    bgColor: "",
    hideBorder: false,
    cacheSeconds: null,
    locale: "en",
  },
  streakStats: false,
  streakStatsOptions: {
    theme: "",
  },
  devDynamicBlogs: false,
  mediumDynamicBlogs: false,
  rssDynamicBlogs: false,
}

export const DEFAULT_LINK: DefaultLinkProps = {
  currentWork: "",
  collaborateOn: "",
  helpWith: "",
  portfolio: "",
  blog: "",
  resume: "",
}

export const DEFAULT_SOCIAL: DefaultSocialProps = {
  github: "",
  dev: "",
  linkedin: "",
  codepen: "",
  stackoverflow: "",
  kaggle: "",
  codesandbox: "",
  fb: "",
  instagram: "",
  twitter: "",
  dribbble: "",
  behance: "",
  medium: "",
  youtube: "",
  codechef: "",
  hackerrank: "",
  codeforces: "",
  leetcode: "",
  topcoder: "",
  hackerearth: "",
  geeks_for_geeks: "",
  discord: "",
  rssurl: "",
}

export const DEFAULT_SUPPORT: DefaultSupportProps = {
  buyMeACoffee: "",
}
