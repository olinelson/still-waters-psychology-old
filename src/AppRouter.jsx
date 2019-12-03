import React, { useState } from 'react'

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Contact from './pages/Contact'
import Home from './pages/Home'
import Links from './pages/Links'


import styled from 'styled-components'

const AppContainer = styled.div`
    max-height: 100vh;
    overflow-x: scroll;
    // padding: 0;
    // margin: 0;
  `

export function AppRouter() {


    return (
        <Router>

            <AppContainer >
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/links">
                        <Links />
                    </Route>



                </Switch>
            </AppContainer>
        </Router>
    )
}