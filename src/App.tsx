import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>New Header</h1>
            <div>
                <img src="" alt="Alt text for image" />
            </div>
            <div>
                List of Elements:
                <ul>
                    <li>List Element 1</li>
                    <li>List Element 2</li>
                    <li>List Element 3</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>Column 1</Col>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <Col>Column 2</Col>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Row>
                </Container>
            </div>
            <p>Name: Alexander Clawson</p>
        </div>
    );
}

export default App;
