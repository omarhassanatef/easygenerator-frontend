# EasyGenerator Frontend

React.js frontend for EasyGenerator, built with Vite and TypeScript. It features a modern, premium UI with clean Light mode aesthetics, including Signup, Signin, and a protected User Profile page.

## Tech Stack

- **Framework**: React.js 19 (Vite)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Custom Glassmorphism and Modern UI)
- **Icons**: Lucide React
- **HTTP Client**: Axios (with credentials for httpOnly cookies)
- **Routing**: React Router DOM v7
- **Notifications**: Toastify-js

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- EasyGenerator Backend running on port 3000

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
- **Form Validation**: Complex password validation on signup (8+ chars, capital letter, number).
- **Smooth UX**: Conditional password policy visibility and bottom-centered notifications.
- **Premium Design**: Modern light theme with a custom branded logo and responsive layout.
