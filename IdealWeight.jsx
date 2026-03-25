import { useState } from "react";
import "./App.css";

export default function IdealWeight() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateIdealWeight = () => {
    if (!height) {
      setResult("Enter your height");
      return;
    }

    let ideal = 0;

    // Devine formula
    if (gender === "male") ideal = 50 + 0.9 * (height - 152);
    else if (gender === "female") ideal = 45.5 + 0.9 * (height - 152);

    setResult(`Your ideal weight is ${ideal.toFixed(1)} kg`);
  };

  return (
    <div className="bmi-wrapper">

      <h1 className="bmi-title">Ideal Body Weight Calculator</h1>
      <p className="bmi-sub">
        For accurate calculation, we need some basic info about you
      </p>

      <div className="bmi-grid-3">

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

      </div>

      <button className="bmi-btn" onClick={calculateIdealWeight}>
        Calculate your ideal weight
      </button>

      {result && <div className="bmi-result">{result}</div>}
    </div>
  );
}
