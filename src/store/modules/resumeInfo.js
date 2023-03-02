import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getResumeContent } from '../../services/modules/resume'
export const fetchResumeInfoAction = createAsyncThunk(
  'fetchResumeInfo',
  async (_, { dispatch }) => {
    const res = await getResumeContent()
    console.log(res, '简历信息数据')
    dispatch(setResumeContent(res.data.records[0]))
  }
)
const resumeInfoSlice = createSlice({
  name: 'resumeInfoSlice',
  initialState: {
    resumeData: {
      baseInfo: {
        birthday: '22岁',
        email: '871602699@qq.com',
        ethnic: '汉族',
        height: '175',
        imgUrl: '',
        name: '赵世伟',
        origin: '河南平顶山',
        politicalLandscape: '河南永城',
        sex: '男',
        telephone: '19838558988',
        wight: '60kg',
        workYear: '1'
      },
      campusExperience: {
        content:
          '凡思美育网站凡思美育网站凡思美育网站凡思美育网站凡思美育网站凡思美育网站凡思美育网站',
        endTime: '2022-9-2',
        experienceName: '凡思美育',
        role: '前端工程师',
        startTime: '2021-11-2'
      },
      certificateHonor:
        '<p><b>语言能力：</b>大学英语6级证书，荣获全国大学生英语竞赛一等奖，能够熟练的进行交流、读写。</p><p><b>计算机：</b>计算机二级证书，熟练操作windows平台上的各类应用软件，如Word、Excel。</p><p><b>团队能力：</b>具有丰富的团队组建与扩充经验和项目管理与协调经验。</p>',
      createId: 0,
      createTime: '2023-9-19',
      hobbies: '听音乐',
      id: 0,
      jobIntent: {
        city: '杭州',
        expectSalary: '15k',
        intent: '前端工程师',
        onboardTime: '3个月'
      },
      projectExperience: {
        content:
          '网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐网易云音乐',
        endTime: '2023-3-1',
        projectName: '网易云音乐',
        role: '前端工程师',
        startTime: '2023-2-1'
      },
      selfEvaluation:
        '<p>工作积极认真，细心负责，熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，有较强的分析能力；勤奋好学，踏实肯干，动手能力强，认真负责，有很强的社会责任感；坚毅不拔，吃苦耐劳，喜欢迎接新挑战。</p>',
      skillSpecialties:
        '<ol><li>熟练掌握HTML5,CSS3,ES6+新特性</li><li>熟悉Sass / less预编译器,熟悉TailWindCSS语法,CSS in JS等CSS技术</li><li>熟练使用React18全家桶,熟练使用各种hooks+TypeScript开发项目</li><li>熟悉redux,react-redux,redux-toolkit等各种React状态管理库</li><li>熟悉Vue3.x技术,了解Vue的一些基本原理及相关技术栈</li><li>熟练使用各种热门组件库,如Ant Design,Material UI,Element UI等</li><li>熟练使用Git版本控制器,Webpack等前端自动化工具.使用Npm /Yarn管理依赖包</li><li>了解Next开发SSR客户端渲染模式的基本使用,并能快速上手相关的开发工作</li><li>了解常用的Node模块,并能使用Express搭建并实现一些简单的后端增删改查接口</li><li>了解Linux常用命令以及Mysql数据库的基本使用</li></ol>',
      templateId: 0,
      updateTime: '',
      workExperience: {
        companyName: '网易',
        content:
          '<ul><li>负责中心简单财务管理，资产管控；</li><li>负责公司总部的来访客户接待工作，负责引导和介绍公司的分布情况；</li><li>负责中心的行政事务，公司班车管理、负责建立员工归属感及前台管理；</li><li>负责招聘工作，确保人才梯队发展和人才储备及培养。</li><li>督导公司各项行政、人事制度、员工福利、生日以及公司各种宴会活动的执行。</li><li>负责招聘工作，制定公司的人力资源发展计划，确保人才梯队发展和人才储备及培养。</li></ul>',
        endTime: '2023-2-2',
        posts: '总经理',
        startTime: '2022-2-2'
      }
    }
  },
  reducers: {
    // getuserInfo(state, { payload }) {
    //     state.resumeData.resumeDatacodeImg = payload
    // },
    setBaseInfo(state, { payload }) {
      state.resumeData.baseInfo = payload
    },
    setJobIntent(state, { payload }) {
      state.resumeData.jobIntent = payload
    },
    setWorkExpeInfo(state, { payload }) {
      state.resumeData.workExpeInfo = payload
    },
    setSchoolExpeInfo(state, { payload }) {
      state.resumeData.schoolExpeInfo = payload
    },
    // dispatch项目经验内容
    setProjectExperienceName(state, { payload }) {
      state.resumeData.projectExperience.projectName = payload
    },
    setProjectExperienceRole(state, { payload }) {
      state.resumeData.projectExperience.role = payload
    },
    setProjectExperienceStartTime(state, { payload }) {
      state.resumeData.projectExperience.startTime = payload
    },
    setProjectExperienceEndTime(state, { payload }) {
      state.resumeData.projectExperience.endTime = payload
    },
    setProjectExperienceContent(state, { payload }) {
      state.resumeData.projectExperience.content = payload
    },
    // dispatch工作经验内容
    setWorkExperienceName(state, { payload }) {
      state.resumeData.workExperience.companyName = payload
    },
    setWorkExperienceRole(state, { payload }) {
      state.resumeData.workExperience.posts = payload
    },
    setWorkExperienceStartTime(state, { payload }) {
      state.resumeData.workExperience.startTime = payload
    },
    setWorkExperienceEndTime(state, { payload }) {
      state.resumeData.workExperience.endTime = payload
    },
    setWorkExperienceContent(state, { payload }) {
      state.resumeData.workExperience.content = payload
    },
    //dispatch校园经历内容
    setCampusExperienceName(state, { payload }) {
      state.resumeData.campusExperience.experienceName = payload
    },
    setCampusExperienceRole(state, { payload }) {
      state.resumeData.campusExperience.role = payload
    },
    setCampusExperienceStartTime(state, { payload }) {
      state.resumeData.campusExperience.startTime = payload
    },
    setCampusExperienceEndTime(state, { payload }) {
      state.resumeData.campusExperience.endTime = payload
    },
    setCampusExperienceContent(state, { payload }) {
      state.resumeData.campusExperience.content = payload
    },
    //
    setSelfEvaluation(state, { payload }) {
      state.resumeData.selfEvaluation = payload
    },
    setSkillSpecialties(state, { payload }) {
      state.resumeData.skillSpecialties = payload
    },
    setCertificateHonor(state, { payload }) {
      state.resumeData.certificateHonor = payload
    },
    setResumeContent(state, { payload }) {
      state.resumeData = payload
    }
  }
})
export const {
  setBaseInfo,
  setJobIntent,
  setWorkExpeInfo,
  setSchoolExpeInfo,
  setProjectExperienceName,
  setProjectExperienceRole,
  setProjectExperienceStartTime,
  setProjectExperienceEndTime,
  setProjectExperienceContent,
  setWorkExperienceName,
  setWorkExperienceRole,
  setWorkExperienceStartTime,
  setWorkExperienceEndTime,
  setWorkExperienceContent,
  setCampusExperienceName,
  setCampusExperienceRole,
  setCampusExperienceStartTime,
  setCampusExperienceEndTime,
  setCampusExperienceContent,
  setSelfEvaluation,
  setSkillSpecialties,
  setCertificateHonor,
  setResumeContent
} = resumeInfoSlice.actions
export default resumeInfoSlice.reducer
