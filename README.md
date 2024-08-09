# Nutrition Plan Generator with AI 🍽️🥗

This is a React-based web application that allows users to generate personalized nutrition plans using AI. The application takes user inputs such as name, age, weight, height, activity level, and dietary preferences and sends these to a backend API to generate a tailored nutrition plan. The generated plan is displayed with a typewriter effect for an engaging user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Personalized Nutrition Plans**: Users can input personal details and dietary preferences to receive a customized nutrition plan.
- **Responsive Design**: The application is responsive and works well on various screen sizes.
- **Local Storage**: Generated plans are saved to local storage with timestamps, allowing users to retrieve past plans.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nutrition-plan-generator.git
   cd nutrition-plan-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the backend:**

   The backend should have an endpoint `/generate-nutrition-plan` that accepts POST requests with user data and returns a generated nutrition plan. Ensure the backend server is running on `http://localhost:5000`.

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Fill out the form with your personal information and dietary preferences.
3. Click the "Generate Nutrition Plan" button.
4. Watch the plan generate in real-time with a typewriter effect.

## Project Structure

```plaintext
├── public
│   └── index.html         # HTML template
├── src
│   ├── components
│   │   ├── Navbar.js      # Navbar component
│   │   ├── NutritionPlan.js # Main Nutrition Plan component
│   │   ├── Home.js        # Home component
│   │   └── PlanDetail.js  # Detailed Plan component
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── styles.css         # CSS styles
└── package.json           # Project metadata and dependencies
```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Marked**: A markdown parser and compiler.
- **React Router**: Declarative routing for React applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

```
