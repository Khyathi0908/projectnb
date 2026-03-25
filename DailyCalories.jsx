import { useState } from "react";
import "./App.css";

export default function DailyCalories() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState("");

  const calculateCalories = () => {
    if (!gender || !age || !height || !weight || !activity) {
      setResult("Please fill all fields");
      return;
    }

    let bmr = 0;

    // Mifflin-St Jeor Equation
    if (gender === "male")
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    else
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;

    const activityFactor = {
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very: 1.9,
    };

    const calories = Math.round(bmr * activityFactor[activity]);

    setResult(`Your daily calorie need is ${calories} kcal`);
  };

  return (
    <div className="bmi-wrapper">
      <h1 className="bmi-title">Daily Calorie Intake Calculator</h1>
      <p className="bmi-sub">
        For accurate calculation, we need some basic info about you
      </p>

      {/* ===== FIRST 4 INPUTS (same as BMI grid) ===== */}
      <div className="bmi-grid-2">
        {/* Gender */}
        <div className="bmi-card">
          <div className="step">1</div>
          <h3>What is your sex?</h3>

          <div className="gender-row">
            <button
              className={gender === "male" ? "gender active" : "gender"}
              onClick={() => setGender("male")}
            >
              Male
            </button>

            <button
              className={gender === "female" ? "gender active" : "gender"}
              onClick={() => setGender("female")}
            >
              Female
            </button>
          </div>
        </div>

        {/* Age */}
        <div className="bmi-card">
          <div className="step">2</div>
          <h3>How old are you?</h3>
          <input
            type="number"
            placeholder="21"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="bmi-card">
          <div className="step">3</div>
          <h3>How tall are you? (cm)</h3>
          <input
            type="number"
            placeholder="170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* Weight */}
        <div className="bmi-card">
          <div className="step">4</div>
          <h3>How much do you weigh? (kg)</h3>
          <input
            type="number"
            placeholder="65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>

      {/* ===== ACTIVITY LEVEL ===== */}
      <div className="bmi-card activity-card">
        <div className="step">5</div>
        <h3>How active are you on a daily basis?</h3>

        <div className="activity-grid">
          {[
            { key: "light", label: "Lightly active" },
            { key: "moderate", label: "Moderately active" },
            { key: "active", label: "Active" },
            { key: "very", label: "Very Active" },
          ].map((item) => (
            <button
              key={item.key}
              className={
                activity === item.key ? "activity-btn active" : "activity-btn"
              }
              onClick={() => setActivity(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <button className="bmi-btn" onClick={calculateCalories}>
        Calculate your needed calorie intake
      </button>

      {result && <div className="bmi-result">{result}</div>}
    </div>
  );
}
