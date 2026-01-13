import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Build Smarter Websites with AI</h1>
        <p>Design, develop, and deploy faster using AI-powered tools.</p>
        <button>Start Free</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="AI technology" />
      </div>
    </section>
  );
}
