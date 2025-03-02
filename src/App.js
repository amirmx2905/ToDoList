import { useState } from "react";
import LandingPage from "./pages/landingPage";
import Navbar from "./components/navbar";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  function toggleDarkMode() {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  }

  return (
    <div className={`${darkMode} min-h-screen flex flex-col`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <LandingPage className="bg-zinc-100 dark:bg-zinc-900" />
    </div>
  );
}

export default App;
