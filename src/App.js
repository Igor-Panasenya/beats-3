import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Sponsor from "./components/sponsors/Sponsor";
import Specs from "./components/specs/Specs";
import Case from "./components/case/Case";
import Discount from "./components/dicsount/Discount";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import ButtonScrollUp from "./components/button-scroll-up/ButtonScrollUp";
import React, {useEffect, createContext, useState} from "react";
import Cart from "./components/cart/Cart";
import DarkBG from "./components/dark-bg/DarkBG";
import UseTheme from "./use-theme/UseTheme";

export const VisibleCartContext = createContext();

function App() {

    const [isVisibleCart, setIsVisibleCart] = useState(false);

    // scroll for background navbar and button scrollUp
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const [scroll, setScroll] = React.useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

  return (

          <VisibleCartContext.Provider value={ {isVisibleCart, setIsVisibleCart} }>

              <div className="App">
                  <Header scroll={scroll} />

                  <main>
                      <Banner />
                      <Sponsor />
                      <Specs />
                      <Case />
                      <Discount />
                      <Products />
                  </main>

                  <Cart />
                  {isVisibleCart && <DarkBG />}
                  <Footer />
                  <ButtonScrollUp scroll={scroll} />
              </div>

          </VisibleCartContext.Provider>
  );
}

export default App;
