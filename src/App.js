import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  function toggleDarkMode() {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  }

  return (
    <div
      className={`${
        darkMode === "dark" ? "dark" : "light"
      } min-h-screen flex flex-col`}
    >
      <div className="dark:bg-gray-900 bg-zinc-100 text-gray-900 dark:text-zinc-100 flex-auto">
        <h1 className="font-extrabold  ">To Do List</h1>
        <button onClick={toggleDarkMode}>
          <span>
            Toggle Dark Mode
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
