import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import { useState } from 'react';
import MainPage from './components/MainPage';
import ArtistPage from "./components/ArtistPage";
import ArtPage from "./components/ArtPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import GalleryPage from "./components/GalleryPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar/Navbar"


function App() {

  const storedUser = JSON.parse(localStorage.getItem('storedUser'));
  const [user, setUser] = useState(storedUser);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <MainPage />
            <Navbar />
          </Route>

          <Route path="/sign-up" exact>
            <SignUpPage />
          </Route>

          <Route path="/sign-in" exact>
            <SignInPage />
          </Route>

          <Route path="/artist" exact>
            <ArtistPage />
            <Navbar />
          </Route>

          <Route path="/gallery" exact>
            <GalleryPage />
            <Navbar />
          </Route>

          <Route path="/art" exact>
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
    </UserContext.Provider>
  );
}

export default App;
