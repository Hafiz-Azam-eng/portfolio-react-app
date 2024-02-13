import React from 'react'
import Home from './Home'
import About from '../About/About'
import Education from '../Educations/Education'
import Techstack from '../Techstack/Techstack'
import Projects from '../Projects/Projects'
import WorkExp from '../workExp/WorkExp'
import Contact from '../Contact/Contact'
import { useTheme } from "../../context/ThemeContext";
import { ToastContainer } from "react-toastify";
import MobileNav from "../../components/MobileNav/MobileNav";
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
    const [theme] = useTheme();
    return (
        <>
        <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">


            {/* <Home /> */}
            <About />
            <Education />
            <Techstack />
            <Projects />
            <WorkExp />
            <Contact />
        </div>
        </div>
        </>
    )
}

export default HomePage