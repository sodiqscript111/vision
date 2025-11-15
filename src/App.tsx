import { Routes, Route } from 'react-router-dom';
import Home from "./page/home.tsx";
import AllServices from './page/ServicePage.tsx';
import ServiceDetail from './page/ServiceDetail.tsx';
import BlogDetails from "./page/BlogDetails.tsx";
import SolutionsList from './page/SolutionsList.tsx';
import SolutionDetails from './page/SolutionDetails.tsx';
import './App.css'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/solutions" element={<SolutionsList />} />
        <Route path="/solutions/:id" element={<SolutionDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
  )
}

export default App
