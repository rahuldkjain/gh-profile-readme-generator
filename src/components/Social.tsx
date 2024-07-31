import React, { ChangeEvent } from "react"

interface SocialProps {
  social: {
    [key: string]: string,
  };
  handleSocialChange: (
    platform: string,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

const Social: React.FC<SocialProps> = ({ social, handleSocialChange }) => {
  const socialPlatforms = [
    { id: "github", name: "github", placeholder: "github username" },
    { id: "twitter", name: "twitter", placeholder: "twitter username" },
    { id: "dev", name: "dev-dot-to", placeholder: "dev.to username" },
    { id: "codepen", name: "codepen", placeholder: "codepen username" },
    {
      id: "codesandbox",
      name: "codesandbox",
      placeholder: "codesandbox username",
    },
    {
      id: "stackoverflow",
      name: "stackoverflow",
      placeholder: "stackoverflow user ID",
    },
    { id: "linkedin", name: "linkedin", placeholder: "linkedin username" },
    { id: "kaggle", name: "kaggle", placeholder: "kaggle username" },
    { id: "fb", name: "facebook", placeholder: "facebook username" },
    { id: "instagram", name: "instagram", placeholder: "instagram username" },
    { id: "dribbble", name: "dribbble", placeholder: "dribbble username" },
    { id: "behance", name: "behance", placeholder: "behance username" },
    {
      id: "hashnode",
      name: "hashnode",
      placeholder: "hashnode username (with @)",
    },
    { id: "medium", name: "medium", placeholder: "medium username (with @)" },
    { id: "youtube", name: "youtube", placeholder: "youtube channel name" },
    { id: "codechef", name: "codechef", placeholder: "codechef username" },
    {
      id: "hackerrank",
      name: "hackerrank",
      placeholder: "hackerrank username",
    },
    {
      id: "codeforces",
      name: "codeforces",
      placeholder: "codeforces username",
    },
    { id: "leetcode", name: "leetcode", placeholder: "leetcode username" },
    { id: "topcoder", name: "topcoder", placeholder: "topcoder username" },
    {
      id: "hackerearth",
      name: "hackerearth",
      placeholder: "hackerearth user (with @)",
    },
    {
      id: "geeks_for_geeks",
      name: "geeksforgeeks",
      placeholder: "GFG (<username>/profile)",
    },
    {
      id: "discord",
      name: "discord",
      placeholder: "discord invite (only code)",
    },
    { id: "rssurl", name: "rss", placeholder: "RSS feed URL" },
  ]

  return (
    <div className="px-2 sm:px-6 mb-4">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Social
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {socialPlatforms.map(platform => (
          <div
            key={platform.id}
            className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0"
          >
            <img
              src={`https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/${platform.name}.svg`}
              className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
              alt={platform.name}
            />
            <input
              id={platform.id}
              placeholder={platform.placeholder}
              className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
              value={social[platform.id]}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleSocialChange(platform.id, event)
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Social
