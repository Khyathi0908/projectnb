import { useState } from "react";
import { Link } from "react-router-dom";

function CalculatorMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="calc-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Calculator text in navbar */}
      <span className={`calc-link ${open ? "active" : ""}`}>Calculator</span>

      {/* Dropdown */}
      {open && (
        <div className="calc-dropdown">
          <Link to="/bmi" className="calc-card">
            <h4>Body Mass Index (BMI) Calculator</h4>
            <div className="arrow">›</div>
          </Link>

          <Link to="/ideal-weight" className="calc-card">
            <h4>Ideal Body Weight Calculator</h4>
            <div className="arrow">›</div>
          </Link>

          <Link to="/daily-calories" className="calc-card">
            <h4>Daily Calorie Intake Calculator</h4>
            <div className="arrow">›</div>
          </Link>

          <Link to="/calories-burned" className="calc-card">
            <h4>Calories Burned Calculator</h4>
            <div className="arrow">›</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CalculatorMenu;
