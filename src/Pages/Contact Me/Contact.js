import React from "react";
import "./ContactStyle.css";
import gsap from "gsap";
// import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
import { useEffect, useRef } from "react/cjs/react.development";

function Contact() {
  const headingRule = useRef(null);
  useEffect(() => {
    gsap.from(headingRule.current, {
      duration: 1,
      opacity: 1,
      y: 120,
      stagger: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRule.current,
      },
    });
  }, []);
  return (
    <div className="contactPage">
      <div className="heading" ref={headingRule}>
        <span>Contact</span>

        <span> Me</span>
      </div>
      <div className="headingMask"></div>
      <div className="specification">
        <div className="techs">
          <h4>Technology used in website</h4>
          <li>React JS</li>
          <li>SCSS</li>
          <li>GSAP</li>
        </div>
        <div className="line"></div>
        <div className="owner">
          <h4>Design & Developed By</h4>
          <div className="developer">Prajwal D. Padal</div>
        </div>
      </div>
      <div className="footer">
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </div>
      <img src="/Numbers/folded-effect.png" alt="img" />
    </div>
  );
}

export default Contact;
