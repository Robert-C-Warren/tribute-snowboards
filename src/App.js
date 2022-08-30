import './App.css';
import Landing from './Landing/Landing.jsx'
import Store from './Store/Store.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header/Header';
import BrowseBoards from './Product Pages/BrowseBoards';
import BrowseBindings from './Product Pages/BrowseBindings'
import BrowseBoots from './Product Pages/BrowseBoots'
import BrowseJackets from './Product Pages/BrowseJackets'
import BrowsePants from './Product Pages/BrowsePants'
import BrowseGoggles from './Product Pages/BrowseGoggles'
import BrowseGloves from './Product Pages/BrowseGloves'
import BrowseBeanies from './Product Pages/BrowseBeanies'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<><Header/> <Store/></>} />
          <Route path="/boards" element={<><Header/> <BrowseBoards/></>} />
          <Route path="/bindings" element={<><Header/> <BrowseBindings/></>} />
          <Route path="/boots" element={<><Header/> <BrowseBoots/></>} />
          <Route path="/jackets" element={<><Header/> <BrowseJackets/></>} />
          <Route path="/pants" element={<><Header/> <BrowsePants/></>} />
          <Route path="/goggles" element={<><Header/> <BrowseGoggles/></>} />
          <Route path="/gloves" element={<><Header/> <BrowseGloves/></>} />
          <Route path="/beanies" element={<><Header/> <BrowseBeanies/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
