import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
      </Routes>
    </>
  );
}

export default App;