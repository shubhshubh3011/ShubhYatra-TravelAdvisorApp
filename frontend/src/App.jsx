import { useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

export const places = [
  { id: 1, name: '1135 AD', type: 'Restaurants', subtype: 'Royal dining', distance: '1.2 km', rating: 4.8, price: '$$$', position: ['30%', '25%'], accent: '#ef8354', address: 'Level 2, Jaleb Chowk, Amer', hours: '12:00 - 22:30', description: 'Refined Rajasthani dining inside the historic walls of Amber Fort.' },
  { id: 2, name: 'The Johri', type: 'Hotels', subtype: 'Boutique stay', distance: '2.8 km', rating: 4.7, price: '$$$', position: ['55%', '42%'], accent: '#7c6ff2', address: 'Johri Bazaar, Jaipur', hours: 'Open 24 hours', description: 'An intimate restored haveli with thoughtful rooms and a quiet courtyard.' },
  { id: 3, name: 'Panna Meena Kund', type: 'Attractions', subtype: 'Architecture', distance: '3.4 km', rating: 4.6, price: 'Free', position: ['24%', '67%'], accent: '#18a999', address: 'Amer, Jaipur', hours: '07:00 - 18:00', description: 'A geometric 16th-century stepwell with symmetrical stairs and calm water.' },
  { id: 4, name: 'Steam', type: 'Restaurants', subtype: 'Lounge & bar', distance: '4.1 km', rating: 4.5, price: '$$', position: ['70%', '65%'], accent: '#ef8354', address: 'Rambagh Palace, Jaipur', hours: '18:00 - 00:00', description: 'A restored steam engine and Victorian station transformed into a relaxed lounge.' },
  { id: 5, name: 'Samode Haveli', type: 'Hotels', subtype: 'Heritage hotel', distance: '4.9 km', rating: 4.8, price: '$$$', position: ['78%', '31%'], accent: '#7c6ff2', address: 'Gangapole, Jaipur', hours: 'Open 24 hours', description: 'A centuries-old urban oasis with painted halls, gardens, and a serene pool.' },
];

function App() {
  const [selectedId, setSelectedId] = useState(1);
  const [category, setCategory] = useState('All');
  const selectedPlace = places.find((place) => place.id === selectedId) || places[0];

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f6f8] text-[#18222d]">
      <Header />
      <main className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
        <div className="grid min-h-0 flex-1 overflow-hidden border border-[#d9e0e7] bg-white shadow-[0_12px_40px_rgba(24,34,45,0.08)] lg:grid-cols-[370px_minmax(0,1fr)]">
          <List
            places={places}
            selectedId={selectedId}
            onSelect={setSelectedId}
            category={category}
            onCategoryChange={setCategory}
          />
          <section className="relative min-h-[560px] border-t border-[#d9e0e7] lg:min-h-[calc(100vh-105px)] lg:border-l lg:border-t-0" aria-label="Map and selected place">
            <Map places={places} selectedId={selectedId} onSelect={setSelectedId} />
            <PlaceDetails place={selectedPlace} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
