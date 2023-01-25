import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./Card"

export default function HomePage() {
    const [productsData, setProductsData] = useState([])
    useEffect(()=>{
        async function fetchData() {
            try {
                const url = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=ASC"
                const {data} = await axios.get(url);
                setProductsData(data.products)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <ConteinerHome>
            {productsData.map((product, id) => <Card key={id} product={product}/>)}
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    max-width: 946px;
    width: 100%;
    padding: 0px 12px;
    margin: 116px auto 66px auto;
`