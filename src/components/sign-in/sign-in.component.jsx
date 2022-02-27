import React, { useState } from "react";
import { auth, signInWithGooglePopup } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const {email, password} = signInValue;
      await auth.signInWithEmailAndPassword(email, password);
      setSignInValue({
        email: "",
        password: "",
      });
    } catch(e) {
      console.error(e);
    }
  };

  const handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setSignInValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <FormInput
          label="email"
          handleOnChange={handleOnChange}
          name="email"
          type="email"
          value={signInValue["email"]}
          required
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={signInValue["password"]}
          handleOnChange={handleOnChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit" onClick={handleOnSubmit}>Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn={true}
            onClick={signInWithGooglePopup}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
