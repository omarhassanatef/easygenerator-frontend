# EasyGenerator Frontend

React.js frontend for EasyGenerator, built with Vite and TypeScript.

## Tech Stack

- **Framework**: React.js 19 (Vite)
- **Language**: TypeScript
- **Icons**: Lucide React
- **HTTP Client**: Axios (with credentials for httpOnly cookies)
- **Notifications**: Toastify-js

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- EasyGenerator Backend running on port 3000 or as set in env file

## Installation

1. Navigate to the frontend directory
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Ensure your `.env` file points to the backend API:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## Running the Application

### Development mode

Runs the app on [http://localhost:3001](http://localhost:3001)

```bash
npm run dev
```

### Production mode

Builds the application for production and provides a preview:

```bash
npm run build
npm run preview
```

## Key Features

- **Auth Integration**: Securely integrates with NestJS backend using httpOnly cookies.
- **Form Validation**: Complex password validation on signup (8+ chars, capital letter, number) as requested.