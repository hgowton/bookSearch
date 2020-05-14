import React from "react";
import Nav from "../components/Nav";
import {Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return(
        <div>
            <Nav />
            <Jumbotron>
            <Container fluid>
                <h1> 404 Page Not Found</h1>
                <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
                </h1>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default NoMatch;