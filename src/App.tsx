import { useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

interface Products{
  id: number
  name: string
  description: string
  price: number
  photo: string
}
const App: React.FC = () => {
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  const [itensCart, setItensCart] = useState<number[]>([]);
  const [productsData, setProductsData] = useState<Products[]>([])
console.log(productsData)
console.log(itensCart)
  return (
    <ConteinerApp>
        <Header setCartMenu={setCartMenu} />
        <HomePage itensCart={itensCart} setItensCart={setItensCart} setProductsData={setProductsData} productsData={productsData} />
        <Footer />
        {cartMenu && <Cart productsData={productsData} itensCart={itensCart} setItensCart={setItensCart}  setCartMenu={setCartMenu} />}
    </ConteinerApp>
  );
}

const ConteinerApp = styled.div`
  position: relative;
`

export default App;
