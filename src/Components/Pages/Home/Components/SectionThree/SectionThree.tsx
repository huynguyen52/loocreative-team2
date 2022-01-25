import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const data = [
  {
    name: 'Motion',
  },
  {
    name: 'Design',
  },
  {
    name: 'Develop',
  },
  {
    name: 'Culture',
  },
];

const SectionThree: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#thirdPage',
        start: '49% center',
        end: '51% center',
        onEnter: () => tl.restart(),
        onLeaveBack: () => tl.reverse(0).time(0.4),
        onLeave: () => tl.reverse(0).time(0.4),
        onEnterBack: () => tl.restart(),
      },
    });
    tl.from(
      '#three-item-title-1',
      { y: 1000, duration: 0.5, opacity: 0 },
      '-=0.3'
    )
      .from(
        '#three-item-title-2',
        { y: -700, duration: 0.5, opacity: 0 },
        '-=0.3'
      )
      .from(
        '#three-item-title-3',
        { y: 700, duration: 0.5, opacity: 0 },
        '-=0.3'
      )
      .from(
        '#three-item-title-4',
        { y: -700, duration: 0.5, opacity: 0 },
        '-=0.3'
      );
  }, []);

  return (
    <section className="three" id="thirdPage">
      <div className="three-container">
        {data.map((item, idx) => (
          <div className="three-item" key={idx}>
            <h3 className="three-item-title" id={`three-item-title-${idx + 1}`}>
              {item.name}
            </h3>
            <p className="three-item-desc">
              {t(`intrduceData.${idx}.content`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
