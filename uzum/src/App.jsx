import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import CardPage from "./Pages/CardPage";
import Weshlis from "./Pages/Wishlist";
import Card from "./components/card";
import CardId from "./Pages/CardId";

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
        <Route path={"/card/ :id"} element={<CardId />}/>
      </Route>
    </Routes>
  );
}

export default App;
