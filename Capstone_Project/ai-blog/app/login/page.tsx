"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        "test1@gmail.com",
        "123456"
      );
      alert("Login success");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
