// UI components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import MyServices from "./components/MyServices";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <AboutMe />
      <MyServices />
      <Portfolio />
      <ContactMe />
    </div>
  );
}
