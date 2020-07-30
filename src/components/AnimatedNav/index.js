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
    <RootDiv style={styles.fill}>
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
      <div style={styles.content}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              <Route path="/about" children={<AboutPage />} />
              <Route path="/" children={<Homepage />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </RootDiv>
  );
}

export default AnimatedNav;

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};
