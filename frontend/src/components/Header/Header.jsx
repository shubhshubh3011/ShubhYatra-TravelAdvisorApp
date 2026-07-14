import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

const Header = () => (
  <header className="border-b border-[#d9e0e7] bg-[#111a24] text-white">
    <div className="mx-auto flex h-auto min-h-16 w-full max-w-[1800px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 sm:py-0">
      <a href="#" className="flex shrink-0 items-center gap-2" aria-label="ShubhYatra home">
        <span className="flex size-9 items-center justify-center bg-[#c9ff5b] text-[#111a24]"><ExploreOutlinedIcon fontSize="small" /></span>
        <span className="text-base font-bold">ShubhYatra<span className="text-[#c9ff5b]">/TRAVEL</span></span>
      </a>
      <div className="relative w-full sm:ml-auto sm:max-w-xl">
        <SearchRoundedIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9eabb8]" fontSize="small" />
        <input className="h-10 w-full border border-[#354352] bg-[#1b2733] pl-10 pr-12 text-sm text-white outline-none placeholder:text-[#82909d] focus:border-[#c9ff5b]" placeholder="Search food, stays, or places" />
        <button type="button" aria-label="Search options" className="absolute right-1 top-1 flex size-8 items-center justify-center text-[#9eabb8] hover:text-white"><TuneRoundedIcon fontSize="small" /></button>
      </div>
      <button type="button" className="hidden h-10 shrink-0 items-center border border-[#354352] px-4 text-sm font-semibold hover:border-[#c9ff5b] lg:flex">Explore Jaipur</button>
    </div>
  </header>
);

export default Header;
