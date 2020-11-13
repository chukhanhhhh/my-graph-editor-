import React from 'react'
import { Menu, Dropdown} from 'antd';
import './ViewGraphItems.scss'
import { VerticalAlignTopOutlined, 
    VerticalAlignBottomOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    ShrinkOutlined,
    ArrowsAltOutlined, 
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
    onIncrementWidth,
    onDecrementWidth,
}) => {
    

    const menu = (
        <Menu>
          <Menu.Item key="1"><VerticalAlignTopOutlined onClick={onUp}/> </Menu.Item>
          <Menu.Item key="2"><VerticalAlignBottomOutlined onClick={onDown}/> </Menu.Item>
          <Menu.Item key="3"><ArrowLeftOutlined onClick={onLeft}/></Menu.Item>
          <Menu.Item key="4"><ArrowRightOutlined onClick={onRight}/></Menu.Item>
          <Menu.Item key="5"><FullscreenOutlined onClick={onIncrementWidth}/></Menu.Item>
          <Menu.Item key="6"><FullscreenExitOutlined onClick={onDecrementWidth}/></Menu.Item>
          <Menu.Item key="7"><ShrinkOutlined onClick={onIncrementWidth}/></Menu.Item>
          <Menu.Item key="8"><ArrowsAltOutlined onClick={onDecrementWidth}/></Menu.Item> 
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
                <span className="ant-dropdown-link">
                    <span>{nameShape} </span>
                </span>
            </Dropdown> 
        </div>
    )
}

export default ViewGraphItems
