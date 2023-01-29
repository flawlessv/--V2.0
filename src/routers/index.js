import React from "react"
import { Navigate } from "react-router-dom"
const Home = React.lazy(() => import('../pages/home'))
const Login = React.lazy(() => import('../pages/login'))
const Register = React.lazy(() => import('../pages/register'))
const ResumeService = React.lazy(() => import('../pages/resume-service'))
const TemplateList = React.lazy(() => import('../pages/template-list'))
const ResumeCustomized = React.lazy(() => import('../pages/resume-dingzhi'))
const routes = [
    {
        path: '/home',
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
        element: <ResumeCustomized />
    },
    {
        path: '/',
        element: <Navigate to="/home" />
    },
]
export default routes