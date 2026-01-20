"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      try {
        const q = query(
          collection(db, "blogs"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const snap = await getDocs(q);
        setBlogs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Firestore index missing. Check Firebase console link.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const deleteBlog = async (id: string) => {
    if (!confirm("Delete this blog?")) return;
    await deleteDoc(doc(db, "blogs", id));
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h3>Loading your blogs...</h3>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1000, margin: "40px auto", padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>📚 My Blogs</h1>

      {blogs.length === 0 && (
        <div
          style={{
            padding: 40,
            background: "white",
            borderRadius: 12,
            border: "1px dashed #ccc",
            textAlign: "center",
          }}
        >
          No blogs found. Create your first blog ✍️
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              background: "white",
              borderRadius: 14,
              padding: 20,
              boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: 8 }}>{blog.title}</h3>

            <p style={{ color: "#555", minHeight: 60 }}>
              {blog.content}
            </p>

            <small style={{ color: "#888" }}>
              {blog.createdAt?.toDate?.().toLocaleString()}
            </small>

            <br /><br />

            <button
              onClick={() => deleteBlog(blog.id)}
              style={{
                background: "#e53935",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
