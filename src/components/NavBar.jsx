import React from 'react'
import { Menu, Icon, Responsive } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

function NavBar(props) {

    const sideBarIsOpen = props.sideBarIsOpen

    const FixedMenu = styled(Menu)`
        z-index:1;
        position: fixed;
        width: 100vw;
        // background-color: rgba(255,255,255,.8) !important;
    `
    const FixedHamburgerMenu = styled(Menu)`
        z-index:1;
        position: fixed;
        width: 100vw;
        background-color: rgba(0,0,0,0) !important;
    `
    return <>


        <Responsive secondary as={FixedHamburgerMenu} {...Responsive.onlyMobile}>
            <Menu.Item>
                <Icon size="large" inverted name={props.sideBarIsOpen ? "close" : "bars"} onClick={() => props.setVisible(true)} />
            </Menu.Item>
        </Responsive>
        < Responsive secondary as={FixedHamburgerMenu} {...Responsive.onlyTablet}>
            <Menu.Item>
                <Icon size="large" inverted name={props.sideBarIsOpen ? "close" : "bars"} onClick={() => props.setVisible(true)} />
            </Menu.Item>
        </Responsive >
        <Responsive inverted secondary as={FixedMenu} fixed {...Responsive.onlyComputer}>
            <Menu.Item as={Link} to='/' icon='home' name='home' />
            <Menu.Item as={Link} to="/contact" icon="mail" name='Contact' />
            <Menu.Item as={Link} to="/links" icon="chain" name='Links & Resources' />
        </Responsive>
    </>
}

export default withRouter(NavBar)