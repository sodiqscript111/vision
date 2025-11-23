import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/home";
import AllServices from "./page/ServicePage";
import ServiceDetail from "./page/ServiceDetail";
import SolutionsList from "./page/SolutionsList";
import SolutionDetails from "./page/SolutionDetails";
import BlogList from "./component/blog";
import BlogDetails from "./page/BlogDetails";
import ContactSection from "./component/contact";
import ScrollToTop from "./component/ScrollToTop";
import "./index.css";

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<AllServices />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/solutions" element={<SolutionsList />} />
                <Route path="/solutions/:id" element={<SolutionDetails />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/contact" element={<ContactSection />} />
            </Routes>
        </>
    );
}

export default App;
