import Container from "./layout/container";
import RentalInfoPage from "./pages/rentalInfo";
import { Route, Routes } from "react-router-dom";
import ResidencyInfoPage from "./pages/residencyInfo";
import TotalInfo from "./components/totalInfo/totalList";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<RentalInfoPage />} />
        <Route path="/refund" element={<ResidencyInfoPage />} />
        <Route path="/complete" element={<TotalInfo />} />
      </Routes>
    </Container>
  );
}

export default App;
