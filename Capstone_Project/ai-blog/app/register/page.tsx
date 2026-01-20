"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";


export default function Register() {
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        "test1@gmail.com",
        "123456"
      );
      alert("Registered");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register Page</h2>
      <button onClick={register}>Register</button>
    </div>
  );
}
