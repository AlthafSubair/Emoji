import { Link } from "react-router-dom"


function NoResults() {
  return (
    <div className="bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg p-4 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400" role="alert" tabIndex="-1" aria-labelledby="hs-link-on-right-label">
  <div className="flex">
    <div className="shrink-0">
      <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    </div>
    <div className="flex-1 md:flex md:justify-between ms-2">
      <p id="hs-link-on-right-label" className="text-sm">
      No emojis found. Try a different keyword! 🔍
      </p>
      <p className="text-sm mt-3 md:mt-0 md:ms-6">
        <Link to='/emojis' clssName="text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 font-medium whitespace-nowrap dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" href="#">show all</Link>
      </p>
    </div>
  </div>
</div>
  )
}

export default NoResults
