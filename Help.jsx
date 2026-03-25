import { useState } from "react";
import "./Help.css";

const helpArticles = [
  {
    id: 1,
    title: "How is my calorie goal calculated?",
    content:
      "We calculate your calorie goal using your age, weight, height and activity level. This is based on BMR and TDEE formulas.",
  },
  {
    id: 2,
    title: "Why am I not losing weight?",
    content:
      "Weight loss requires a consistent calorie deficit along with proper sleep and hydration.",
  },
  {
    id: 3,
    title: "Can I customize my meal plan?",
    content:
      "Yes! You can adjust diet preferences like vegetarian or high-protein plans.",
  },
  {
    id: 4,
    title: "What is BMI?",
    content:
      "BMI is Body Mass Index. It estimates body fat based on height and weight.",
  },
];

function Help() {
  const [search, setSearch] = useState("");

  const filteredArticles = helpArticles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="help-container">
      <h1 className="help-title">How can we help you?</h1>

      <input
        type="text"
        placeholder="Search help topics..."
        className="help-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="help-results">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="help-card">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Help;