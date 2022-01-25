import React, { useEffect, useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionFive from "./Components/SectionFive/SectionFive";
import { useHistory } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Home: React.FC = () => {
  // set change URL khen scrolling
  let history = useHistory();
  const [activeUrl, setActiveUrl] = useState<Number>(0);
  const handleUrl = (activeUrl: Number) => {
    switch (activeUrl) {
      case 0:
        history.push("#firstPage");
        break;
      case 1:
        history.push("#secondPage");
        break;
      case 2:
        history.push("#thirdPage");
        break;
      case 3:
        history.push("#fourthPage");
        break;
      case 4:
        history.push("#fifthPage");
        break;
    }
  };

  useEffect(() => {
    console.log(activeUrl);

    handleUrl(activeUrl);
  }, [activeUrl]);

  //set up animation scroll to section
  useEffect(() => {
    var settingUp = true;
    function goToSection(i: number) {
      gsap.set("body", { overflow: "hidden" });
      console.log(i * window.innerHeight);

      gsap.to("body", {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: .4,
        onComplete: () => {
          gsap.set("body", { overflow: "auto" });
          buttonClicked = false;
          setActiveUrl(i);
        },
      });
    }
    var buttonClicked = false;
    const instances: globalThis.ScrollTrigger[] = [];
    gsap.utils.toArray("section").forEach((panel: any, i: any) => {
      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom-=10",
          end: "bottom top+=10",
          onEnter: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
            }
          },
          onEnterBack: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
            }
          },
        })
      );
    });
    // set up function for menu_nav
    gsap.utils.toArray("button").forEach((btn: any, i: any) => {
      btn.onclick = () => {
        if (!buttonClicked) {
          buttonClicked = true;
          goToSection(i);
        }
      };
    });
    settingUp = false;
    console.log(instances);
  }, []);

  //variable for array menu_nav
  let array: any[];
  array = Array(5).fill(0);

  return (
    <div className="page-home">
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SectionFive />

      <nav className="menu_nav">
        {array.map((item, index) => (
          <button
            key={index + item}
            className={`${activeUrl === index ? "active buttonNav" : "buttonNav"}`}
          ></button>
        ))}
      </nav>

    </div>
  );
};

export default Home;
