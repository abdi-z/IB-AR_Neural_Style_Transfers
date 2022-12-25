import React, { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [avatarImgURL, setAvatarImgURL] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form: ", email);
    await signup(email, password, userName, phoneNumber, gender, avatarImgURL);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="on"
      />

      <label>UserName:</label>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        autoComplete="on"
      />

      <label>phoneNumber:</label>
      <input
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        autoComplete="on"
      />

      <label>Gender:</label>
      <input
        type="text"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
        autoComplete="on"
      />

      <label>Image:</label>
      <input
        type="text"
        onChange={(e) => setAvatarImgURL(e.target.value)}
        value={avatarImgURL}
        autoComplete="on"
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
