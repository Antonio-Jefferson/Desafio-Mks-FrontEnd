import { useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";
import Footer from "./components/Foorter";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

export default function App() {
  const [cartMneu, setCartMenu] = useState<boolean>(false)
  return (
    <ConteinerApp>
        <Header setCartMenu={setCartMenu} />
        <HomePage />
        <Footer />
        {cartMneu === true ? <Cart setCartMenu={setCartMenu} /> : ""}
    </ConteinerApp>
  );
}

const ConteinerApp = styled.div`
  position: relative;
`