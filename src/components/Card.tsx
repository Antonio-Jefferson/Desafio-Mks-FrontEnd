import styled from "styled-components"
import imgIphone from "../img/iphone-x.png"
import {RiShoppingBag3Line} from "@react-icons/all-files/ri/RiShoppingBag3Line"
export default function Card() {
    return (
        <ConteinerCard>
            <div>
                <img src={imgIphone} alt="iphone" />
                <InfPrice>
                    <p>Apple iPhoneX 128GB</p>
                    <span>R$899</span>
                </InfPrice>
                <Description>Redesigned from scratch and completely revised.</Description>
            </div>
           
            <AddCart> 
                <RiShoppingBag3Line color="#fff"/>
                COMPRAR
            </AddCart>
        </ConteinerCard>
    )
}

const ConteinerCard = styled.div`
    width: 217px;
    height: 285px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        padding: 8px;
    }
`
const InfPrice = styled.div`
    display: flex;
    gap: 9px;
    p{
        font-weight: 400;
        font-size: 16px;
        color: #2C2C2C;
    }
    span{
        width: 60px;
        height: 26px;
        background: #373737;
        border-radius: 5px;
        text-align: center;
        padding: 4px;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
    }
`
const Description = styled.p`
        font-weight: 300;
        font-size: 10px;
        color: #2C2C2C;
`
const AddCart = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;

    font-weight: 600;
    font-size: 14px;
    color: #fff;
`