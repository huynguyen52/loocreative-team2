import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Teams: React.FC = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.from(container.current, { duration: 0.4, opacity: 0 });
  }, []);

  return (
    <div className="page-team" ref={container}>
      <div className="page-team__container">
        <div className="teams">
          <div className="title-big">TEAMS</div>
          <ul className="list-wr">
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Motion</p>
                <ul className="list">
                  <li>
                    <p className="name">Cienema</p>
                  </li>
                  <li>
                    <p className="name">TVC</p>
                  </li>
                  <li>
                    <p className="name">Viral</p>
                  </li>
                  <li>
                    <p className="name">Show</p>
                  </li>
                  <li>
                    <p className="name">Drama</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Design</p>
                <ul className="list">
                  <li>
                    <p className="name">Brnad Design</p>
                  </li>
                  <li>
                    <p className="name">Motion Design</p>
                  </li>
                  <li>
                    <p className="name">Social Design</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Sound</p>
                <ul className="list">
                  <li>
                    <p className="name">Looc.Music</p>
                  </li>
                  <li>
                    <p className="name">Producing Music</p>
                  </li>
                  <li>
                    <p className="name">Music Studio</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Academy</p>
                <ul className="list">
                  <li>
                    <p className="name">Looc.Music.Academy</p>
                  </li>
                  <li>
                    <p className="name">Academic Seminar</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Games</p>
                <ul className="list">
                  <li>
                    <p className="name">mini Game</p>
                  </li>
                  <li>
                    <p className="name">Virtual R&D</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Platform</p>
                <ul className="list">
                  <li>
                    <p className="name">Video Monster</p>
                  </li>
                  <li>
                    <p className="name">IMG Monster</p>
                  </li>
                  <li>
                    <p className="name">Motion Trend</p>
                  </li>
                  <li>
                    <p className="name">Samsung / SI</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Development</p>
                <ul className="list">
                  <li>
                    <p className="name">Severless</p>
                  </li>
                  <li>
                    <p className="name">Platform</p>
                  </li>
                  <li>
                    <p className="name">WEB</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="wr">
              <div className="list__all">
                <p className="list__name">Store</p>
                <ul className="list">
                  <li>
                    <p className="name">Space.Looc</p>
                  </li>
                  <li>
                    <p className="name">Maho Table</p>
                  </li>
                  <li>
                    <p className="name">Piggy Bank</p>
                  </li>
                  <li>
                    <p className="name">Huion</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
