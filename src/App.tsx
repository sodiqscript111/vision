import { Routes, Route } from 'react-router-dom';
import Home from "./page/home.tsx";
import AllServices from './page/ServicePage.tsx';
import ServiceDetail from './page/ServiceDetail.tsx';
import './App.css'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
    </Routes>
  )
}

export default App
