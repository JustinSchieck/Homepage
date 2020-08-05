import React from "react";
import styled from 'styled-components';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import Homepage from './containers/Homepage';
import AboutPage from "./containers/AboutPage";

const RootDiv = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  right: 50px;
  top: 45vh;
  a > div {
    text-decoration: none;
    color: black !important;
  }
`;

const ArrowRight = styled(ArrowForward)`
  position: fixed;
  right: 50px;
  top: 45vh;
`;

const ArrowLeft = styled(ArrowBack)`
  position: fixed;
  left: 50px;
  top: 45vh;
`;

const RouteLink = styled(Link)`
  color: black;
`;

const routes = [
  { path: '/', name: 'Home', Component: Homepage },
  { path: '/about', name: 'About', Component: AboutPage }
]



function App() {
  return (
    <Router>
      <RootDiv>
        <Overlay>
          <RouteLink to="/about">
            <ArrowRight
              style={{ marginTop: "8px", fontSize: "3rem" }}
            />
          </RouteLink>
          <RouteLink to="/">
            <ArrowLeft
              style={{ marginTop: "8px", fontSize: "3rem" }}
            />
          </RouteLink>
        </Overlay>
        <Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </RootDiv>
    </Router>
  );
}

export default App;
