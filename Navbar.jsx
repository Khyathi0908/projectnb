import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <h2 className="logo">NutriBuddy</h2>

        {/* Links */}
        <div className="nav-links">
          <a href="#">Success Stories</a>
          <Link to="/foods">Foods</Link>

          {/* CLICK DROPDOWN */}
          <div className="calc-wrapper">
            <button
              className="calc-btn"
              onClick={() => setOpen(!open)}
            >
              Calculator
            </button>

            {open && (
              <div className="calc-dropdown">
                <Link to="calculator/bmi">BMI Calculator</Link>
                <Link to="calculator/ideal">Ideal Weight</Link>
                <Link to="calculator/calories">Daily Calories</Link>
                <Link to="calculator/burned">Calories Burned</Link>
              </div>
            )}
          </div>

          <Link to="/help">Help</Link>
        </div>

        <button
  className="nav-btn"
  onClick={
    () => <Link to="/onboarding">
  <button className="nav-btn">Try for free</button>
</Link>
}
>
  Try for free
</button>
      </nav>
    </div>
  );
}

export default Navbar;
