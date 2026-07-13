import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const Map = ({ places, selectedId, onSelect }) => (
  <div className="absolute inset-0 overflow-hidden bg-[#dfe7e5]">
    <div className="absolute inset-0 opacity-90 [background-image:linear-gradient(27deg,transparent_47%,rgba(255,255,255,0.9)_48%,rgba(255,255,255,0.9)_51%,transparent_52%),linear-gradient(153deg,transparent_46%,rgba(184,204,198,0.8)_47%,rgba(184,204,198,0.8)_50%,transparent_51%),linear-gradient(90deg,transparent_49%,rgba(119,170,189,0.3)_50%,transparent_52%)] [background-size:160px_120px,210px_170px,330px_100%]" />
    <div className="absolute -left-16 top-[44%] h-20 w-[115%] rotate-[-8deg] border-y-[14px] border-white/90 bg-[#c8d3d0] shadow-[0_0_0_1px_rgba(124,145,139,0.25)]" />
    <div className="absolute left-[42%] top-[-10%] h-[125%] w-12 rotate-[18deg] bg-[#b8d8df] opacity-80" />

    <div className="absolute left-4 top-4 flex items-center gap-2 border border-[#d5dce2] bg-white/95 p-1 shadow-sm">
      <button type="button" className="h-8 bg-[#111a24] px-3 text-xs font-bold text-white">Map</button>
      <button type="button" className="h-8 px-3 text-xs font-bold text-[#65717d] hover:bg-[#f2f4f6]">Satellite</button>
    </div>

    <button type="button" aria-label="Fullscreen map" className="absolute right-4 top-4 flex size-10 items-center justify-center border border-[#d5dce2] bg-white text-[#26323e] shadow-sm hover:bg-[#f2f4f6]"><CropFreeRoundedIcon fontSize="small" /></button>

    {places.map((place) => {
      const selected = selectedId === place.id;
      return (
        <button key={place.id} type="button" onClick={() => onSelect(place.id)} aria-label={`Select ${place.name}`} className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border-[3px] border-white font-black text-white shadow-[0_4px_12px_rgba(17,26,36,0.28)] transition hover:scale-110 ${selected ? 'size-12 bg-[#111a24] text-sm' : 'size-9 text-xs'}`} style={{ left: place.position[0], top: place.position[1], backgroundColor: selected ? '#111a24' : place.accent }}>
          {place.id}
          {selected && <span className="absolute -bottom-2 size-3 rotate-45 border-b-[3px] border-r-[3px] border-white bg-[#111a24]" />}
        </button>
      );
    })}

    <span className="absolute left-[13%] top-[18%] text-[10px] font-bold uppercase text-[#71817d]">Amer</span>
    <span className="absolute left-[58%] top-[78%] text-[10px] font-bold uppercase text-[#71817d]">Pink City</span>
    <span className="absolute left-[45%] top-[50%] rotate-[18deg] text-[9px] font-bold uppercase text-[#5e8b96]">Dravyavati River</span>

    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <button type="button" aria-label="Map layers" className="flex size-10 items-center justify-center border border-[#d5dce2] bg-white text-[#26323e] shadow-sm hover:bg-[#f2f4f6]"><LayersOutlinedIcon fontSize="small" /></button>
      <button type="button" aria-label="Use my location" className="flex size-10 items-center justify-center border border-[#d5dce2] bg-white text-[#26323e] shadow-sm hover:bg-[#f2f4f6]"><MyLocationRoundedIcon fontSize="small" /></button>
      <div className="border border-[#d5dce2] bg-white shadow-sm">
        <button type="button" aria-label="Zoom in" className="flex size-10 items-center justify-center border-b border-[#d5dce2] hover:bg-[#f2f4f6]"><AddRoundedIcon fontSize="small" /></button>
        <button type="button" aria-label="Zoom out" className="flex size-10 items-center justify-center hover:bg-[#f2f4f6]"><RemoveRoundedIcon fontSize="small" /></button>
      </div>
    </div>
    <div className="absolute bottom-3 left-3 text-[9px] font-semibold text-[#61706d]">Map data · Jaipur urban area</div>
  </div>
);

export default Map;
