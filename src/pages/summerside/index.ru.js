import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link, animateScroll as scroll } from "react-scroll"
import { CSSTransition } from 'react-transition-group'
import { Sticky } from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor'
import {
  FacebookShareButton,
  VKShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  VKIcon
} from 'react-share';

import Layout from '../../components/layouts/summerside/summerside'
import RouteMap from '../../components/RouteMap/index'
import Gallery from '../../components/Gallery/index'
import RouteScroller from '../../components/RouteScroller'

import * as classes from './summerside.module.scss'

import introImg from '../../assets/img/pages/summerside/intro.jpg'
import shareImg from '../../assets/img/pages/summerside/share.png'

class SummersidePage extends React.PureComponent {

  state = {
    containerTopWidth: 0,
    containerTopHeight: 0,
    RouteScrollerContainerWith: 0,
    RouteScrollerContainerHeight: 0,
    showGear: false,
    trackPosition: null,
    track: 1
  };

  elementVisible = (isVisible, trackPosition, track) => {
    if(isVisible){
      this.setState({
        trackPosition: trackPosition,
        track: track
      });
    }
  };

  comments = [
    {
      id: '42823041980',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 0, 1)}
          partialVisibility={true}
        >
          <div id="kaliningrad">
            <h3 style={{marginTop: 0}}>Калининград</h3>
            <p>
              <img
                style={{display: 'block', width: '100%', maxWidth: '400px', margin: '1em auto'}}
                src="https://farm2.staticflickr.com/1899/43723828275_7709b7573f_h.jpg"
                alt="packed bicycles"
              />
              В таком виде велосипеды прибыли в Калининград. Через два часа мы собрали их и поехали смотреть город.
            </p>
            <p>
              Чтобы стартовать со свежими силами, мы решили, что лучше переночевать в хостеле и выехать на следующее утро. Остаток дня мы просто гуляли, а в <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://vk.com/plohoiohotnik">Плохом Охотнике</a> нашли самый вкусный хэндмейд тофу.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43723829485',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 6, 1)}
          partialVisibility={true}
        >
          <div id='poland'>
            <h3>Фромборк, Польша</h3>
            <p>
              Очень волновались из-за пересечения границы на велосипеде, поэтому навесили на себя все, о чём читали на тематических сайтах: фонари передние и задние, катафоты, звонки. Надели светоотражающие жилеты и шлемы. В итоге ничего из этого у нас не проверили, каждого просто попросили открыть любую из сумок и толком туда не заглянули. Пограничники посмотрели документы, поставили штамп и пропустили.
            </p>
            <p>Фромборк - первый польский город, в котором мы остановились. Здесь большой замок, могила Коперника и свой маленький порт.</p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '29694624077',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 11, 1)}
          partialVisibility={true}
        >
          <div id='malbork'>
            <h3>Мальборк</h3>
            <p>
              Из-за дождя пришлось остановиться. Весь день мы провели в замке Мариенбург. Впечатляющее нагромождение красного кирпича площадью 20 гектаров. История этого замка заслуживает отдельного рассказа. Начните с <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%B8%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3_(%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA)">Википедии.</a>
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '42823050820',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 27.9, 1)}
          partialVisibility={true}
        >
          <div id='walcz'>
            <h3>Валч</h3>
            <p>
              Три дня в дороге и снова застряли. Дожди шли слишком сильными и долгими, двигаться было нельзя. Два дня мы укрывались от ливня с хостеле рядом с озером для байдарочников-олимпийцев. В Польше, как мы поняли, многие любят этот спорт. Мы останавливались в нескольких специальных кемпингах для байдарочников, и там всегда было много народа. Плавают большими группами, семьей, с детьми, по-всякому.
            </p>
            <p>
              Топ польской кухни &mdash; &#171;пироги&#187;, они же вареники. Подают везде, стоят недорого, энергии хватает на полдня минимум.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '44633251481',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 43.7, 1)}
          partialVisibility={true}
        >
          <div id="germany">
            <h3>Германия</h3>
            <p>
              Первая остановка в Германии шокировала. Мы нашли ночлег в кемпинг-деревне, где жили несколько тысяч человек: в вэнах, домах на колесах, палатках. Оказалось, это довольно популярный вид жилья в Германии. В доме на колесах можно даже прописаться и получать почту.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43914302014',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 50.55, 1)}
          partialVisibility={true}
        >
          <div id='berlin'>
            <h3>Берлин</h3>
            <p>
              Три дня гостили у нашего друга. Были здесь во второй раз, но хочется вернуться еще. Очень живой город. Всем, кто интересуется стрит-артом, город и музей <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://urban-nation.com/">Urban Nation</a> обязательны к посещению.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '44583236272',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 73.53, 1)}
          partialVisibility={true}
        >
          <div>
            <h3>Магдебург, Ганновер</h3>
            <p>
              Стало очень жарко. За три дня мы отвыкли от дороги и выбираться из Берлина было тяжеловато. Маршрут прилип к Среднегерманскому каналу и большую часть пути до Нидерландов мы двигались вдоль него.
            </p>
            <p>
              В первый же день у Алены случился тепловой удар. Это не слишком опасно, но довольно неприятно. Прикрывайте голову и пользуйтесь солнцезащитными кремами. А если вам прилетело &mdash; прячьтесь в тень и поспите сразу несколько часов, перерывы на 10 минут в таком случае не выручают.
            </p>
            <p>
              Пока ехали вдоль канала, наткнулись на <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%B4%D0%B5%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B8%D0%B9_%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%BC%D0%BE%D1%81%D1%82">Магдебургский водный мост</a>, редкое и необычное сооружение. Очень странно наблюдать, как большие баржи проплывают по мосту, а внизу еще одна река.
            </p>
            <p>
              На канале всегда было какое-то движение. И чтобы развлекаться в дороге, мы придумали гоняться за судами. Как railfans в фильме <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/title/tt0340377/">Станционный смотретель</a>, только на воде. Мы видели много разных: коммерческие и строительные баржи, прогулочные катера, яхты. Люди путешествуют по каналам даже с личным автомобилем. Почти у всех на судах были собаки и велосипеды.
            </p>
            <p>
              Один из кемпингов стоял прямо на канале. Владелец оказался российским немцем. Он пустил нас в свой дом на колесах, включил первый канал и рассказал немного историй о переселении, русской мафии в Германии и как возникают эти кемпинг-деревни, которым мы удивлялись всю дорогу. Утром конечно же посмотрели &#171;Жить здорово&#187;.
            </p>
            <p>
              В Германии мы тоже попадали под дождь. В один из таких дней мы обедали у озера, на котором стояла крепость. Её хозяин предложил зайти внутрь и переждать пару часов. Он угостил нас колой и провел небольшую экскурсию. Оказалось, что это настоящий замок с привидением. Хозяин крепости показал нам зал, где много лет назад убили женщину, и место на полу, где лежал труп. Теперь её дух шастает по ночам в башне и издает страшные звуки. Этот мужик занимается восстановлением замка. По-началу жена и дети поддерживали это начинание. Но после встречи с призраком, они больше не приезжают в это место, а мужик привык.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '42823070450',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 89.7, 1)}
          partialVisibility={true}
        >
          <div id='netherlands'>
            <h3>Нидерланды</h3>
            <p>
              Кемпинги в Нидерландах в два раза дороже чем в Германии. Поэтому мы решили сделать марш-бросок и добраться до Амстердама, не останавливаясь больше на ночевку. Пришлось проехать за день 143 км. Зато в городе ждали старые друзья и почти две недели покоя.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43914313914',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 100, 1)}
          partialVisibility={true}
        >
          <div id='amsterdam'>
            <h3>Амстердам</h3>
            <p>
              Здесь мы были впервые, хотя уже много раз планировали добраться. В этом городе смешиваются сразу несколько любимых штук: корабли, вода и велосипеды. В одно утро мы специально встали пораньше, чтобы объехать вдоль все центральные каналы без туристов.
            </p>
            <p>
              Когда мы приехали, то сразу попали на <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://pride.amsterdam/">Pride</a> &mdash; один из крупнейших ЛГБТ-фестивалей в Европе. С вечера пятницы и все выходные каналы заполнились карнавальными лодками, на которых бесконечно тусовался народ. На одном из главных каналов проходил парад, в котором каждый год участвуют даже пожарные и полицейские. На улицах было еще теснее, чем на каналах. В центре мы просто просачивались сквозь тела.
            </p>
            <p>
              Во второй части нашего “отпуска” в Амстердаме мы помогали с организацией фестиваля местным сквоттерам. Я отвык от такой самоорганизации. Было приятно смотреть, как столько разных людей объединены общим делом. Познакомились с кучей интересных людей и сильно по всем скучаем.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43723854595',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 0, 2)}
          partialVisibility={true}
        >
          <div id='copenhagen'>
            <h3>Копенгаген, Дания</h3>
            <p>
              До Копенгагена мы доехали на автобусах FlixBus. На некоторых есть специальный багажник для велосипедов, так что разбирать их не приходится. Однако лучше пользоваться этой компанией только в крайних случаях. У нас был рейс с пересадкой в Бремене, но следующий автобус просто не пришел. Пришлось искать, как добираться дальше. Все закончилось хорошо, но никакой денежной компенсации за купленные билеты мы до сих пор не получили, несмотря на десяток отправленных писем в поддержку.
            </p>
            <p>
              Копенгаген не удалось посмотреть, оставалось не так много времени до окончания визы. Поэтому после ночевки в кемпинге мы сразу двинулись в Швецию.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '44633261371',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 8.98, 2)}
          partialVisibility={true}
        >
          <div id='sweden'>
            <h3>Швеция</h3>
            <p>
              В Швеции разрешен дикий кемпинг. Но дело даже не в этом. Здесь очень много красивых и безлюдных мест, чтобы поставить палатку. Мы почти не останавливались в кемпингах и ночевали возле какого-нибудь озера или за скалой.
            </p>
            <p>
              Здесь не так много велодорожек, но зато дороги безлюдные, ехать комфортно. Стало больше подъемов, но к ним быстро привыкаешь. Мы просто сутками наслаждались пейзажами. Из всей поездки природа Швеции понравилась больше всего.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43914316954',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 46.38, 2)}
          partialVisibility={true}
        >
          <div id='jonkoping'>
            <h3>Йёнчёпинг</h3>
            <p>
              Около 70 км мы ехали вдоль берега огромного озера Веттерн. Снова наблюдали за судами, но уже другими. Здесь не торговые баржи, как на канале в Германии, а красивые яхты, парусники и прогулочные катера. И на всем побережьи традиционные красно-белые дома. Почти у каждого водоема стоит такой.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '29694619487',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 74, 2)}
          partialVisibility={true}
        >
          <div id='norrkoping'>
            <h3>Норрчёпинг</h3>
            <p>
              Здесь уже выход к балтийскому морю и пахнет соленой водой. До Стокгольма оставалось совсем немного, поэтому мы стали больше фотографировать и отдыхать. <br/>
              В поисках места несколько раз видели оленей. Последний дикий кемпинг даже устроили на территории заповедника. 27-й день рождения я точно запомню: проснулся у озера в лесу, позавтракал на теплой скале и поехал в Стокгольм.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '30763233938',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 100, 2)}
          partialVisibility={true}
        >
          <div id='stockholm'>
            <h3>Стокгольм</h3>
            <p>
              И снова у нас не было времени посмотреть город. Просто проехали через центральную часть, купили сувенир друзьям и загрузились на паром. На этом велосипедное приключение закончилось, остальную часть пути мы добирались домой паромами, автобусами и машинами. Очень хочется вернуться в города, которые не успели посмотреть.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
  ];

  setContainerTopRef = element => {
    this.containerTop = element;
  };
  setScrollRouterRef = element => {
    this.scrollRouterBlock = element;
  };
  setScrollTopRef = element => {
    this.scrollTop = element;
  };

  componentDidMount(){
    window.addEventListener('resize', this.resizeMap);
    window.addEventListener('scroll', this.handleScroll);
    this.resizeMap();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeMap);
    window.removeEventListener('scroll', this.handleScroll);
  }

  showGearHandler = () => {
    this.setState( prevState => ({
      showGear: !prevState.showGear
    }));
  };

  resizeMap = () => {
    if(typeof window !== 'undefined'){
      this.setState({
        containerTopWidth: window.innerWidth,
        containerTopHeight: window.innerHeight,
        RouteScrollerContainerWith: (window.innerWidth / 16) * 6,
        RouteScrollerContainerHeight: window.innerHeight,
      });
    }
  };

  handleScroll = () => {
    if(this.scrollTop !== null){
      if (window.pageYOffset > 500) {
        this.scrollTop.style.display = "block";
      } else{
        this.scrollTop.style.display = "none";
      }
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return (
      <Layout location={this.props.location}>
        <main className={classes.main}>
          <div className={classes.mapWrapper} ref={this.setContainerTopRef}>
            <div className={classes.mapHeader}>
              <h1>
                Двухэтапное велопутешествие по&nbsp;Европе
              </h1>
              <h2>
                2000&nbsp;км, 24&nbsp;дня&nbsp;езды, много&nbsp;впечатлений
              </h2>
            </div>
            <section className={classes.contentTableSection}>
              <div className={classes.textContainer}>
                <ul className={classes.contentTable}>
                  <li>
                    <Link
                      to="intro"
                      className={classes.linkInverse}
                      smooth={true}
                    >
                      Кто&nbsp;мы
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="why"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Как&nbsp;собирались
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="get"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Что&nbsp;получилось
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="gallery"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Как&nbsp;прошло
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="poland"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Польша
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="germany"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Германия
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="netherlands"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Нидерланды
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="copenhagen"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Дания
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="sweden"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Швеция
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="end"
                      className={classes.linkInverse}
                      smooth={true}
                      offset={-20}
                    >
                      Чем&nbsp;закончилось
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <div className={classes.map}>
              <RouteMap
                width={this.state.containerTopWidth}
                height={this.state.containerTopHeight}
              />
            </div>
          </div>
          <section id="intro" className={classes.intro}>
            <div className={classes.textContainer}>
              <h3>Кто мы</h3>
              <p>
                Нас зовут Алёна и Андрей. Летом 2018 года мы путешествовали по Европе на велосипедах. Поездка заняла 44 дня, 24 из которых — в седле. Заезд разделился на два этапа: из Калининграда в Амстердам и из Копенгагена в Стокгольм. В сумме на велосипедах проехали более 2000 км. Здесь наша история с маршрутом, фотографиями и комментариями.
              </p>
              <img
                className={classes.fullWidth}
                src={introImg}
                alt="cyclists bikepacking"
              />
            </div>
          </section>
          <section id="why">
            <div className={classes.textContainer}>
              <h3>Как собирались</h3>
              <p>
                Мечта о велопутешествии появилась после предыдущей <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://journal.tinkoff.ru/work_exchange/">длительной поездки в Европу</a>. Сначала мы хотели еще раз поехать волонтерами через workaway, но уже с велосипедами, чтобы перемещаться на них между проектами. Но времени на этот раз было меньше и мы долго тянули с решением. От идеи с волонтерством пришлось отказаться. Мы решили выехать в сторону Берлина и проехать столько, сколько получится, пока не закончатся деньги и срок действия виз.
              </p>
              <p>
                У нас не было специальной физической подготовки, до отъезда мы катались нерегулярно.
              </p>
              <p>
                Мы плохо представляли, как собраться в длительное велопутешествие. С поиском бюджетного велосипедного снаряжения помог блог <a className={classes.link} target="_blank" rel="noopener noreferrer" href="http://skjegg.blogspot.com/">Skjegg</a>. Он написал <a className={classes.link} target="_blank" rel="noopener noreferrer" href="http://skjegg.blogspot.com/2017/07/bikepacking-basics-part4.html">подробный обзор</a> местных производителей.
              </p>
              <div>
                Другие ресурсы и статьи, которые помогли со сборами
                <ul className={classes.resourcesList}>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="http://www.bikepacking.com/">Bikepacking.com</a> &mdash; всё о байкпакинге
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://bicycletouringpro.com/cheap-bicycle-touring-gear-sample-pack-list/">Bicycle Touring Pro</a> &mdash; список вещей для “классического” велотура
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.theadventurejunkies.com/essential-gear-bicycle-touring/">The Adventure Junkies</a> &mdash; еще один список вещей. Полезно прочитать несколько и сравнить
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://tomsbiketrip.com/cycle-touring-kit-list/">Tom's Bike Trip</a> &mdash; подробный персональный список снаряжения со ссылками
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.adventurecycling.org/resources/blog/seven-tips-for-bicycle-touring-on-a-budget/">Adventure Cycling Association</a> &mdash; о экономии в путешествии
                  </li>
                </ul>
              </div>
              <p>
                Сборы проходили в короткие сроки. Две недели ушли на чтение статей о велопутешествиях, выбор, заказ и установку снаряжения, диагностику велосипедов.
              </p>
            </div>
          </section>
          <section id="get">
            <div className={classes.textContainer}>
              <h3>Что получилось</h3>
            </div>
            <div style={{textAlign: 'center'}}>
              <img
                className={classes.getImg}
                src="https://farm2.staticflickr.com/1953/45051957631_60d12a3e33_h.jpg"
                alt="bicycle bikepacking"
              />
              <img
                className={classes.getImg}
                src="https://farm2.staticflickr.com/1918/30116672827_14e27f256f_h.jpg"
                alt="bicycle bikepacking"
              />
            </div>
            <div className={classes.textContainer}>
              <p style={{marginTop: '1em', lineHeight: '1.5em'}}>
                Велосипеды: Verenti Substance / Kona Rove<br/>
                Подседельные сумки: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/kravetsbikepacking">Kravets</a> <span className={classes.divider}>/</span> <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/uraltour">Uraltour</a><br/>
                Нарульные сумки и стаканы: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://malpa.by/">Malpa</a><br/>
                Передние багажники: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/bikerack">Bazhov</a><br/>
                Сумки на багажник: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="http://rackbag.ru/">RackBag</a><br/>
                Поясные сумки: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="http://zulufixed.com/">Zulu</a> <span className={classes.divider}>/</span> <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/graphitemade">Graphit</a><br/>
              </p>
              <p>
                Палатка, коврики и остальное туристическое снаряжение почти полностью собрано в Декатлоне.
              </p>
              <div className={classes.spoiler}>
                <div
                  className={[classes.spoilerTitle, classes.link].join(' ')}
                  onClick={this.showGearHandler}
                >
                  {this.state.showGear ? 'Скрыть' : 'Показать'} полный список вещей
                </div>
                <CSSTransition
                  in={this.state.showGear}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: `${classes.spoilerBody} enter`,
                    enterActive: `${classes.spoilerBody} enter-active`,
                    enterDone: `${classes.spoilerBody} enter-done`,
                    exit: `${classes.spoilerBody} exit`,
                    exitActive: `${classes.spoilerBody} exit-active`,
                    exitDone: `${classes.spoilerBody} exit-done`,
                  }}
                >
                  {() => (
                    <div className={classes.spoilerBody}>
                      <p>
                        Инструменты: шестигранники, лопатки, bike-hand, латки, насос, семейник, сухая смазка цепи, выжимка цепи, запасные болты, перчатки, мультитул
                      </p>
                      <p>Детали и запчасти: камеры ×2, свет + батареи, велозамок, цепь, тросик, изолента, запасные спицы, пластиковые хомуты, карабины
                      </p>
                      <p>
                        Пакинг: сумки передние, сумка нарульная, сумка подседельная, кормушки, сумки поясные, инструменталка, гермомешок на багажник, резинки для багажника, бутылки, мешки для упаковки велосипедов в поезд
                      </p>
                      <p>
                        Снаряжение: светоотражающие жилеты, дождевик, спальный мешок, палатка, коврик, фольгированное одеяло, горелка, котелок, кружки, ложки, налобный фонарик, пакеты, зажигалка + спички, нитки и иголки, фастексы, замки, нож, перчатки, шлем
                      </p>
                      <p>
                        Одежда: солнцезащитные очки, футболки х2, джерси х2, джоггеры, джинсы, шорты х2 + быстросохнущие, носки + трусы х4, кофта, шапка, бафф, тапки, полотенце, тетрадка + ручка, футляр для очков, авоська
                      </p>
                      <p>
                        Электроника: ноутбук+зарядка, телефоны+провода, флешки, два usb адаптера, powerbank+провод, наушники, тройник, фотоаппарат + зарядка + батареи
                      </p>
                      <p>
                        Документы: паспорта (внутренние+загран), международные водительские права, медицинские страховки, билеты на поезд, выписки с карт
                      </p>
                      <p>
                        Гигиена: крем от загара, зубная щетка, зубная паста, деттол, влажные салфетки, сухие салфетки
                      </p>
                      <p>
                        Аптечка: уголь, противовоспалительное, бинты, эластичный бинт, пластырь, перекись/зеленка/йод, витамины
                      </p>
                    </div>
                  )}
                </CSSTransition>
              </div>
              <p>
                Чтобы перевезти велосипеды в поезде, мы разобрали их, упаковали в мешки для хранения покрышек (обычные мусорные, но с широкой горловиной) и пищевую пленку. Переднее колесо, руль, педали и багажник сняты и примотаны пленкой к раме. Чтобы ничего не поцарапалось, переложили детали картоном. Когда подходили со всем этим к поезду, проводницы начали цепляться с вопросами, говорили, что не пустят с таким багажом. Все это можно смело игнорировать и загружаться в вагон. В таком виде велосипед можно провозить в плацкарте. Это написано в  <a className={classes.link} target="_blank" rel="noopener noreferrer" href="http://pass.rzd.ru/static/public/ru?STRUCTURE_ID=5116&layer_id=3290&refererLayerId=162&id=2457">правилах перевозки.</a> Сам велосипед помещается на верхнюю багажную полку.
              </p>
            </div>
          </section>
          <section id='gallery'>
            <div className={classes.textContainer}>
              <h3>Как прошло</h3>
            </div>
            <div className={classes.galleryMapWrapper}>
              <div className={classes.galleryWrapper}>
                <Gallery comments={this.comments}/>
              </div>
              <div className={classes.stickyRouteWrapper} ref={this.setScrollRouterRef}>
                <Sticky context={this.scrollRouterBlock}>
                  <RouteScroller
                    width={this.state.RouteScrollerContainerWith}
                    height={this.state.RouteScrollerContainerHeight}
                    trackPosition={this.state.trackPosition}
                    track={this.state.track}
                  />
                </Sticky>
              </div>
            </div>
          </section>
          <section id="end" className={classes.end}>
            <div className={classes.textContainer}>
              <h3>Чем закончилось</h3>
              <p>
                За 44 дня произошло больше событий, чем описано здесь. Был еще нудистский кемпинг, мертвые опоссумы на дороге, обед с клещами. Нам нравится вспоминать эти истории и рассказывать их. Здесь мы хотели сделать небольшой обзор нашей поездки, чтобы показать, как можно провести путешествие. Если вас интересуют подробности, пишите в <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/salad.nights">Facebook.</a>
              </p>
              <p>
                Посмотреть больше фотографий дорог, полей и ветрогенераторов можно в альбоме на <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://photos.app.goo.gl/3uWWih4ncY8uQAMw5">Google Photos</a>
              </p>
              <h3>Спасибо</h3>
              <p>
                Диме и Ире за помощь и гостеприимство, без вас бы ничего не получилось. <br/>
                Тем незнакомцам, которые помогали в дороге, угощали водой, интересовались поездкой и махали навстречу. <br/>
                <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://medium.com/@IngMaeSing">Павлу Сикорскому</a> за помощь в оформлении.
              </p>
              <div className={classes.shareBlock}>
                <div className={classes.shareTitle}>
                  Расскажите друзьям:
                </div>
                <FacebookShareButton
                  url={'https://saladnights.site/ru/summerside/'}
                  quote={'Двухэтапное велопутешествие по Европе. 2000 км, 24 дня езды, бесконечное количество впечатлений.'}
                >
                  <FacebookIcon/>
                </FacebookShareButton>
                <VKShareButton
                  url={'https://saladnights.site/ru/summerside/'}
                  title={'Двухэтапное велопутешествие по Европе'}
                  description={'Двухэтапное велопутешествие по Европе. 2000 км, 24 дня езды, бесконечное количество впечатлений.'}
                  image={shareImg}
                >
                  <VKIcon/>
                </VKShareButton>
                <TelegramShareButton
                  url={'https://saladnights.site/ru/summerside/'}
                  title={'Двухэтапное велопутешествие по Европе'}
                >
                  <TelegramIcon/>
                </TelegramShareButton>
                <TwitterShareButton
                  url={'https://saladnights.site/ru/summerside/'}
                  title={'Двухэтапное велопутешествие по Европе'}
                >
                  <TwitterIcon/>
                </TwitterShareButton>
              </div>
              <div className={classes.goToIndex}>
                <GatsbyLink
                  to="/"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.494 31.494"
                  >
                    <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                  </svg>
                </GatsbyLink>
              </div>
            </div>
          </section>
          <div
            className={classes.scrollTopBtn}
            onClick={this.scrollToTop}
            ref={this.setScrollTopRef}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 492.004 492.004"
            >
              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
            </svg>
          </div>
        </main>
      </Layout>
    )
  }
}

export default SummersidePage;
