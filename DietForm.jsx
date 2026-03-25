import { useState } from "react";
import "./App.css";

const steps = [
  {
    key: "age",
    question: "What's your age group?",
    type: "grid",
    options: ["16–29", "30–49", "50–69", "70+"],
  },
  {
    key: "gender",
    question: "What's your sex?",
    type: "list",
    options: ["Male", "Female"],
  },
  {
    key: "goal",
    question: "What is your main goal?",
    type: "list",
    options: ["Lose", "Gain", "Maintain"],
  },
  {
    key: "activity",
    question: "What's your activity level?",
    type: "list",
    options: ["sedentary", "light", "moderate", "active"],
  },
];

export default function DietForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const currentStep = steps[stepIndex];
  const progress = (stepIndex / steps.length) * 100;

  const handleSelect = (value) => {
    const updated = { ...formData, [currentStep.key]: value };
    setFormData(updated);

    if (stepIndex === steps.length - 1) {
      generateDiet(updated);
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const generateDiet = async (data) => {
    const response = await fetch("http://localhost:5000/generate-diet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: 25,
        height: 165,
        weight: 60,
        gender: data.gender.toLowerCase(),
        activity: data.activity,
        goal:
          data.goal === "Lose"
            ? "lose"
            : data.goal === "Gain"
            ? "gain"
            : "maintain",
      }),
    });

    const result = await response.json();
    setResult(result.calories);
    setStepIndex(stepIndex + 1);
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {stepIndex === steps.length ? (
        <div className="final">
          <h1>Your Daily Calories</h1>
          <h2>{result} kcal</h2>
          <p>This is your recommended daily intake.</p>
          <button className="primary">Start My Plan</button>
        </div>
      ) : (
        <>
          <h1 className="title">{currentStep.question}</h1>

          {currentStep.type === "grid" && (
            <div className="grid">
              {currentStep.options.map((opt) => (
                <button
                  key={opt}
                  className="card"
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {currentStep.type === "list" && (
            <div className="list">
              {currentStep.options.map((opt) => (
                <button
                  key={opt}
                  className="list-item"
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
