import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { MyTabsWrapper } from './style'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ArticleIcon from '@mui/icons-material/Article'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import BackupIcon from '@mui/icons-material/Backup'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{ ml: 10 }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export default function MyTabs(props) {
  const myData = [
    {
      label: '账户信息',
      path: '/my/myinfo',
      icon: <AccountBoxIcon sx={{ mr: 2 }} />
    },
    {
      label: '我的简历',
      path: '/my/myresume',
      icon: <ArticleIcon sx={{ mr: 2 }} />
    },
    {
      label: '我的订单',
      path: '/my/myorder',
      icon: <ProductionQuantityLimitsIcon sx={{ mr: 2 }} />
    },
    {
      label: '上传模板',
      path: '/my/upload',
      icon: <BackupIcon sx={{ mr: 2 }} />
    },
    {
      label: '推广赚钱',
      path: '/my/popularize',
      icon: <MonetizationOnIcon sx={{ mr: 2 }} />
    }
  ]
  const [value, setValue] = React.useState(0)
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleTabClick = (path) => {
    navigate(path)
  }

  return (
    <MyTabsWrapper>
      <Box
        sx={{
          flexGrow: 1,
          // bgcolor: "background.paper",
          display: 'flex',
          height: 500
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="mytabs"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: '#fff',
            width: 200,
            borderRadius: 1
          }}
        >
          {myData.map((item, index) => (
            <Tab
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  {item.label}
                </div>
              }
              key={item.label}
              {...a11yProps(index)}
              onClick={() => handleTabClick(item.path)}
            />
          ))}
        </Tabs>
        {myData.map((item, index) => (
          <TabPanel value={value} index={index} key={item.path}>
            {props.children}
          </TabPanel>
        ))}
      </Box>
    </MyTabsWrapper>
  )
}
