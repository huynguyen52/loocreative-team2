import React, { useEffect } from 'react';
import gsap, { Power3 } from 'gsap';

const SectionFive: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#fifthPage',
        start: '49% center',
        end: '51% center',
        onEnter: () => tl.restart(),
        onLeaveBack: () => tl.reverse(0).time(0.2),
      },
    });

    tl.from('.five-link-title.five-link-title--1', {
      opacity: 0,
      duration: 0.8,
      x: 300,
      ease: Power3.easeOut,
    })
      .from(
        '.five-link-title.five-link-title--2',
        {
          opacity: 0,
          duration: 0.8,
          x: 300,
        },
        '-=0.4'
      )
      .from(
        '.five-link-email',
        {
          opacity: 0,
          y: -50,
          duration: 0.4,
        },
        '-=0.5'
      )
      .from(
        '.five-link-text',
        {
          opacity: 0.4,
          duration: 0.8,
          x: 200,
          ease: Power3.easeOut,
        },
        '-=0.2'
      )
      .from(
        '#five-title',
        {
          duration: 0.4,
          opacity: 0,
          y: -100,
        },
        1
      );
  }, []);

  return (
    <section className="five" id="fifthPage">
      <div className="five-container">
        <div className="five-title" id="five-title">
          <h3>
            LOOCREATIVE <br /> creative partners
          </h3>
        </div>

        <div className="five-link">
          <div className="five-link-item">
            <h3 className="five-link-title five-link-title--1">Partnership.</h3>
            <a
              className="five-link-email"
              href="mailto:loocreative@playlooc.com"
            >
              <p>loocreative@playlooc.com</p>
              <p className="email-icon">✉</p>
            </a>
          </div>

          <div className="five-link-item">
            <h3 className="five-link-title five-link-title--1">Recruiting.</h3>
            <a
              className="five-link-email"
              href="mailto:loocreative@playlooc.com"
            >
              <p>loocreative@playlooc.com</p>
              <p className="email-icon">✉</p>
            </a>
          </div>

          <div className="five-link-item">
            <h3 className="five-link-title five-link-title--2">Learn more.</h3>
            <a className="five-link-text" href="/works">
              Learn more about us.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
