import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./Task8Firebase";

const GoogleLogin = () => {
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user);
  };

  return <button onClick={loginWithGoogle}>Login with Google</button>;
};

export default GoogleLogin;
