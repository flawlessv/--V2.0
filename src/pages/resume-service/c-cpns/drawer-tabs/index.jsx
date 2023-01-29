import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInfo } from '../../../../store/modules/resumeInfo';
import ResumeTabPanel from '../resume-tabPanel';
import BasicInfoTab from '../resume-tabPanel/c-cpns/basicInfoTab';
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <div>{children}</div>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch()
    const { basicInfo } = useSelector(state => ({ basicInfo: state.resume.basicInfo }))
    console.log({ ...basicInfo }, '@');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInputChange = (e) => {
        console.log(e.target.value);
        dispatch(setBasicInfo({ ...basicInfo, name: e.target.value }))

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="基本信息" {...a11yProps(0)} />
                    <Tab label="求职意向" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            {/* <TabPanel value={value} index={0}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="姓名"
                        defaultValue="Hello World"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                        id="outlined-number"
                        label="年龄"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-disabled"
                        label="手机号"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="邮箱"
                        type="email"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="工作年限"
                        defaultValue="Hello World"
                    // InputProps={{
                    //     readOnly: true,
                    // }}
                    />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>
            </TabPanel> */}
            <ResumeTabPanel value={value} index={0}>
                {/* <BasicTabs></BasicTabs> */}
                <BasicInfoTab></BasicInfoTab>
            </ResumeTabPanel>
            <ResumeTabPanel value={value} index={1}></ResumeTabPanel>
            <ResumeTabPanel value={value} index={2}></ResumeTabPanel>
            {/* <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </Box>
    );
}