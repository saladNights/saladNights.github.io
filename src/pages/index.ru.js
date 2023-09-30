import React from 'react'
import Layout from '../components/layouts/index/index'
import * as classes from './index.module.scss'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <h1 className={classes.title}>Андрей Тарасов</h1>
    <h2 className={classes.subTitle}>Фронтэнд разработчик</h2>
    <p>
      Привет! Я Андрей Тарасов, фронденд разработчик. У меня есть опыт создания интерфейсов для стартапов, государственных компаний и крупных предприятий. <br/>
      <br/>
      Я специализируюсь на использовании React для создания одностраничных приложений (SPA), и у меня есть опыт работы с разными инструментами и технологиями, включая Redux, Typescript и GraphQL. <br/>
      <br/>
      Если вам интересно обсудить проект или просто связаться со мной, пишите!
    </p>
  </Layout>
);

export default IndexPage
