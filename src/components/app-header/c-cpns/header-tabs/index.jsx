import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { TabsWrapper } from './style';

export default function HeaderTabs() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()
    const tabDatas = [
        {
            name: '首页',
            path: '/'
        },
        {
            name: '模板大全',
            path: '/resumes'
        },
        {
            name: '简历服务',
            path: '/guide'
        },
        {
            name: '名企热招',
            path: '/guide'
        },
        {
            name: '简历定制',
            path: '/customized'
        },
        {
            name: '求职攻略',
            path: '/guide'
        },
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleTabsClick = (route) => {
        navigate(route)
    };

    return (
        <TabsWrapper>

            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tablist'>
                {
                    tabDatas.map(item => (
                        <Tab label={item.name} className='tabs' onClick={() => handleTabsClick(item.path)} key={item.name} />

                    ))
                }
            </Tabs>
        </TabsWrapper>
    );
}