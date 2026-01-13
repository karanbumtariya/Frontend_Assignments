export default function Features() {
  const data = [
    "AI Assisted Design",
    "Faster Development",
    "Bug-Free Code"
  ];

  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
