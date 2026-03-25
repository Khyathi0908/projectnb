const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Nutri Buddy Backend is running 🚀");
});

function calculateCalories({ age, height, weight, gender, activity, goal }) {
  let bmr;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const activityMap = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };

  let calories = bmr * activityMap[activity];

  if (goal === "lose") calories -= 500;
  if (goal === "gain") calories += 400;

  return Math.round(calories);
}

app.post("/generate-diet", (req, res) => {
  const calories = calculateCalories(req.body);

  res.json({
    calories,
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});


