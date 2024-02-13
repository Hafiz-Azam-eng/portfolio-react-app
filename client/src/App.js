import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import '@fortawesome/fontawesome-free/css/all.css';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Project from "./pages/Projects/Project";
import HomePage from "./pages/Home/HomePage";
function App() {
  const [theme] = useTheme();
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projDetails" element={<Project />} />
         
        </Routes>
      </BrowserRouter>

      <div className="footer pb-3 ms-3">
        <Tada>
          <h4 className="text-center">Made With Hafiz &copy; 2024</h4>
        </Tada>
      </div>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
