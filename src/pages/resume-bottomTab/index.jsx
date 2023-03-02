import * as React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import DrawerTabs from '../resume-details/c-cpns/drawer-tabs'
import { useSelector } from 'react-redux'
import { setResumeInfo } from '../../services/modules/resume'
import Snackbar from '@mui/material/Snackbar'
import dayjs from 'dayjs'
import { DingZhiWrapper } from './style'
const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}))

// const Puller = styled(Box)(({ theme }) => ({
//     width: 30,
//     height: 6,
//     backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//     borderRadius: 3,
//     position: 'absolute',
//     top: 8,
//     left: 'calc(50% - 15px)',
// }));

function SwipeableEdgeDrawer(props) {
  const { window } = props
  const [open, setOpen] = React.useState(false)
  const [msgOpen, setMsgOpen] = React.useState(false)
  const { resumeData } = useSelector((state) => ({
    resumeData: state.resume.resumeData
  }))
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }
  const createTime = dayjs().format('YYYY-MM-DD')
  const container =
    window !== undefined ? () => window().document.body : undefined
  const handleClose = () => {
    setOpen(false)
    //发送dispatch
    setResumeInfo(resumeData, createTime).then((res) => {
      if (res.code === 200) {
        setMsgOpen(true)
      }
    })
  }
  return (
    <DingZhiWrapper>
      <Root>
        <CssBaseline />
        <Snackbar
          open={msgOpen}
          autoHideDuration={500}
          message="保存简历成功"
        />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: 'visible'
            }
          }}
        />
        {/* 抽屉控制按钮 */}
        <Box
          sx={{
            textAlign: 'center',
            pt: 1,
            position: 'absolute',
            top: 550,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0
          }}
        >
          <Button
            sx={{
              position: 'absolute',
              right: '50px',
              top: '140px',
              backgroundColor: 'black',
              color: '#fff'
            }}
            color="primary"
            size="large"
            variant="filled"
            className="btn-grad "
            onClick={toggleDrawer(true)}
          >
            打开抽屉
          </Button>
        </Box>
        {/* 抽屉 */}
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={handleClose}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            position: 'relative'
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
              backgroundColor: '#fff'
            }}
          >
            <DrawerTabs></DrawerTabs>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </DingZhiWrapper>
  )
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default SwipeableEdgeDrawer
