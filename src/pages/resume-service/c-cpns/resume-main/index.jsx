import React, { memo } from 'react'
import { ResumeMainWrapper } from './style'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import UserInfo from '../../../../components/resume-info/c-cpns/user-info';
const ResumeMain = memo(() => {
    return (
        <ResumeMainWrapper>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 820,
                        height: 1150,
                    },
                }}
            >

                <Paper elevation={3}
                    sx={{
                    }}
                >
                    <UserInfo></UserInfo>
                </Paper>
            </Box>
        </ResumeMainWrapper>
    )
})

export default ResumeMain