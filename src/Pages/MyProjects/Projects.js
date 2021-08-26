import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./ProjectStyle.css";
import num1 from "../../Styles/num1.svg";
export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: true,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);
  return (
    <div className="project-sec">
      {/* <div className="semi-circle"></div> */}

      <div className="container" ref={panelsContainer}>
        <div className="title">My Projects</div>
        <div className="all-panel">
          <section className="panel blue" ref={(e) => createPanelsRefs(e, 0)}>
            <div className="project1">
              <img src={num1} alt="logo" />
              <div className="proj-name">Railway Site</div>
              <div className="proj-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                ut et congue ipsum ut. Sem eget id lorem amet, eget.
              </div>
            </div>
          </section>
          <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
            ONE
          </section>
          <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
            TWO
          </section>
          <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
            THREE
          </section>
          <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
            FOUR
          </section>
          <section className="panel gray" ref={(e) => createPanelsRefs(e, 5)}>
            FIVE
          </section>
          {/* <section className="panel indigo" ref={(e) => createPanelsRefs(e, 6)}>
            SIX
          </section>
          <section className="panel violet" ref={(e) => createPanelsRefs(e, 7)}>
            SEVEN
          </section>
          <section className="panel yellow" ref={(e) => createPanelsRefs(e, 8)}>
            EIGHT
          </section> */}
        </div>
      </div>
    </div>
  );
}
