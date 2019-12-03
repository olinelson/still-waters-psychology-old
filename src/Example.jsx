import React from 'react'
import ReactDOM from 'react-dom'
import { Router as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
// import { Container, Navbar, Nav } from 'react-bootstrap'
import Home from './pages/Home'
import Links from './pages/Links'
import Contact from './pages/Contact'
// import './styles.css'

import { Container } from 'semantic-ui-react'

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/links', name: 'Links', Component: Links },
    { path: '/contact', name: 'Contact', Component: Contact },
]


export default function Example() {
    return (
        <Router>
            <nav>
                {routes.map(route => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                    // exact
                    >
                        {route.name}
                    </NavLink>
                ))}
            </nav>

            <Container className="container">
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>

                        {({ match }) => (
                            < CSSTransition
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
        </Router >
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Example />, rootElement)
