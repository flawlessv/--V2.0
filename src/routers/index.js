import React from 'react'
import { Navigate } from 'react-router-dom'
// const Home = React.lazy(() => import('../pages/home'))
// const Login = React.lazy(() => import('../pages/login'))
// const Register = React.lazy(() => import('../pages/register'))
// const ResumeService = React.lazy(() => import('../pages/resume-service'))
// const TemplateList = React.lazy(() => import('../pages/template-list'))
// const ResumeCustomized = React.lazy(() => import('../pages/resume-dingzhi'))
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ResumeService from '../pages/resume-service'
import TemplateList from '../pages/template-list'
// import ResumeCustomized from "../pages/resume-bottomTab";
import ResumeDetails from '../pages/resume-details'
//我的模块
import My from '@/pages/my'
import MyInfo from '@/pages/my/c-cpns/my-info'
import MyOrder from '@/pages/my/c-cpns/my-order'
import MyResume from '@/pages/my/c-cpns/my-resume'
import UploadTemplate from '@/pages/my/c-cpns/upload-template'
import Popularize from '@/pages/my/c-cpns/popularize'
const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/guide',
    element: <ResumeService />
  },
  {
    path: '/resumes',
    element: <TemplateList />
  },
  {
    path: '/customized',
    element: <ResumeDetails />
  },
  {
    path: '/details',
    element: <ResumeDetails />
  },
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/my',
    element: <My></My>,
    children: [
      {
        path: '/my/myinfo',
        element: <MyInfo></MyInfo>
      },
      {
        path: '/my/myorder',
        element: <MyOrder></MyOrder>
      },
      {
        path: '/my/myresume',
        element: <MyResume></MyResume>
      },
      {
        path: '/my/popularize',
        element: <UploadTemplate></UploadTemplate>
      },
      {
        path: '/my/upload',
        element: <Popularize></Popularize>
      }
    ]
  }
]
export default routes
