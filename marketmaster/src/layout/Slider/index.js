import React from "react";
import { Menu } from 'antd'
import { Link } from "react-router-dom";

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [{ name: 'Setting', id: '1', children: [{ name: 'Menu Management', id: '11', linkUrl: '/setting/menu' }] },
      { name: 'Business Management', id: '2', linkUrl: '/business' }]
    }
  }
  onRenderMenu = (menus) => {
    return menus.map(menu => {
      if (menu.children && menu.children.length) {
        return <Menu.SubMenu key={menu.id} title={menu.name}>{this.onRenderMenu(menu.children)}</Menu.SubMenu>
      }
      return <Menu.Item key={menu.id}><Link to={menu.linkUrl}>{menu.name}</Link></Menu.Item>
    })
  }
  render() {
    return <Menu theme="dark" mode="inline">
      {this.onRenderMenu(this.state.menus)}
    </Menu>
  }
}

export default Slider