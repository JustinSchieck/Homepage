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
import Homepage from '../../containers/Homepage';
import AboutPage from "../../containers/AboutPage";

const RootDiv = styled.div`
  height: 100vh;
  
`;

const RouteDiv = styled.div`
  position: relative;
  
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

const AnimatedNav = () => {
  let location = useLocation();

  return (
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
      <RouteDiv>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames='pageSlider'
            timeout={500}
            mountOnEnter={false}
            unmountOnExit
          >
            <div className='pageSlider'>
              <Switch location={location}>
                <Route path="/about" children={<AboutPage />} />
                <Route path="/" children={<Homepage />} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </RouteDiv>
    </RootDiv>
  );
}

export default AnimatedNav;
