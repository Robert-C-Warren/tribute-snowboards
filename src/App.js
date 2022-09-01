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
import Cart from './Cart/Cart';
import Foliage from './Snowboard Pages/Foliage';
import Granite from './Snowboard Pages/Granite';
import ObeyxTribute from './Snowboard Pages/ObeyxTribute';
import Hypno from './Snowboard Pages/Hypno';
import Jazz from './Snowboard Pages/Jazz';
import Mountains from './Snowboard Pages/Mountains';
import Patriot from './Snowboard Pages/Patriot';
import StickerBomb from './Snowboard Pages/StickerBomb';
import RGB from './Snowboard Pages/RGB';
import Splatter from './Snowboard Pages/Splatter';

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
          <Route path="/cart" element={<><Header/> <Cart/></>} />
            
            {/* Individual Product Pages */}
            <Route path="/foliage" element={<><Header/> <Foliage/></>} />
            <Route path="/granite" element={<><Header/> <Granite/></>} />
            <Route path="/obeyxtribute" element={<><Header/> <ObeyxTribute/></>} />
            <Route path="/hypno" element={<><Header/> <Hypno/></>} />
            <Route path="/jazz" element={<><Header/> <Jazz/></>} />
            <Route path="/mountains" element={<><Header/> <Mountains/></>} />
            <Route path="/patriot" element={<><Header/> <Patriot/></>} />
            <Route path="/stickerbomb" element={<><Header/> <StickerBomb/></>} />
            <Route path="/rgb" element={<><Header/> <RGB/></>} />
            <Route path="/splatter" element={<><Header/> <Splatter/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
