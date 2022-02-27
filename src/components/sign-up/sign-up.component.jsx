import { useState } from "react";
import { auth, createFirebaseUser } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, displayName, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password does not match");
      return;
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createFirebaseUser(userAuth, { displayName });

      setNewUser({
        email: "",
        displayName: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="sign-up">
      <h1 className="title">Sign in with Email</h1>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Display Name"
          handleOnChange={handleOnChange}
          name="displayName"
          type="text"
          value={newUser["displayName"]}
          required
        />
        <FormInput
          label="Email"
          handleOnChange={handleOnChange}
          name="email"
          type="email"
          value={newUser["email"]}
          required
        />
        <FormInput
          label="Password"
          handleOnChange={handleOnChange}
          name="password"
          type="password"
          value={newUser["password"]}
          required
        />
        <FormInput
          label="Confirm Password"
          handleOnChange={handleOnChange}
          name="confirmPassword"
          type="password"
          value={newUser["confirmPassword"]}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
