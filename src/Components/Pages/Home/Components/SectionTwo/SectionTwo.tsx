import React, { useEffect, useRef } from 'react';
import bg from '../../../../../Assets/Images/Home/Section2/newmain2.b7296779.png';
import gsap, { Power3 } from 'gsap';

const SectionTwo: React.FC = () => {
  const container = useRef(null);
  const brandEl = useRef(null);
  const textEl = useRef(null);

  useEffect(() => {
    //On Enter
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textEl.current,
        start: '49% 50%',
        end: '51% 50%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave: () => tl.reverse(0),
        onLeaveBack: () => tl.reverse(0),
      },
    });
    tl.from(brandEl.current, {
      opacity: 0,
      duration: 0.4,
      y: -80,
    }).from(textEl.current, {
      opacity: 0,
      duration: 0.6,
      x: '-100%',
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <section className="two" ref={container} id="secondPage">
      <img src={bg} alt="back ground" className="img-wrapper" />
      <div className="innner-content">
        <div className="text" ref={textEl}>
          <p>
            Dreams come true <br /> Without that possibility, <br /> Nature
            would not incite <br /> us to have them.
          </p>
        </div>
        <div className="brand-name" ref={brandEl}>
          Loocreative <br /> Philosophy
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
