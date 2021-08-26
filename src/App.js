import React from "react";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import "./App.css";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Router>
            <Profile />
          </Router>
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content cointainer_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
