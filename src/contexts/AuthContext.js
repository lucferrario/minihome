import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase/compat/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("user");
  const [pfp, setPfp] = useState("AS");
  const navigate = useNavigate();
  let user;

  const signup = async (email, password) => {
    user = await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully created user as " + email, user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const cbsignup = async (email, password, fname, lname) => {
    user = await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully created user as " + email, user);
        cblogin(email, password, fname, lname);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const login = async (email, password) => {
    user = await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully logged in as " + email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const cblogin = async (email, password, fname, lname) => {
    user = await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully logged in as " + email);
        cbaddUserData(fname, lname, email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addUserData = async (fname, lname, email) => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: fname + " " + lname,
      email: email,
    }).then(console.log("Created doc successfully"));
  };

  const cbaddUserData = async (fname, lname, email) => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: fname + " " + lname,
      email: email,
    }).then(() => {
      console.log("Created doc successfully");
      navigate("/");
    });
  };

  const getUserData = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);

    getDoc(docRef).then((doc) => {
      setUserName(doc.data().name);
    });

    let n = userName.split(" ");
    let f = n[0];
    let l = n[1];

    let ff = f.split("");
    let ll = l.split("");

    setPfp(ff[0] + ll[0]);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Checking auth status...");
        setCurrentUser(user);
        setLoading(false);
      } else {
        // User is signed out
        console.log("User is not signed");
      }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  const value = {
    currentUser,
    userName,
    pfp,
    signup,
    login,
    logout,
    cbsignup,
    cblogin,
    addUserData,
    getUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
