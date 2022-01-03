import React from 'react'
import { Container} from "react-bootstrap";

const CardsContainer = ({children}) => {
    return (
        <Container fluid className="mt-3">
            {children}
        </Container>
    )
}

export default CardsContainer
