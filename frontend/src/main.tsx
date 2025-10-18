import React from "react"; // Importing React is required for JSX transformation (still needed even with React 18)
import ReactDOM from "react-dom/client"; // ReactDOM creates and controls the root element
import App from "./App"; // Importing our root component
import "./index.css"; // Global styles import

// React 18+ uses `createRoot()` instead of the old `ReactDOM.render()`
// because React 18 introduces concurrent rendering (better performance, async UI handling)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
