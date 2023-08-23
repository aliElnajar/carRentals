import Footer from "./components/generalUI/Footer";
import Navbar from "./components/generalUI/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import Reservation from "./pages/Reservation";
import ConfirmReservation from "./pages/ConfirmReservation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmreservation" element={<ConfirmReservation />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
