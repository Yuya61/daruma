import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Logo from "./assets/Logo.svg";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./Home";
import { News } from "./News";
import { Info } from "./Info";
import { Menu } from "./Menu";
import { Recruit } from "./Recruit";
import { Rent } from "./Rent";
import { NoMatch } from "./NoMatch";
import { LayoutNav } from "./components/LayoutNav";
import { NavigationBar } from "./components/NavigationBar";
import MenuItem from "./MenuItem";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        {/* <React.Fragment> */}
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Link to="/">
              <div className="d-none d-lg-block">
                <Image className="HomeLogo" src={Logo} alt="HomeLogo" fluid />
              </div>
            </Link>
          </Col>
        </Row>
        <NavigationBar />
        <LayoutNav>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/news" component={News} />
            <Route path="/menu" component={Menu} exact />
            <Route path="/menu/:id" component={MenuItem} />
            <Route path="/info" component={Info} />
            <Route path="/recruit" component={Recruit} />
            <Route path="/rent" component={Rent} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </LayoutNav>
        {/* </React.Fragment> */}
      </Router>
    );
  }
}

export default App;
