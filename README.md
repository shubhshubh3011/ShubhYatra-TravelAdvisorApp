# ShubhYatra - Travel Advisor App

A responsive travel advisor application for discovering restaurants, hotels, and attractions around a destination. The current project is a frontend prototype built with React, Vite, and Tailwind CSS.

## Current Status

The repository currently contains the frontend application. Place information and map positions use local sample data so the interface can be developed before live travel APIs and a backend are connected.

## Features

- Search-oriented navigation header
- Restaurant, hotel, and attraction categories
- Open-status and rating filter controls
- Scrollable nearby-place results
- Interactive result and map-marker selection
- Selected-place information panel
- Rating, pricing, distance, address, and opening-hour details
- Map mode, fullscreen, layers, location, and zoom controls
- Responsive mobile and desktop layouts
- Accessible labels and keyboard-compatible buttons

> **Note:** The current map is a styled prototype and does not yet use live geographic data. Search, directions, persistence, and external API calls are planned integrations.

## Technology Stack

| Area | Technology |
|---|---|
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Icons | Material UI Icons |
| HTTP client | Axios |
| Map packages | React Google Maps API and Google Map React |
| Routing dependency | React Router DOM |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

From the repository directory:

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5180](http://localhost:5180) in your browser.

### Production Build

```bash
npm run build
```

The production output is generated in `frontend/dist`.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
vrrs-app/
├── README.md
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        └── components/
            ├── Header/
            │   └── Header.jsx
            ├── List/
            │   └── List.jsx
            ├── Map/
            │   └── Map.jsx
            └── PlaceDetails/
                └── PlaceDetails.jsx
```

## Application Architecture

`App.jsx` owns the selected-place and category state. It provides the place data and event handlers to the list and map components.

| Component | Responsibility |
|---|---|
| `Header` | Branding, destination search, and global search controls |
| `List` | Categories, filters, result list, and place selection |
| `Map` | Map surface, markers, labels, and map controls |
| `PlaceDetails` | Information and actions for the selected place |

Selecting a place in `List` or selecting its marker in `Map` updates the shared state in `App`, which then updates `PlaceDetails`.

## Styling

Tailwind is loaded globally from `src/index.css`:

```css
@import "tailwindcss";
```

The main desktop layout uses a fixed discovery sidebar and a flexible map area. On smaller screens, these sections stack vertically. Flexbox is used for component-level alignment, while absolute positioning is used for markers, controls, and the details panel over the map.

## Planned Integrations

### Travel APIs

- Live place search and place details
- Geographic coordinates and map tiles
- Directions and travel-time calculations
- Weather forecasts
- Current opening hours, prices, photos, and ratings

### Backend

A backend will be required to:

- Protect private API keys
- Authenticate users
- Save favorite places and trips
- Normalize data from multiple travel services
- Validate and store generated itineraries
- Apply rate limiting and request validation

Private keys must never be placed in frontend source code or committed to Git.

### AI Itinerary Generation

The planned itinerary service will accept details such as destination, dates, budget, interests, group size, travel pace, and accessibility needs. The backend will combine verified place and routing data, send it to an AI provider, validate the structured response, and return a day-by-day itinerary to the frontend.

Potential itinerary features include:

- Day-by-day timelines
- Route-aware activity ordering
- Budget and opening-hour constraints
- Meal and rest periods
- Activity replacement and regeneration
- Saved trips and PDF export

## Environment Variables

When external services are added, keep secrets in backend environment variables. A frontend variable prefixed with `VITE_` is included in the browser bundle and must not contain a private secret.

Example future backend environment file:

```env
AI_API_KEY=replace_with_private_key
MAPS_API_KEY=replace_with_private_key
DATABASE_URL=replace_with_database_url
```

Do not commit `.env` files. Commit an `.env.example` containing placeholder names only.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server on port 5180 |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
