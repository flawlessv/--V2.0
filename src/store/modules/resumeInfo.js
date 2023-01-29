import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// export const fetchCodeUrlAction = createAsyncThunk('fetchCode', (payload, { dispatch }) => {
//     getCodeRequest().then(res => dispatch(getCodeImg(res)))
// })
const resumeInfoSlice = createSlice({
    name: 'resumeInfoSlice',
    initialState: {
            basicInfo: {
                name: '赵世伟',
                birthday: '22岁',
                phone: '19838558988',
                email: '871602699.com',
                workTime: '1年经验',
                photoImg: '',
                gender: '男',
                isMarried: '不填'
            },
            jobIntention: {
                intention: '求职意向',
                inteCity: '上海',
                inteSalary: '5000/鱼',
                dateEntry: '一个月之内'
            },
        workExpeInfo: {},
        schoolExpeInfo: {},
    },
    reducers: {
        // getuserInfo(state, { payload }) {
        //     state.codeImg = payload
        // },
        setBasicInfo(state, { payload }) {
            state.basicInfo = payload
        },
        setJobIntention(state, { payload }) {
            state.jobIntention = payload
        },
        setWorkExpeInfo(state, { payload }) {
            state.workExpeInfo = payload
        },
        setSchoolExpeInfo(state, { payload }) {
            state.schoolExpeInfo = payload
        },
    }
})
export const { setBasicInfo,setJobIntention, setWorkExpeInfo, setSchoolExpeInfo } = resumeInfoSlice.actions
export default resumeInfoSlice.reducer