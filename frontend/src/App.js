// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component
import IngresarPaciente from "./Components/ingresar-paciente.component";
import EditClient from "./Components/edit-client.component";
import ClientList from "./Components/pacientes-lista.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/ingresar-paciente"} 
                  className="nav-link">
                  RBR App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/ingresar-paciente"} 
                    className="nav-link">
                    Ingresar Paciente
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/pacientes-lista"} 
                    className="nav-link">
                    Lista de pacientes
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={ClientList} />
                  <Route path="/ingresar-paciente" component={IngresarPaciente} />
                  <Route path="/edit-client/:id" component={EditClient} />
                  <Route path="/pacientes-lista" component={ClientList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;