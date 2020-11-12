import React from 'react'
import { Menu, Dropdown, message, } from 'antd';
import './ViewGraphItems.scss'
import { VerticalAlignTopOutlined, 
    VerticalAlignBottomOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
} from '@ant-design/icons';

const ViewGraphItems = ({
    idShape, 
    nameShape, 
    horizontalX, 
    verticalY, 
    widthShape, 
    heightShape,
    onUp,
    onDown,
    onLeft,
    onRight,
    onZoom,
    onUnZoom,
}) => {
    
    const onHanleClick = (e) => {
         e.preventDefault()
      };

    const menu = (
        <Menu onClick={onHanleClick}>
          <Menu.Item key="1"><VerticalAlignTopOutlined onClick={onUp}/> </Menu.Item>
          <Menu.Item key="2"><VerticalAlignBottomOutlined onClick={onDown}/> </Menu.Item>
          <Menu.Item key="3"><ArrowLeftOutlined onClick={onLeft}/></Menu.Item>
          <Menu.Item key="4"><ArrowRightOutlined onClick={onRight}/></Menu.Item>
          <Menu.Item key="5"><FullscreenOutlined onClick={onZoom}/></Menu.Item>
          <Menu.Item key="6"><FullscreenExitOutlined onClick={onUnZoom}/></Menu.Item>
        </Menu>
    );

    return (
        <div className="view-graph-item" id={idShape}
            style = {{
                    width: `${widthShape}px`,
                    height: `${heightShape}px`,
                    margin: `${verticalY}px 0 0 ${horizontalX}px`,
                }}
            >
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={onHanleClick}>
                    {nameShape} 
                </a>
            </Dropdown> 
        </div>
    )
}

export default ViewGraphItems
