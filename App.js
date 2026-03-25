import React, { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const selectOption = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const toggleMulti = (key, value) => {
    const arr = data[key] || [];
    if (arr.includes(value)) {
      setData({ ...data, [key]: arr.filter((v) => v !== value) });
    } else {
      setData({ ...data, [key]: [...arr, value] });
    }
  };

  const progress = (step / 7) * 100;

  return (
    <div className="page">
      <div className="card">

        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* STEP 1 - AGE */}
        {step === 1 && (
          <>
            <h2 className="title">What's your age group?</h2>

            <div className="grid">
              {["16-29", "30-49", "50-69", "70+"].map((age) => (
                <div
                  key={age}
                  className={`age-card ${data.age === age ? "active" : ""}`}
                  onClick={() => selectOption("age", age)}
                >
                  {age}
                </div>
              ))}
            </div>

            <button className="btn" disabled={!data.age} onClick={() => setStep(2)}>
              Next
            </button>
          </>
        )}

        {/* STEP 2 - GENDER */}
        {step === 2 && (
          <>
            <h2 className="title">What's your sex?</h2>

            <div className="row">
              {["Female", "Male"].map((g) => (
                <div
                  key={g}
                  className={`option ${data.gender === g ? "active" : ""}`}
                  onClick={() => selectOption("gender", g)}
                >
                  {g}
                </div>
              ))}
            </div>

            <button className="btn" disabled={!data.gender} onClick={() => setStep(3)}>
              Next
            </button>
          </>
        )}

        {/* STEP 3 - GOAL */}
        {step === 3 && (
          <>
            <h2 className="title">What's your main goal?</h2>

            {["Lose weight", "Maintain weight", "Gain weight", "Build muscle"].map((goal) => (
              <div
                key={goal}
                className={`option ${data.goal === goal ? "active" : ""}`}
                onClick={() => selectOption("goal", goal)}
              >
                {goal}
              </div>
            ))}

            <button className="btn" disabled={!data.goal} onClick={() => setStep(4)}>
              Next
            </button>
          </>
        )}

        {/* STEP 4 - REASON */}
        {step === 4 && (
          <>
            <h2 className="title">
              Why do you want to {data.goal?.toLowerCase()}?
            </h2>

            {[
              "To feel more confident",
              "To improve my health",
              "To increase my fitness level",
              "To prepare for a special event"
            ].map((reason) => (
              <div
                key={reason}
                className={`option ${data.reason === reason ? "active" : ""}`}
                onClick={() => selectOption("reason", reason)}
              >
                {reason}
              </div>
            ))}

            <button className="btn" disabled={!data.reason} onClick={() => setStep(5)}>
              Next
            </button>
          </>
        )}

        {/* STEP 5 - ADDITIONAL */}
        {step === 5 && (
          <>
            <h2 className="title">Anything else you want to improve?</h2>

            {[
              "Better eating habits",
              "Sleep improvement",
              "Stronger immunity",
              "More energy daily"
            ].map((item) => (
              <div
                key={item}
                className={`option ${
                  data.additional?.includes(item) ? "active" : ""
                }`}
                onClick={() => toggleMulti("additional", item)}
              >
                {item}
              </div>
            ))}

            <button className="btn" onClick={() => setStep(6)}>
              Next
            </button>
          </>
        )}

        {/* STEP 6 - ACTIVITY */}
        {step === 6 && (
          <>
            <h2 className="title">How active are you daily?</h2>

            {[
              "Mostly sitting",
              "Lightly active",
              "Moderately active",
              "Very active"
            ].map((activity) => (
              <div
                key={activity}
                className={`option ${
                  data.activity === activity ? "active" : ""
                }`}
                onClick={() => selectOption("activity", activity)}
              >
                {activity}
              </div>
            ))}

            <button className="btn" disabled={!data.activity} onClick={() => setStep(7)}>
              Generate My Plan
            </button>
          </>
        )}

        {/* STEP 7 - FINAL PLAN */}
        {step === 7 && (
          <div className="final-screen">
            <h1 className="final-title">🎯 Your Basic Diet Plan</h1>

            <div className="plan-box">
              {data.goal === "Lose weight" && (
                <>
                  <h3>Daily Calories: 1600–1800 kcal</h3>
                  <ul>
                    <li>🥣 Oats + Fruits (Breakfast)</li>
                    <li>🍛 Brown Rice + Dal + Veg (Lunch)</li>
                    <li>🥗 Fruits / Sprouts (Snack)</li>
                    <li>🍲 Roti + Sabzi (Dinner)</li>
                  </ul>
                </>
              )}

              {data.goal === "Maintain weight" && (
                <>
                  <h3>Daily Calories: 2000–2200 kcal</h3>
                  <ul>
                    <li>🥚 Eggs / Oats (Breakfast)</li>
                    <li>🍛 Rice + Dal + Paneer</li>
                    <li>🥜 Nuts + Fruits</li>
                    <li>🍲 Chapati + Veg</li>
                  </ul>
                </>
              )}

              {data.goal === "Gain weight" && (
                <>
                  <h3>Daily Calories: 2500+ kcal</h3>
                  <ul>
                    <li>🥞 Peanut butter toast</li>
                    <li>🍛 Rice + Chicken / Paneer</li>
                    <li>🥤 Banana shake</li>
                    <li>🍲 Chapati + Sabzi + Curd</li>
                  </ul>
                </>
              )}

              {data.goal === "Build muscle" && (
                <>
                  <h3>Daily Calories: 2800+ kcal</h3>
                  <ul>
                    <li>🥚 Eggs + Oats</li>
                    <li>🍗 Chicken / Paneer + Rice</li>
                    <li>🥤 Protein Shake</li>
                    <li>🥗 Veg + Roti + Curd</li>
                  </ul>
                </>
              )}
            </div>

            <button className="btn">Start My Journey</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;