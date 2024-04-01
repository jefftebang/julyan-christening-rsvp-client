import { Routes, Route } from "react-router-dom";
import PassagePage from "./pages/passage.page";
import ReservationPage from "./pages/reservation.page";
import ThankYouPage from "./pages/thank-you.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<PassagePage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
};

export default App;
