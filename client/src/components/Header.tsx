import * as React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import '../styles/Header.scss'

export interface HeaderProps {
  [key: string] : any
}
 
export interface HeaderState {
  [key: string] : any
}
 
export class Header extends React.Component<HeaderProps, HeaderState> {
  state = { }
  
  handleItemClick = (e:any, {name}:any) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem }:any = this.state
  
      return (
        <Menu className="header-menu">    
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

