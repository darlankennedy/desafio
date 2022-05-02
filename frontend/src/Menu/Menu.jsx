import { Navbar,
     Container,
     Nav
     } from 'react-bootstrap'
import React from "react";


export default props => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark' className='mt-1 mb-3 rounded'>
                <Container fluid>

                    <Navbar.Brand href="/">
                     <i className='fa fa-calendar-check-o'></i> Desafio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/compras">Compras</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}