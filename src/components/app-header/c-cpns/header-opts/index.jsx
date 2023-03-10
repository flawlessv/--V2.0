import React, { memo, useState } from 'react'
import { OptsWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import { message } from 'antd'
import { logOut } from '../../../../services'
const HeaderOpts = memo(() => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [login,setlogin]=useState(localStorage.getItem('access_token')?true:false)
  const { avatar, userName = '超级管理员7' } = useSelector((state) => ({
    avatar: state?.code?.userInfo?.avatar,
    userName: state?.code?.userInfo?.userName
  }))
  const hanleAvatarClick = () => {
    navigate('/my/myinfo')
  }
  //退出登录
  const handleLogout = () => {
    logOut().then((res) => {
      // console.log(res,'logout');
      console.log(res, 'logres')
      if (res.code === 200) {
        localStorage.clear()
        setlogin(false)
        message.success(res.msg)
      } else {
        message.success(res.msg)
      }
    })
  }
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <OptsWrapper>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {login ? (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 40 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 40, height: 40 }}>
                <img
                  style={{
                    width: '100%'
                  }}
                  src="https://img0.baidu.com/it/u=3240651741,1461690041&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                  alt=""
                />
              </Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <button className="button-73" onClick={() => navigate('/login')}>
            登录/注册
          </button>
        )}
      </Box>
      {login && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 40,
                height: 40,
                ml: -0.5,
                mr: 0
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={hanleAvatarClick}>
            <Avatar src="https://img0.baidu.com/it/u=3240651741,1461690041&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333" />{' '}
            {userName}
          </MenuItem>
          <MenuItem>
            <Avatar onClick={hanleAvatarClick} /> 个人中心
          </MenuItem>
          <MenuItem>
            <Avatar onClick={hanleAvatarClick} /> 我的账户
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            设置
          </MenuItem>
          <MenuItem onClick={() => handleLogout()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            退出
          </MenuItem>
        </Menu>
      )}
    </OptsWrapper>
  )
})

export default HeaderOpts
