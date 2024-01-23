import { useContext, useEffect, useState } from "react";
import DavosFooter from "./components/navigation/DavosFooter";
import ShopNavbar from "./components/navigation/ShopNavbar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import MemberSignInModal from "./components/modals/MemberSignInModal";
import MemberWelcomeModal from "./components/modals/MemberWelcomeModal";
import UserContext from "./contexts/UserContext";
import {
  onAuthStateChanged,
  signInWithCustomToken,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import getUser from "./services/geUser";
import checkSessionCookie from "./services/checkSessionCookie";

function App() {
  const [user, setUser] = useState();
  const [modal, setModal] = useState();

  const resetModal = () => {
    setModal(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (tUser) => {
      if (tUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        getUser({ uid: tUser.uid }).then((data) => {
          data ? setUser({ ...data }) : {};
        });
      }
    });

    // If __session cookie exists then we use that to log user in, otherwise we
    // open the login modal after 2 second delay
    checkSessionCookie().then((data) => {
      if (data.customToken)
        setPersistence(auth, inMemoryPersistence).then(() =>
          signInWithCustomToken(auth, data.customToken)
        );
      else setTimeout(() => setSignInModal(), 4500);
    });
  }, []);

  const signInModal = () => {
    setModal("sign-in");
  };

  const setSignInModal = () => {
    setTimeout(() => {
      user
        ? () => {
            setModal("welcome");
          }
        : setModal("sign-in");
    }, 2500);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ShopNavbar signInModal={signInModal} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      {modal === "welcome" ? (
        <MemberWelcomeModal username={user.name.firstName} />
      ) : modal === "sign-in" ? (
        <MemberSignInModal resetModal={resetModal} />
      ) : (
        ""
      )}
      <DavosFooter />
    </UserContext.Provider>
  );
}

export default App;
