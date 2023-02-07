import styled from "styled-components"

export default function Footer(){
    return(
        <DivFooter>
            MKS sistemas © Todos os direitos reservados
        </DivFooter>
    )
}

const DivFooter = styled.div`
    width: 100%;
    position: absolute;
    text-align: center;
    height: 34px;
    background: #EEEEEE;
    font-weight: 400;
    font-size: 12px;
    padding: 9px;
`
