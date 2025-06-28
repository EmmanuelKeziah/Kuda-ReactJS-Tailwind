import { BrowserRouter, Routes, Route }   from 'react-router-dom'
import Header from './components/block/Header'
import Personal from './pages/Personal'
import Business from './pages/Business'
import Company from './pages/Company'
import Help from './pages/Help'
import Home from './pages/Home'
import Electricity from './pages/Electricity';
import DiscoverBusiness from './pages/DiscoverBusiness';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
// import Footer from './components/block/Footer'
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/company" element={<Company />} />
          <Route path="/help" element={<Help />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/discover-business" element={<DiscoverBusiness />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App;
