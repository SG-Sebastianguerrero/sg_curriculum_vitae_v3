import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Projects from "../pages/Projects";
export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const screen_width = Math.round((1500 / window.innerWidth) * 100);

  function moveImages(e) {
    gsap.to(".image", {
      objectPosition: `${e.progress * 100}% center`,
      duration: 1,
      delay: 0.1,
    });
  }

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${screen_width}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 top",
          scrub: 0.6,
          pin: true,
          markers: true,
          onUpdate: moveImages,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-full">
            <Projects />
          </div>
          {/* <h3>section 1</h3> */}
          {/* <div
            style={{ width: "calc(100vw + 25vmin)" }}>
            className="scroll-section"
            <h3>section 2</h3>
          </div> */}
          {/* <div className="scroll-section">
            <h3>section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>section 4</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}
