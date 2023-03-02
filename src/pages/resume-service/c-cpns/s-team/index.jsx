import React, { memo } from 'react'
import ResumeTeamItem from '../../../../components/resume-team'
import { SteamWrapper } from './style'

const Steam = memo(() => {
  const teamData = [
    {
      name: '李小泽',
      introduce:
        'Java的创始人，生于加拿大，是一个电脑程序方面的奇才。他在卡内基·梅隆大学学习电脑博士期间，曾为Unix开发过多个处理器版本，并创立了Java语言'
    },
    {
      name: '陈小新',
      introduce:
        'Spring Framework创始人，著名作者。Spring是一个开放源代码的设计层面框架，它解决的是业务逻辑层和其他各层的松耦合问题，因此它将面向接口的编程思想'
    },
    {
      name: '赵小伟',
      introduce:
        ' 在大学中主修艺术，为了支付学费而兼职学习了编程。后来，他意识到自己更喜欢从事开源方面的工作。Brian 有一个 单人乐队 和两个 双人 乐队。同时，他还拥有一只可爱的猫咪。'
    },
    {
      name: '牛HR',
      introduce:
        ' 世界前10强企业高级人力管理人员,千亿级主板上市企业人力资源总监,211、985高校特聘管理咨询专家,国家一级人力资源管理师、明星授课教师'
    }
  ]
  return (
    <SteamWrapper>
      <h3>导师团队</h3>
      <div className="tit-text">
        严选200多位CEO、500强企业人力资源管理者、HRD等
      </div>
      <ResumeTeamItem data={teamData}></ResumeTeamItem>
    </SteamWrapper>
  )
})

export default Steam
