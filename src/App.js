import React, { useState } from "react";

// Router
import { HashRouter as Router, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";

// components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBarMenuItems from "./components/SideBarMenuItems";

// UI
import { Sidebar, Menu } from "semantic-ui-react";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/services", name: "Services", Component: Services },
  { path: "/staff", name: "Staff", Component: Staff },
  { path: "/resources", name: "Resources", Component: Resources },
  { path: "/contact", name: "Contact", Component: Contact }
];

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Router>
      <Route>
        <Sidebar.Pushable as='div'>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
            pointing
          >
            <SideBarMenuItems setVisible={e => setVisible(e)} routes={routes} />
          </Sidebar>

          <Sidebar.Pusher>
            <NavBar
              routes={routes}
              sideBarIsOpen={visible}
              setVisible={e => setVisible(e)}
            />

            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames='page'
                    unmountOnExit
                  >
                    <div className='page' id='scrollableContainer'>
                      <Component />
                      <Footer routes={routes} />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Route>
    </Router>
  );
}
