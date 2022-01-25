import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../Assets/Images/Home/Section1/logo.png';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionOne: React.FC = () => {
  const container = useRef(null);
  const headerEl = useRef(null);
  const portfolioEl = useRef(null);
  const clockEl = useRef(null);

  const renderTimer = () => {
    return new Date().toLocaleTimeString([], {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };
  const [timer, setTimer] = useState(renderTimer());

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '49% 50%',
        end: '51% 50%',
        onEnter: () => tl.progress(1),
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => tl.reverse(),
      },
    });
    tl.from(headerEl.current, {
      duration: 0.8,
      y: '-100%',
      opacity: 0,
      ease: Power3.easeOut,
    })
      .from(
        clockEl.current,
        { duration: 0.8, x: '-100%', opacity: 0, ease: Power3.easeOut },
        '-=0.6'
      )
      .from(
        portfolioEl.current,
        { duration: 0.8, x: '-100%', opacity: 0, ease: Power3.easeOut },
        '-=0.6'
      );
  }, []);

  useEffect(() => {
    const clock = setInterval(() => setTimer(renderTimer()), 1000);
    return () => clearInterval(clock);
  }, [timer]);

  return (
    <section className="one" ref={container} id="firstPage">
      <iframe
        className="bg-video"
        src="https://player.vimeo.com/video/661908910?&autoplay=1&background=1&loop=1&byline=0&title=0"
        frameBorder={0}
        allowFullScreen
      ></iframe>

      <div className="inner-content">
        <div className="one-header" ref={headerEl}>
          <div className="one-header-logo">
            <img src={logo} alt="logo" />
          </div>
          <br />
          <br />
          <h2 className="one-header-title">
            Look <br />
            creatively.
          </h2>
        </div>
        <Link to={'/works'} className="portfolio" ref={portfolioEl}>
          View Work
        </Link>
        <div className="timer" ref={clockEl}>
          <p className="timer-text">Time is our only limitation</p>
          <span className="timer-clock">{timer}</span>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
