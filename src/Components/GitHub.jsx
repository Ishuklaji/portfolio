import GitHubCalendar from 'react-github-calendar';
import { GitHubDiv } from "../css/GitHub.styled";
import React from 'react'

 const GitHub = () => {
  return (
    <GitHubDiv id="github">
        <h1 className="subTitle">GitHub Calender</h1>
        <GitHubCalendar username="ishuklaji" />
    </GitHubDiv>
  )
}

export default GitHub