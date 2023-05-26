import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import data from "./data/data.json";
import PreNavBar from "./components/PreNavBar";
import NavBar from "./components/NavBar.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js"
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio} />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />

      <HotAccessoriesMenu />
      {/* exact attribute is use to find the exact path */}
      <Routes >
        <Route exact path="/music" element={
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        } />

        <Route exact path="/smartDevices" element={
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        } />

        <Route exact path="/home" element={
          <HotAccessories homeDevice={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
        } />

        <Route exact path="/lifestyle" element={
          <HotAccessories lifeStyleDevice={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
        } />

        <Route exact path="/mobile" element={
          <HotAccessories mobileDevice={data.hotAccessories.mobileAccessories} mobileCover={data.hotAccessoriesCover.mobileAccessories} />
        } />

      </Routes>

      <Heading text={`PRODUCT REVIEWS`} />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner bannerEnd={data.banner.end} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
