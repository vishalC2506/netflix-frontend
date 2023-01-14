import React, { useEffect } from "react";
import "./App.css";
import Homscreen from "./Components/Homescreen/Homscreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";
import Login from "./Components/Login/Login";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./Redux/userSlice";
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("user auth" + userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<Homscreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
