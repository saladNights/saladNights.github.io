import React from 'react'
import Layout from '../components/layouts/index/index'
import { Grid, List } from 'semantic-ui-react'
import classes from './index.module.scss'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Grid verticalAlign='middle'>
      <Grid.Row>
        <h1 className={classes.title}>Андрей Тарасов</h1>
        <h2 className={classes.subTitle}>Фронтэнд&mdash;разработчик</h2>
        <p>
          Более 5 лет работаю в разных сферах веб&mdash;разработки. <br/>
          Последние два года главный интерес &mdash; фронтэнд и визуализация данных.
        </p>
        <p>
          Работал с
          <List>
            <List.Item><a rel="noopener noreferrer" target="_blank" href="https://advertise.ru/">advertise.ru</a></List.Item>
            <List.Item><a rel="noopener noreferrer" target="_blank" href="https://crex24.com/">crex24.com</a></List.Item>
            <List.Item><a rel="noopener noreferrer" target="_blank" href="https://doslovno.com/">doslovno.com</a></List.Item>
            <List.Item><a rel="noopener noreferrer" target="_blank" href="https://heavyfair.com/">heavyfair.com</a></List.Item>
          </List>
        </p>
        <p>
          Сейчас в поиске интересных проектов. Если у вас есть что-то для меня, пишите в социалки внизу.
        </p>
        <h4 className={classes.heading}>Мои навыки</h4>
        <p>
          HTML, CSS, JS, React, Redux, Gatsby.js, D3.js.
        </p>
        <p>
          Иногда я закрываю редактор и иду <a rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">фотографировать на пленку,</a>
          делать <a rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">микстейпы для жены</a> или отправляюсь в странные путешествия и потом <a rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">пишу об этом.</a>
          {/*<br/>А раньше играл панк в нескольких группах и даже что-то записывал. Когда-нибудь поделюсь.*/}
        </p>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage