const ExploreIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3 8.5 15.5 20 12 12 3Z" />
    <path d="M8.5 15.5 5 19" />
  </svg>
);

const SearchIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);

const TuneIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 7h12" />
    <path d="M18 7h2" />
    <path d="M4 12h2" />
    <path d="M10 12h10" />
    <path d="M4 17h7" />
    <path d="M13 17h7" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="11" cy="17" r="2" />
  </svg>
);

const Header = () => (
  <header className="border-b border-[#d9e0e7] bg-[#111a24] text-white">
    <div className="mx-auto flex h-auto min-h-16 w-full max-w-[1800px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 sm:py-0">
      <a href="#" className="flex shrink-0 items-center gap-2" aria-label="ShubhYatra home">
        <span className="flex size-9 items-center justify-center bg-[#c9ff5b] text-[#111a24]"><ExploreIcon className="h-4 w-4" /></span>
        <span className="text-base font-bold">ShubhYatra<span className="text-[#c9ff5b]">/TRAVEL</span></span>
      </a>
      <div className="relative w-full sm:ml-auto sm:max-w-xl">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9eabb8] h-4 w-4" />
        <input className="h-10 w-full border border-[#354352] bg-[#1b2733] pl-10 pr-12 text-sm text-white outline-none placeholder:text-[#82909d] focus:border-[#c9ff5b]" placeholder="Search food, stays, or places" />
        <button type="button" aria-label="Search options" className="absolute right-1 top-1 flex size-8 items-center justify-center text-[#9eabb8] hover:text-white"><TuneIcon className="h-4 w-4" /></button>
      </div>
      <button type="button" className="hidden h-10 shrink-0 items-center border border-[#354352] px-4 text-sm font-semibold hover:border-[#c9ff5b] lg:flex">Explore Jaipur</button>
    </div>
  </header>
);

export default Header;
