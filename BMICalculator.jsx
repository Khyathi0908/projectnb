import { useState } from "react";
import "./App.css";

export default function BMICalculator() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Enter height and weight");
      return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult(`BMI: ${bmi} (${category})`);
  };

  return (
    <div className="bmi-wrapper">

      <h1 className="bmi-title">Body Mass Index (BMI) Calculator</h1>
      <p className="bmi-sub">
        For accurate calculation, we need some basic info about you
      </p>

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

      <button className="bmi-btn" onClick={calculateBMI}>
        Calculate your BMI
      </button>

      {result && <div className="bmi-result">{result}</div>}
    </div>
  );
}
