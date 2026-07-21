const ClockIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const ArrowOutwardIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const BookmarkIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 4h12v16l-6-4-6 4V4Z" />
  </svg>
);

const NearMeIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11.5 21 3l-8.5 18-2.2-6.4L3 11.5Z" />
  </svg>
);

const StarIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m12 2.8 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.2l6-.9L12 2.8Z" />
  </svg>
);

const PlaceDetails = ({ place }) => (
  <aside className="absolute bottom-4 left-4 right-[68px] z-20 max-w-[430px] border border-[#d7dee5] bg-white shadow-[0_18px_50px_rgba(17,26,36,0.2)] sm:bottom-5 sm:left-5">
    <div className="h-1.5 w-full" style={{ backgroundColor: place.accent }} />
    <div className="p-4 sm:p-5">
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center text-base font-black text-white" style={{ backgroundColor: place.accent }}>{String(place.id).padStart(2, '0')}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-black uppercase text-[#76828e]">{place.type} · {place.subtype}</p>
          <h2 className="mt-1 truncate text-lg font-bold text-[#111a24]">{place.name}</h2>
          <p className="mt-1 truncate text-xs text-[#687581]">{place.address}</p>
        </div>
        <button type="button" aria-label="Save place" className="flex size-9 shrink-0 items-center justify-center border border-[#d7dee5] text-[#43505c] hover:bg-[#f2f4f6]"><BookmarkIcon className="h-4 w-4" /></button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[#e0e6eb] py-3 text-xs">
        <span className="flex items-center gap-1 font-bold"><StarIcon className="h-[17px] w-[17px] text-[#efb93f]" /> {place.rating}</span>
        <span className="font-bold text-[#53606d]">{place.price}</span>
        <span className="flex items-center gap-1 text-[#16836f]"><ClockIcon className="h-4 w-4" /> {place.hours}</span>
        <span className="text-[#7b8792]">{place.distance} away</span>
      </div>
      <p className="mt-3 hidden text-xs leading-5 text-[#5d6975] sm:block">{place.description}</p>
      <div className="mt-4 grid grid-cols-[1fr_44px] gap-2">
        <button type="button" className="flex h-11 items-center justify-center gap-2 bg-[#c9ff5b] text-xs font-black text-[#111a24] hover:bg-[#b9ef4c]"><NearMeIcon className="h-4 w-4" /> Get directions</button>
        <button type="button" aria-label="Open full place details" className="flex size-11 items-center justify-center border border-[#cdd5dc] text-[#26323e] hover:bg-[#f2f4f6]"><ArrowOutwardIcon className="h-4 w-4" /></button>
      </div>
    </div>
  </aside>
);

export default PlaceDetails;
