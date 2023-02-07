import styled from "styled-components";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
interface iProductsProps {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export default function ProductCart({ item }: { item: iProductsProps }) {
  return (
    <ConteinerProduct>
      <Img>
        <img src={item.photo} alt={item.name} />
      </Img>
      <DivInfo>{item.name}</DivInfo>
      <DivQtd>
        <p>Qtd:</p>
        <div>
          <span>-</span>
          <span>0</span>
          <span>+</span>
        </div>
      </DivQtd>
      <div>R${item.price}</div>
      <Cancel>
        <MdCancel fontSize={23} />
      </Cancel>
    </ConteinerProduct>
  );
}

const ConteinerProduct = styled.li`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 379px;
  height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 23px;
  div {
    font-weight: 700;
    font-size: 14px;
  }
`;
const Cancel = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
`;
const Img = styled.div`
  width: 70px;
  height: 61px;
  img {
    width: 100%;
  }
`;
const DivInfo = styled.div`
  max-width: 123px;
  font-weight: 400;
  font-size: 13px;
  color: #2c2c2c;
`;
const DivQtd = styled.div`
  p {
    font-weight: 400;
    font-size: 10px;
  }
  div {
    width: 55px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    padding: 2px;
    font-weight: 400;
    font-size: 12px;
    span:nth-child(2) {
      height: 15px;
      padding: 0px 3px;
      border-left: 0.3px solid #bfbfbf;
      border-right: 0.3px solid #bfbfbf;
    }
  }
`;
