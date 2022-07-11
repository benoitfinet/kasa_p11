import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Details from './pages/Details';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/:logementID" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
