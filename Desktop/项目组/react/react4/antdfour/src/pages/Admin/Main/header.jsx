// import { DownOutlined } from '@ant-design/icons';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: '设置',
          key: '1',
        },
        {
          label: '啦啦啦',
          key: '2',
        },
        {
          label: '退出登陆',
          key: '3',
        },
      ]}
    />
  );

const header = ()=>{
    return(
        <div style={{float:'right',marginRight:'46px'}}>
             <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                <Avatar
                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    icon={<AntDesignOutlined />}
                />
                </a>
            </Dropdown>
        </div>
    )
}

export default header