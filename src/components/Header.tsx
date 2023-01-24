import styled from "styled-components";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";


export default function Header() {
    return (
        <ConteinerHeader>
            <Logo>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </Logo>
            <Cart>
                <AiOutlineShoppingCart height={18} width={19}/>
                <span>0</span>
            </Cart>
        </ConteinerHeader>
    )
}

const ConteinerHeader = styled.div`
    height: 101px;
    background: #0F52BA;
    padding: 28px 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;


`
const Logo = styled.div`
    display: flex;
    color: #fff;
    gap: 4px;
    h1{
        font-weight: 600;
        font-size: 40px;
    }
    p{
        align-self: flex-end;
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 20px;
    }
`
const Cart = styled.div`
    width: 90px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`