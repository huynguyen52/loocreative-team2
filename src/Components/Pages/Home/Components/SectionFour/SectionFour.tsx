import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { historyData } from './data/history.data';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const SectionFour: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#fourthPage',
        start: '49% center',
        end: '51% center',
        onEnter: () => tl.restart(),
        onLeave: () => tl.reverse(0).time(0.6),
        onEnterBack: () => tl.restart(),
        onLeaveBack: () => tl.reverse(0).time(0.6),
      },
    });
    tl.from('#fourthPage-title', {
      y: -100,
      duration: 0.8,
      opacity: 0,
      ease: Power3.easeOut,
    }).from(
      '#fourthPage-container',
      {
        x: '-100%',
        duration: 1,
        opacity: 0,
        ease: Power3.easeOut,
      },
      '-=0.3'
    );
  }, []);

  return (
    <section className="four" id="fourthPage">
      <div className="history">
        <div className="container">
          <div className="boxHistory">
            <div className="title" id="fourthPage-title">
              History
            </div>
            <div className="boxContent" id="fourthPage-container">
              <Slider {...settings}>
                {historyData.map((item, idx) => (
                  <div key={idx} className="boxContent_item">
                    <div className="year">{item.year}</div>
                    <div className="itemList">
                      {item.listItem.map((list, idxs) => (
                        <div className="box" key={idxs}>
                          {/* <h2>{list.nameProduct}</h2> */}
                          <h2>
                            {t(
                              `historyData.${idx}.listItem.${idxs}.nameProduct`
                            )}
                          </h2>
                          <p>{list.nameJob}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
