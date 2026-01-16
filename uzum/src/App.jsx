import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Footer from "./components/Footer";
import CardPage from "./Pages/CardPage";
import Weshlis from "./Pages/Weshlis";
const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Card />
      <Footer />
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CardPage />} />
      <Route path="/wishlist" element={<Weshlis />} />
    </Routes>
  );
}
export default App;
