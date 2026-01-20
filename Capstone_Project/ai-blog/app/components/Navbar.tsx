"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav
      style={{
        background: "white",
        padding: "14px 30px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>📝 AI Blog</h2>

      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/create-blog">Create Blog</Link>

        <button
          onClick={logout}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
