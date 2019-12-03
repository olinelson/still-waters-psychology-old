import React from 'react'
import { Responsive, Menu, Icon } from 'semantic-ui-react'
import styled from 'styled-components'


export default function Hamburger(props) {

    const FixedHamburgerMenu = styled(Menu)`
        z-index:1;
        position: fixed;
        width: 100vw;
        background-color: rgba(0,0,0,0) !important;
    `

    if (props.sideBarIsOpen) return null

    return <>
        < Responsive secondary as={FixedHamburgerMenu} {...Responsive.onlyTablet}>
            <Menu.Item>
                <Icon size="large" inverted name={props.sideBarIsOpen ? "close" : "bars"} onClick={() => props.setVisible(true)} />
            </Menu.Item>
        </Responsive >

        <Responsive secondary as={FixedHamburgerMenu} {...Responsive.onlyMobile}>
            <Menu.Item>
                <Icon size="large" inverted name={props.sideBarIsOpen ? "close" : "bars"} onClick={() => props.setVisible(true)} />
            </Menu.Item>
        </Responsive>
    </>


}
