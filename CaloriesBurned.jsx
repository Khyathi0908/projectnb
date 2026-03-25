import { useState } from "react";
import "./App.css";

export default function CaloriesBurned() {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const MET = {
    walking: 3.8,
    running: 7.5,
    swimming: 6,
    cycling: 6.8,
  };

  const calculateBurned = () => {
    if (!exercise || !duration || !weight) {
      setResult("Please fill required fields");
      return;
    }

    const met = MET[exercise.toLowerCase()] || 5;

    const calories = Math.round(
      (met * 3.5 * weight * duration) / 200
    );

    setResult(`You burned approximately ${calories} kcal`);
  };

  return (
    <div className="bmi-wrapper">
      <h1 className="bmi-title">Calories Burned Calculator</h1>
      <p className="bmi-sub">
        For accurate calculation, we need some basic info about you
      </p>

      {/* STEP 1 — SEARCH */}
      <div className="bmi-card search-card">
        <div className="step">1</div>
        <h3>Enter an exercise to calculate your calories burned</h3>

        <input
          type="text"
          placeholder="Search for exercise or activity"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />

        <div className="quick-row">
          {["Walking", "Running", "Swimming", "Cycling"].map((item) => (
            <button
              key={item}
              className="quick-btn"
              onClick={() => setExercise(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* STEP 2-5 GRID */}
      <div className="bmi-grid-2">
        {/* Duration */}
        <div className="bmi-card">
          <div className="step">2</div>
          <h3>Activity duration</h3>
          <input
            type="number"
            placeholder="30 (minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* Gender */}
        <div className="bmi-card">
          <div className="step">3</div>
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
          <div className="step">4</div>
          <h3>How old are you?</h3>
          <input
            type="number"
            placeholder="21"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Weight */}
        <div className="bmi-card">
          <div className="step">5</div>
          <h3>How much do you weigh? (kg)</h3>
          <input
            type="number"
            placeholder="65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>

      {/* CTA */}
      <button className="bmi-btn" onClick={calculateBurned}>
        Calculate calories burned
      </button>

      {result && <div className="bmi-result">{result}</div>}
    </div>
  );
}
