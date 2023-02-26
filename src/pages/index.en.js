import React from 'react'
import Layout from '../components/layouts/index/index'
import { List } from 'semantic-ui-react'
import * as classes from './index.module.scss'
import * as commonClasses from '../styles/elements.module.scss'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <h1 className={classes.title}>Andrei Tarasov</h1>
    <h2 className={classes.subTitle}>Frontend-developer</h2>
    <p>
      I've worked in different fields of web development for 9 years.<br/>
      Last 6 years my passions have been front-end development and the JavaScript ecosystem.
    </p>
    <p>
      There is <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href='https://docs.google.com/document/d/1bSdHMs7TLtpMZ18yZWrbEL9nMA8UrQdqwRym9ezrQuM/edit?usp=sharing'>my&nbsp;resume</a>
    </p>
    <h4 className={classes.heading}>My skills</h4>
    <p>
      HTML, CSS, JavaScript, TypeScript, React & a lot of libs.
    </p>
    <p>
      Sometimes I close my code editor and go to take <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">film photos</a>, make <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">mixtapes</a> for my wife or go on weird journeys and then <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">write&nbsp;about&nbsp;it.</a>
    </p>
  </Layout>
);

export default IndexPage
