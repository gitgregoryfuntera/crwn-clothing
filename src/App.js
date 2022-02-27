import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { useEffect } from "react";
import { auth, createFirebaseUser } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/users/user.actions";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribeFirebaseUserStateChanged = auth.onAuthStateChanged(
      async (user) => {
        if (user) {
          const userRef = await createFirebaseUser(user);
          userRef.onSnapshot((snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot,
            });
          });
        }

        if (!user) {
          setCurrentUser(null);
        }
      }
    );
    return () => unsubscribeFirebaseUserStateChanged();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route exact path="/signin"  element={
          currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
        }/>
      </Routes>
    </div>
  );
}

const mapToStateProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapToDispatch = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapToStateProps, mapToDispatch)(App);
