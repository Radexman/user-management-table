# **User Management Table**

## **Overview**

This project is a **User Management Table** built for a junior developer assignment. The app fetches users from the JSONPlaceholder API and displays them in a table with dynamic filtering options. The user can filter the table by name, username, email, or phone. The application also includes a dark mode toggler and has been thoroughly tested for reliability and accuracy.

Before starting the development, I created a **hi-fidelity wireframe** using Figma to visualize the design and functionality of the application.

**App Link**: https://user-management-table-001.netlify.app/

**Figma Wireframe Link**: https://www.figma.com/proto/ARJN5L9l97ZQGohsgNEvs7/Table-Radek?node-id=0-1&t=agg0N86oj0faxtXr-1

## **Features**

- **Dynamic Filtering**: The table supports real-time filtering by name, username, email, and phone number through a text input and radio buttons for selection.
- **Dark Mode Toggle**: A theme switcher that allows users to toggle between light and dark mode.
- **Thorough Testing**: Comprehensive unit and integration tests ensure the app functions correctly under different scenarios. Testing covers user interactions, API mock requests, routing, and other key components of the application.
- **Type-Safe**: The app is built using TypeScript, with strong typing enforced throughout the codebase. The Zod library is used for schema validation, ensuring that the data fetched from the API adheres to a strict schema.

## **Technologies Used**

### **Core**

- **React**: Frontend UI framework.
- **Redux**: State management, using the Redux Toolkit for slices and async thunks.
- **TypeScript**: Type-safe development with full TypeScript support.
- **Vite**: Build tool for fast development and optimized production builds.
- **Axios**: HTTP client for fetching data from the API.

### **Styling**

- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Pre-built Tailwind components for better UI consistency and faster development.

### **Testing & Linting**

- **Vitest**: Testing framework for unit and integration tests.
- **React Testing Library (RTL)**: For testing React components and simulating user interactions.
- **Axios Mock Adapter**: Used to mock API requests during testing.
- **Zod**: Schema validation for fetched user data.
- **ESLint & Prettier**: Code linting and formatting tools to maintain code quality.

## **Scripts**

Here are the key npm scripts for development, testing, and building the app:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "test": "vitest",
  "coverage": "vitest run --coverage",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## **Getting Started**

**Prerequisites**

To run this project, you'll need the following installed:

- Node.js (version 16.x or higher)
- npm or yarn

### **Installation**

1. Clone the repository:

```bash
git clone git@github.com:Radexman/user-management-table.git
cd user-management-table
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of the project with local variable:

```env
VITE_API_URL='https://jsonplaceholder.typicode.com/users'
```

4.  Run the development server:

```bash
npm run dev
```

4. Open the app in your browser at http://localhost:5173.

### **Running Tests**

To run the test suite:

```bash
npm run test
```

To generate a coverage report:

```bash
npm run coverage
```

To lint for the code adherance to the style guidleines:

```bash
npm run lint
```

## **Viewing Coverage Report in Browser**

After generating the coverage report with:

```bash
npm run coverage
```

You can view the detailed code coverage report in your browser:

1. Navigate to the coverage folder in the project directory.
2. Open the index.html file located inside the coverage folder.
3. If you're using VSCode, right-click the index.html file and select "Open with Live Server" to view the report in your browser.

This provides a visual overview of the test coverage, making it easier to explore which lines of code are covered by tests.
