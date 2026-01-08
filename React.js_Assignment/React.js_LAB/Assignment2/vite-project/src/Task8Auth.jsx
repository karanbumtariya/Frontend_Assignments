import { useState } from "react";
import { auth } from "./Task8Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const register = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    setUser(res.user);
  };

  const login = async () => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUser(res.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <h2>Firebase Auth</h2>

      {!user ? (
        <>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
        </>
      ) : (
        <>
          <h3>Welcome: {user.email}</h3>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Auth;
