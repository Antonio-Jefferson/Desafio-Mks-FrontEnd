import styled from "styled-components";
import Cart from "./components/Cart";
import Footer from "./components/Foorter";
import Header from "./components/Header";
import HomePage from "./components/HomePage";


export default function App() {
  return (
    <ConteinerApp>
      <Header/>
      <HomePage />
      <Footer/>
      <Cart/>
    </ConteinerApp>
  );
}

const ConteinerApp = styled.div`
  position: relative;
`