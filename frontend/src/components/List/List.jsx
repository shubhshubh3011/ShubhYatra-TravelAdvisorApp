import { useState } from 'react';

const categories = ['All', 'Restaurants', 'Hotels', 'Attractions'];

const ChevronDownIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const StarIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m12 2.8 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.2l6-.9L12 2.8Z" />
  </svg>
);

const List = ({ places, selectedId, onSelect, category, onCategoryChange }) => {
  const [minimumRating, setMinimumRating] = useState(0);
  const visiblePlaces = places.filter((place) => (category === 'All' || place.type === category) && place.rating >= minimumRating);

  return (
    <aside className="flex min-h-0 flex-col bg-[#fbfcfd]">
      <div className="border-b border-[#d9e0e7] px-5 pb-4 pt-5">
        <p className="mb-2 text-[11px] font-bold uppercase text-[#6c7885]">Curated near you</p>
        <h1 className="max-w-xs text-2xl font-bold leading-tight text-[#111a24]">Find the signal<br />in the city.</h1>
        <div className="mt-5 flex gap-1 overflow-x-auto pb-1" role="tablist" aria-label="Place categories">
          {categories.map((item) => (
            <button key={item} type="button" role="tab" aria-selected={category === item} onClick={() => onCategoryChange(item)} className={`h-9 shrink-0 border px-3 text-xs font-bold transition ${category === item ? 'border-[#111a24] bg-[#111a24] text-white' : 'border-[#d9e0e7] bg-white text-[#53606d] hover:border-[#9eabb8]'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button type="button" className="flex h-10 items-center justify-between border border-[#d9e0e7] bg-white px-3 text-xs font-semibold text-[#34414e]">Open now <ChevronDownIcon className="h-4 w-4" /></button>
          <button type="button" onClick={() => setMinimumRating(minimumRating === 4.7 ? 0 : 4.7)} className={`flex h-10 items-center justify-between border px-3 text-xs font-semibold ${minimumRating ? 'border-[#c9ff5b] bg-[#f4ffdc]' : 'border-[#d9e0e7] bg-white'}`}>Rating 4.7+ <ChevronDownIcon className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-[#d9e0e7] px-5 py-3 text-xs">
        <span className="font-bold text-[#34414e]">{visiblePlaces.length} places</span>
        <span className="text-[#7a8794]">Sorted by relevance</span>
      </div>
      <ul className="min-h-0 flex-1 overflow-y-auto">
        {visiblePlaces.map((place) => {
          const selected = place.id === selectedId;
          return (
            <li key={place.id} className="border-b border-[#e3e8ed]">
              <button type="button" onClick={() => onSelect(place.id)} className={`group flex w-full gap-4 border-l-[3px] px-4 py-4 text-left transition ${selected ? 'border-l-[#c9ff5b] bg-[#111a24] text-white' : 'border-l-transparent hover:bg-white'}`}>
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center text-sm font-black text-white" style={{ backgroundColor: place.accent }}>{String(place.id).padStart(2, '0')}</span>
                <span className="min-w-0 flex-1">
                  <span className={`block truncate text-sm font-bold ${selected ? 'text-white' : 'text-[#18222d]'}`}>{place.name}</span>
                  <span className={`mt-1 block text-xs ${selected ? 'text-[#aeb8c2]' : 'text-[#73808d]'}`}>{place.subtype} · {place.distance}</span>
                  <span className="mt-2 flex items-center gap-1 text-xs"><StarIcon className="h-4 w-4 text-[#efb93f]" /> <b>{place.rating}</b><span className={selected ? 'text-[#7f8c98]' : 'text-[#9aa5af]'}>· {place.price}</span></span>
                </span>
                <span className={`mt-1 text-xs font-bold uppercase ${selected ? 'text-[#c9ff5b]' : 'text-[#8a96a1]'}`}>{place.type.slice(0, 3)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default List;
