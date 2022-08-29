import './App.css';
import Landing from './Landing/Landing.jsx'
import Store from './Store/Store.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<><Header/> <Store/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
