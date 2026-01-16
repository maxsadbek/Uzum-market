import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Footer from "./components/Footer";
import CardPage from "./Pages/CardPage";
import Weshlis from "./Pages/Wishlist";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Slider />
      <Card />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CardPage />} />
        <Route path="wishlist" element={<Weshlis />} />
      </Route>
    </Routes>
  );
}

export default App;
