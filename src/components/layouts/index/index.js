import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { navigate } from "gatsby-link"
import { Icon, Menu } from 'semantic-ui-react'
import { getCurrentLangKey, getUrlForLang, getLangs } from 'ptz-i18n'
import 'semantic-ui-css/semantic.min.css'
import '../../../styles/main.scss'
import * as classes from './index.module.scss'
import * as commonClasses from '../../../styles/elements.module.scss'

const languages = require('../../../data/languages');

const Footer = () => (
  <footer
    className={classes.Footer}
  >
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://www.facebook.com/salad.nights" target="_blank" rel="noopener noreferrer">
      <Icon link name='facebook' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://twitter.com/salad_nights" target="_blank" rel="noopener noreferrer">
      <Icon link name='twitter' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://www.linkedin.com/in/andrei-tarasov" target="_blank" rel="noopener noreferrer">
      <Icon link name='linkedin' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://github.com/saladNights" target="_blank" rel="noopener noreferrer">
      <Icon link name='github' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://codepen.io/salad_nights/" target="_blank" rel="noopener noreferrer">
      <Icon link name='codepen' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://bandcamp.com/salad_nights/" target="_blank" rel="noopener noreferrer">
      <Icon link name='bandcamp' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://www.mixcloud.com/andrey-ivanov19/" target="_blank" rel="noopener noreferrer">
      <Icon link name='mixcloud' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://500px.com/salad_nights" target="_blank" rel="noopener noreferrer">
      <Icon link name='500px' size="huge" className={classes.spacedIcon}/>
    </a>
    <a className={[classes.IconLink, commonClasses.Link].join(' ')} href="https://www.strava.com/athletes/salad_nights" target="_blank" rel="noopener noreferrer">
      <Icon link name='strava' size="huge" className={classes.spacedIcon}/>
    </a>
  </footer>
);

const Layout = ({ children, location }) => {
  const url = location.pathname;
  const {langs, defaultLangKey} = languages;
  const langsKeys = Object.keys(langs);
  const langKey = getCurrentLangKey(langsKeys, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langsKeys, langKey, getUrlForLang(homeLink, url));

  const langOption = langsMenu.filter(lang => {
    return !lang.selected
  }).map(lang => {
    return {key: lang.langKey, label: langs[lang.langKey]}
  });
  const langsMenuElement = (
    <span
      className={[classes.langSwitcher, commonClasses.Link].join(' ')}
      onClick={(e) => {e.preventDefault(); navigate(`/${langOption[0].key}/`)}}
    >
      {langOption[0].label}
    </span>
  );

  return (
    <div className={classes.Wrapper}>
      <Helmet
        title="salad_nights"
        meta={[
          {name: 'description', content: 'Personal website about programing, music, travels, photo etc'},
          {name: 'keywords', content: 'salad_nights, programing, cycling, music, photo'},
        ]}
      >
        <html lang={langKey} />
      </Helmet>
      <main className={classes.ContentContainer}>
        <Menu secondary size='large' className={classes.langSwitcherMenu}>
          <Menu.Menu position='right' size='small'>
            {langsMenuElement}
          </Menu.Menu>
        </Menu>
        {children}
      </main>
      <Footer/>
    </div>
  )
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.array,
  location: PropTypes.object
};