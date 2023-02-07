import styled from "styled-components"
import ProductCart from "./ProductCart"
import { MdCancel } from "@react-icons/all-files/md/MdCancel"
import { useEffect, useState } from "react"
interface Products{
    id: number
    name: string
    description: string
    price: number
    photo: string
  }
interface SetProps {
    setCartMenu: React.Dispatch<React.SetStateAction<boolean>>
    itensCart: number[]
    setItensCart: React.Dispatch<React.SetStateAction<number[]>>
    productsData:Products[]
}
export default function Cart({ setCartMenu, itensCart, productsData }: SetProps) {
    const [filterItens, setFilterItens] = useState<Products[]>([])
    const [total, setTotal]= useState(0)
    useEffect(() => {
        const filtered = productsData.filter((item) => itensCart.includes(item.id));
        setFilterItens(filtered);
        filtered.forEach((item) => {
            if (itensCart.includes(item.id)) {
                setTotal(total + Number(item.price));
            }
        });
      }, [itensCart, productsData]);
    return (
        <ConteinerCart>
            <Top>
                <p>Carrinho de compras</p>
                <MdCancel onClick={() => setCartMenu(false)} fontSize={38} />
            </Top>
            <ProductList>
                {filterItens.map((item, id) => <ProductCart key={id} item={item} />)}
            </ProductList>
            <Footer>
                <div>
                    <p>Total</p>
                    <span>R${total}</span>
                </div>
                <Finalize>
                    <h1>Finalizar Compra</h1>
                </Finalize>
            </Footer>
        </ConteinerCart>
    )
}

const ConteinerCart = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 486px;
    height: 100vh;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    p{
        font-weight: 700;
        font-size: 37px;
        color: #fff;
    }
`
const ProductList = styled.ul`
    height: 650px;
    padding: 12px 46px;
`
const Footer = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 34px;
        font-weight: 700;
        font-size: 28px;
        color: #FFF;
    
    }
`
const Finalize = styled.div`
    padding: 39px;
    height: 97px;
    background: #000000;
    h1{
        display: flex;
        margin: auto;
        font-weight: 700;
        font-size: 28px;
        color: #FFF;
    }
    
`