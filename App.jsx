import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Foodspage from "./Foodspage";
import CalculatorMenu from "./CalculatorMenu";
import BMICalculator from "./BMICalculator";
import IdealWeight from "./IdealWeight";
import DailyCalories from "./DailyCalories";
import CaloriesBurned from "./CaloriesBurned";
import LandingPage from "./components/LandingPage";
import Help from "./Help";
import DietForm from "./DietForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foods" element={<Foodspage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/onboarding" element={<DietForm />} />
        <Route path="/calculator/menu" element={<CalculatorMenu />} />
        <Route path="/calculator/bmi" element={<BMICalculator />} />
        <Route path="/calculator/ideal" element={<IdealWeight />} />
        <Route path="/calculator/calories" element={<DailyCalories />} />
        <Route path="/calculator/burned" element={<CaloriesBurned />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;