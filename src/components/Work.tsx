import React from "react"

interface WorkProps {
  prefix: {
    [key: string]: string
  }
  data: {
    [key: string]: string
  }
  link: {
    [key: string]: string
  }
  handlePrefixChange: (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  handleDataChange: (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  handleLinkChange: (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const Work: React.FC<WorkProps> = ({
  prefix,
  handlePrefixChange,
  data,
  handleDataChange,
  link,
  handleLinkChange,
}) => {
  return (
    <div className="flex justify-center items-start flex-col w-full px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Work
      </div>
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="currentWork-prefix"
          placeholder="Hi, I'm "
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.currentWork}
          onChange={event => handlePrefixChange("currentWork", event)}
        />
        <input
          id="currentWork"
          placeholder="project name"
          className="outline-none placeholder-gray-700 mr-8 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.currentWork}
          onChange={event => handleDataChange("currentWork", event)}
        />
        <input
          id="currentWork-link"
          placeholder="project link"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 text-blue-700 w-full sm:w-1/4 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={link.currentWork}
          onChange={event => handleLinkChange("currentWork", event)}
        />
      </div>
      {/* Rest of the JSX remains the same */}
      {/* ... */}
      <div className="text-xs sm:text-lg flex flex-col sm:flex-row mb-10 justify-center sm:justify-start items-center sm:items-start w-full px-4 sm:px-0">
        <input
          id="funFact-prefix"
          className="outline-none mr-8 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={prefix.funFact}
          onChange={event => handlePrefixChange("funFact", event)}
        />
        <input
          id="funFact"
          placeholder="I think I am funny"
          className="outline-none placeholder-gray-700 mr-8 sm:mr-0 w-full sm:w-1/3 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
          value={data.funFact}
          onChange={event => handleDataChange("funFact", event)}
        />
      </div>
    </div>
  )
}

export default Work
