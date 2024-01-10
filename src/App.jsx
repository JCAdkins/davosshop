import { useContext, useEffect, useState } from "react";
import DavosFooter from "./components/navigation/DavosFooter";
import ShopNavbar from "./components/navigation/ShopNavbar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import MemberSignInModal from "./components/modals/MemberSignInModal";
import UserContext from "./contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import getUser from "./services/geUser";

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
          console.log("data: ", data);
          data ? setUser({ ...data }) : {};
        });
      }
    });
  }, []);

  const setSignInModal = () => {
    setTimeout(() => {
      user ? setModal("welcome") : setModal("sign-in");
    }, 2500);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ShopNavbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Main setSignInModal={setSignInModal} />}
        />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      {modal === "welcome" ? (
        <MemberWelcomeModal />
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
