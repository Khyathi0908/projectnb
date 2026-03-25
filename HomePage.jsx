import "./App.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Build healthy habits you’ll love to keep</h1>

      <button
        className="nav-btn"
        onClick={() => navigate("/onboarding")}
      >
        Try NutriBuddy for free
      </button>

      <p className="hero-sub">Get your custom plan in minutes</p>

      <img
        src="https://i.ibb.co/x8FnCSVv/buddy.png"
        alt="NutriBuddy"
        className="hero-image"
      />
    </section>
  );
}
