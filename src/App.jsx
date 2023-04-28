import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import HeaderFooter from "./routes/headerfooter/header-footer";
import About from "./routes/about/about";
import Contact from "./routes/contact/contact";

const App = () => {
  document.title = "Opal Trading";
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
