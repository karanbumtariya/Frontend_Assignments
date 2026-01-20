"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const router = useRouter();

  // 🔥 AI GENERATE FUNCTION (Session-7)
  const generateWithAI = async () => {
    if (!title.trim()) {
      alert("Pehle blog title likho");
      return;
    }

    try {
      setAiLoading(true);

      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      setContent(data.content);
    } catch (err) {
      alert("AI generation failed");
    } finally {
      setAiLoading(false);
    }
  };

  const submit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title aur content dono required hai");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      alert("Login required");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "blogs"), {
        title,
        content,
        userId: user.uid,
        createdAt: new Date(),
      });

      alert("Blog created successfully");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "50px auto",
        padding: 30,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>✍️ Create Blog</h2>

      <input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 15,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={generateWithAI}
        disabled={aiLoading}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 15,
          background: "#10b981",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {aiLoading ? "Generating with AI..." : "Generate Content with AI 🤖"}
      </button>

      <textarea
        placeholder="Blog Content"
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 20,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={submit}
        disabled={loading}
        style={{
          width: "100%",
          padding: 12,
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {loading ? "Publishing..." : "Publish Blog"}
      </button>
    </div>
  );
}
