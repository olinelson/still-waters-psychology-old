import React, { useState } from 'react'

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import Contact from './pages/Contact'
import Home from './pages/Home'
import Links from './pages/Links'
import styled from 'styled-components'


import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

export function AppRouter() {
    const AppContainer = styled.div`
    max-height: 100vh;
    overflow-x: scroll;
    // padding: 0;
    // margin: 0;
  `

    let location = useLocation()


    console.log(location)

    return (
        <Router>
            <AppContainer >
                <TransitionGroup>
                    {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                    >
                        {/* <Switch location={location}> */}



                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/links">
                            <Links />
                        </Route>



                        {/* </Switch> */}
                    </CSSTransition>
                </TransitionGroup>



            </AppContainer>


        </Router>
    )
}