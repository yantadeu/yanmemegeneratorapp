import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class NewMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="ui page grid main">
        <div className="row">
          <div className="column padding-reset top-margin">
            <div className="ui fixed menu navbar ">
              <Menu secondary >
                <Menu.Item header>D3 Meme Generator - Yan</Menu.Item>
                <Link to={`/memes/`}><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
                <Link to={`/memes/new`}><Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick} /></Link>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
