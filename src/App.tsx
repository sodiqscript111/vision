import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './component/Navbar.tsx'; // Assuming you have this
import Home from "./page/home.tsx";
import AllServices from './page/ServicePage.tsx';
import ServiceDetail from './page/ServiceDetail.tsx';
import BlogDetails from "./page/BlogDetails.tsx";
import SolutionsList from './page/SolutionsList.tsx';
import SolutionDetails from './page/SolutionDetails.tsx';
import './App.css'

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Routes> {/* No BrowserRouter here—it's already in main.tsx */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<AllServices />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/solutions" element={<SolutionsList />} />
                <Route path="/solutions/:id" element={<SolutionDetails />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
            </Route>
        </Routes>
    );
}

export default App;
