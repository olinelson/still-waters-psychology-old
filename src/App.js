import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import { Sidebar, Segment, Menu, Transition, Icon, Header, Image, Divider } from 'semantic-ui-react'

import Contact from './pages/Contact'
import Home from './pages/Home'
import Links from './pages/Links'

import NavBar from './components/NavBar'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import Hamburger from './components/Hamburger';
import { AppRouter } from './AppRouter';

function App() {

  const [visible, setVisible] = useState(false)

  const AppContainer = styled.div`
    max-height: 100vh;
    overflow-x: scroll;
    // padding: 0;
    // margin: 0;
  `


  return (
    <div className="App">

      <Router>
        <Sidebar.Pushable as='div'>

          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as={Link} to='/' icon='home' name='home' />
            <Menu.Item as={Link} to="/contact" icon="mail" name='Contact' />
            <Menu.Item as={Link} to="/links" icon="chain" name='Links & Resources' />
          </Sidebar>

          <Sidebar.Pusher>
            <NavBar sideBarIsOpen={visible} setVisible={(e) => setVisible(e)} />
            <AppRouter />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>



    </div >
  );
}

export default App;
