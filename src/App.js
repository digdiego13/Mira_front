import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import QuantityContext from "./contexts/QuantityContext";
import { useState } from 'react';
import MainPage from './components/MainPage/MainPage';
import ArtPage from "./components/ArtPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import GalleryPage from "./components/GalleryPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"

function App() {

  const storedUser = JSON.parse(localStorage.getItem('storedUser'));
  const [user, setUser] = useState(storedUser);
  const [cont, setCont] = useState(1);  
  
  return (
    <UserContext.Provider value={{user, setUser}}>
    <QuantityContext.Provider value={{cont, setCont}}>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <MainPage />
            <Navbar />
            <Footer />
          </Route>

          <Route path="/sign-up" exact>
            <SignUpPage />
          </Route>

          <Route path="/sign-in" exact>
            <SignInPage />
          </Route>

          <Route path="/gallery/:idGallery" exact>
            <GalleryPage />
            <Navbar />
          </Route>

          <Route path="/art/:idArt" exact>
            <ArtPage />
            <Navbar />
          </Route>

          <Route path="/cart" exact>
            <CartPage />
            <Navbar />
          </Route>

          <Route path="/checkout" exact>
            <CheckoutPage />
            <Navbar />
          </Route>
        </Switch>
      </BrowserRouter>
    </QuantityContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
