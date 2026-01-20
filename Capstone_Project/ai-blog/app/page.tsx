"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h1 style={{ fontSize: 42 }}>🤖 AI Blog Platform</h1>
      <p style={{ maxWidth: 500, marginTop: 10, color: "#555" }}>
        Generate blogs using Artificial Intelligence, manage your content,
        and publish instantly.
      </p>

      <div style={{ marginTop: 30, display: "flex", gap: 20 }}>
        <Link href="/login">
          <button style={btnStyle}>Login</button>
        </Link>

        <Link href="/register">
          <button style={{ ...btnStyle, background: "#555" }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "12px 24px",
  background: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 16,
};
