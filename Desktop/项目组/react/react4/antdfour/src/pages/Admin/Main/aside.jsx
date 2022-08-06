import React from 'react'
import { Layout } from 'antd'
import CustomMenu from '../CustomMenu'
import { router } from '../../router/index.js'
import './index.scss'
const { Sider } = Layout

function SiderNav({collapsed}) {
  return (
    <Sider className="custom-sider" style={{padding:0}} collapsible collapsed={collapsed}>
      {/* <div className="logo">
        <span className="ellipsis">测试系统平台</span>
      </div> */}
      <CustomMenu menus={router} collapsed={collapsed} />
    </Sider>
  )
}

export default SiderNav
