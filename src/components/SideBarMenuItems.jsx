import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

function SideBarMenuItems(props) {
    return <>
        <Menu.Item active={props.location.pathname === '/'} as={Link} to='/' icon='home' name='home' />
        <Menu.Item active={props.location.pathname === '/contact'} as={Link} to="/contact" icon="mail" name='Contact' />
        <Menu.Item active={props.location.pathname === '/links'} as={Link} to="/links" icon="chain" name='Links & Resources' />
    </>
}

export default withRouter(SideBarMenuItems)

