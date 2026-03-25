import { Link } from "react-router-dom";

export default function CalculatorPage() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>Calculator</h1>

      <Link to="/calculator/bmi">
        <button style={{ padding: "15px 25px", marginTop: "20px" }}>
          Open BMI Calculator
        </button>
      </Link>
    </div>
  );
}
