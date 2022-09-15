// UI components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}
