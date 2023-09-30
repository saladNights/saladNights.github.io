import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import photoSizes from "../../data/photo_sizes.json"

import * as classes from './Gallery.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

class Gallery extends React.Component {
  state = {
    pagePhotoCounter: 0,
    hasMore: true,
    photoSizes: [],
    showModal: false,
    swiperInstance: null,
  };

  componentDidMount(){
    let photoWithComments = [...photoSizes];
    let photoItem = null;
    let setCommentCounter = 0;

    photoSizes.forEach((item, i) => {
      photoItem = this.props.comments.find(comment => comment.id === item.id);
      if(photoItem !== undefined){
        photoWithComments.splice(i + setCommentCounter, 0, {comment: true, msg: photoItem.msg});
        setCommentCounter++;
      }
    });

    this.setState({
        photoSizes: photoWithComments
    });
  }

  photoClickHandler = (event, id) => {
    this.setState({ showModal: true });

    if (this.state.swiperInstance) {
      const index = photoSizes.findIndex((item) => item.id === id);

      this.state.swiperInstance.slideTo(index);
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    let items = [];

    this.state.photoSizes.map((item, i) => {
      if(item.comment){
        items.push(
          <div
            className={classes.comment}
            key={i}
          >
            {item.msg}
          </div>
        );
      } else {
        items.push(
          <div
            className={classes.item}
            key={item.id}
            onClick={(e) => this.photoClickHandler(e, item.id)}
            style={{
              background: `url('${item.small}') no-repeat center`,
              backgroundSize: 'cover'
            }}
          />
        );
      }
      return null;
    });

    return (
      <div>
        <div className={this.state.showModal ? [classes.modal, classes.modalShow].join(' ') : classes.modal}>
          <div
              className={classes.modalClose}
              onClick={this.closeModal}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 357 357"
            >
              <g>
                <g id="close">
                  <polygon
                    points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
                    214.2,178.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          <Swiper
            modules={[ Navigation ]}
            navigation
            onSwiper={
              (swiper) => {
                this.setState({ swiperInstance: swiper });
              }
            }
          >
            {
              photoSizes.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    alt={item.id}
                    className={['swiper-item', classes.swiperItem].join(' ')}
                    src={item.large}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className={classes.masonry}>
          {items}
        </div>
      </div>
    );
  }
}

export default Gallery;