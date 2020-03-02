import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import '../styles/Header.css';

export class Header extends Component {
    state = {};
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu className="">    
            <Dropdown item text='Menu'>
            <Dropdown.Menu>
                <Dropdown.Item>Create Character</Dropdown.Item>
                <Dropdown.Item>Edit Character</Dropdown.Item>
                <Dropdown.Item>Create Campaign</Dropdown.Item>
                <Dropdown.Item>Edit Campaign</Dropdown.Item>
                <Dropdown.Item>Join Campaign</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            name='Support'
            active={activeItem === 'support'}
            onClick={this.handleItemClick}
            />
        </Menu>
      )
    }   
}

