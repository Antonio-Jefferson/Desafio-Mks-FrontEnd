import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./Card"
import CardSkeleton from "./CardSkeleton"

export default function HomePage() {
    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(()=>{
        async function fetchData() {
            try {
                const url = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=ASC"
                const {data} = await axios.get(url);
                setProductsData(data.products)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <ConteinerHome>
            {isLoading && Array(6).fill(0).map(()=> <CardSkeleton/> )}
            {productsData.map((product, id) => <Card key={id} product={product}/>)}
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    max-width: 800px;
    width: 100%;
    height: 100vh;
    padding: 0px 12px;
    margin: 116px auto 160px auto;
`