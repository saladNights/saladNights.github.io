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
      Hi, I'm Andrei Tarasov, a frontend developer with a passion for the JavaScript ecosystem and the React framework. I have experience building user interfaces for startups, government companies, and extensive enterprise businesses. <br/>
      <br/>
      I specialize in using React to build single-page applications (SPAs), and I have experience working with a variety of tools and technologies, including Redux, Typescript, and GraphQL. <br/>
      <br/>
      If you're interested in discussing a frontend project or just connecting with me, feel free to reach out!
    </p>
    <p>
      There is <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href='https://docs.google.com/document/d/1bSdHMs7TLtpMZ18yZWrbEL9nMA8UrQdqwRym9ezrQuM/edit?usp=sharing'>my&nbsp;resume</a>
    </p>
    <h4 className={classes.heading}>My skills</h4>
    <p>
      HTML, CSS, JavaScript, TypeScript, React & a lot of libs.
    </p>
  </Layout>
);

export default IndexPage
