import React from "react";
import { Container, Row, Col } from "../Grid"
import styled from "styled-components";

const Jumbo = styled.div `
background-color: #1F6CC7;
text-align: center;
color: white;
margin-bottom: 1rem;
`
const ImageWrapper = styled.div `
width: 100%;
height: 150px;
overflow: hidden;
position: relative;
`
const Image = styled.img `
height: 100%;
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
`

function Jumbotron({children}) {
    return(
        <Jumbo>
            <Container>
            <Row>
                <Col size="md-2">
                    <ImageWrapper>
                    <Image src="https://cdn.dribbble.com/users/379146/screenshots/2332418/2.gif" alt="bookshelf" />
                    </ImageWrapper>
                </Col>
                
                <Col size="md-8">
                    {children}
                </Col>
                
                <Col size="md-2">
                    <ImageWrapper>
                    <Image src="https://cdn.dribbble.com/users/379146/screenshots/2332418/2.gif" alt="bookshelf" />
                    </ImageWrapper>
                </Col>

            </Row>
            </Container>
        </Jumbo>

    )
}

export default Jumbotron;