import React from 'react'
import Layout from '../components/layouts/index/index'
import { List } from 'semantic-ui-react'
import * as classes from './index.module.scss'
import * as commonClasses from '../styles/elements.module.scss'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <h1 className={classes.title}>Андрей Тарасов</h1>
    <h2 className={classes.subTitle}>Фронтэнд-разработчик</h2>
    <p>
      Более 9 лет работаю в разных сферах веб-разработки. <br/>
      Последние 5 лет главный интерес &mdash; фронтэнд и JavaScript экосистема.
    </p>
    <h4 className={classes.heading}>Мои навыки</h4>
    <p>
      HTML, CSS, JavaScript, TypeScript, React & множество библиотек.
    </p>
    <p>
      Иногда я закрываю редактор и иду <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">фотографировать</a> на пленку,<br/>делать <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">микстейпы</a> для жены или отправляюсь в странные путешествия и потом <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">пишу&nbsp;об&nbsp;этом.</a>
    </p>
  </Layout>
);

export default IndexPage
