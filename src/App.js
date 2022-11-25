import ButtonScrollUp from "./components/button-scroll-up/ButtonScrollUp";
import React, {useEffect, createContext, useState} from "react";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import {Route, Routes} from "react-router-dom";

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
                  <Routes>
                      <Route path="/" element={<Layout isVisibleCart={isVisibleCart} scroll={scroll} />} >
                          <Route index element={<MainPage />} />
                          <Route path="*" element={<NotFoundPage />} />
                      </Route>
                  </Routes>

                  <ButtonScrollUp scroll={scroll} />
              </div>

          </VisibleCartContext.Provider>
  );
}

export default App;
