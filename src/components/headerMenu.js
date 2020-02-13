import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'

import logo from '../styles/images/logo.png';

export default class headerMenu extends Component {
  state = {};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
        <Menu stackable>
          <Menu.Item>
            <img src={logo} alt="PixelEditor"/>
          </Menu.Item>

          <Menu.Item
              name='File'
              active={activeItem === 'File'}
              onClick={this.handleItemClick}>
            File
          </Menu.Item>

          <Menu.Item
              name='Edit'
              active={activeItem === 'Edit'}
              onClick={this.handleItemClick}>
            Edit
          </Menu.Item>

          <Menu.Item
              name='Image'
              active={activeItem === 'Image'}
              onClick={this.handleItemClick}>
            Image
          </Menu.Item>

          <Menu.Item
              name='Adjustment'
              active={activeItem === 'Adjustment'}
              onClick={this.handleItemClick}>
            Adjustment
          </Menu.Item>

          <Menu.Item
              name='View'
              active={activeItem === 'View'}
              onClick={this.handleItemClick}>
            View
          </Menu.Item>

          <Menu.Item
              name='Help'
              active={activeItem === 'Help'}
              onClick={this.handleItemClick}>
            Help
          </Menu.Item>
        </Menu>
    )
  }
}
