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


function App() {

  const storedUser = JSON.parse(localStorage.getItem('storedUser'));
  const [user, setUser] = useState(storedUser);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/sign-up" exact>
            <SignUpPage />
          </Route>

          <Route path="/sign-in" exact>
            <SignInPage />
          </Route>

          <Route path="/artist" exact>
            <ArtistPage />
          </Route>

          <Route path="/gallery/idGallery" exact>
            <GalleryPage />
          </Route>

          <Route path="/art" exact>
            <ArtPage />
          </Route>

          <Route path="/cart" exact>
            <CartPage />
          </Route>

          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
