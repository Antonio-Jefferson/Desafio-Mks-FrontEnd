import styled from "styled-components"
import Card from "./Card"

export default function HomePage() {
    return (
        <ConteinerHome>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    max-width: 946px;
    margin: 116px auto 66px auto;
`