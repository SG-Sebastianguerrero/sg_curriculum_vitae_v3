import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const Section = (props) => {
  return (
    <section
      className={`h-screen w-full flex flex-col justify-center`}
      style={{
        opacity: props.opacity,
      }}>
      {props.children}
    </section>
  );
};

export const OverlayText = () => {
  const scroll = useScroll();

  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setopacityThirdSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 5));
    setOpacitySecondSection(scroll.curve(1 / 5, 1 / 5));
    setopacityThirdSection(scroll.range(2 / 5, 1 / 5));
    setOpacityLastSection(scroll.range(3 / 5, 1 / 5));

    // setopacityThirdSection(scroll.range(3 / 3, 1 / 3));
    // setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });
  useEffect(() => {
    animateTitles();
  }, []);

  /* document.addEventListener("scroll", () => {
    // console.log(scroll.range);
  }); */

  function animateTitles() {
    // animate the component section depending what
    // component is actually then animate eachone
    // with an independent timelines or with
    // same general animations to all of them
    // first i need to know in which section im
    // propably refactor the code to improve it
    // better use the class titles because need only h
    const titles = new SplitType("#main_title");

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      opacity: 1,
      delay: 0.2,
      duration: 0.1,
    });
  }

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <div className="h-screen w-screen flex justify-between">
            <div className="w-1/3 p-4 flex items-center justify-center">
              <div className="max-w-sm w-full">
                <div className="flex flex-col justify-center gap-2 items-center text-right">
                  <h1
                    id="main_title"
                    className="text-7xl text-sg_black mb-10 text-clip">
                    I'M SEBASTIAN{" "}
                    <img
                      className="hidden lg:inline-block w-24 h-fit bg-white rounded-lg shadow-md p-1.5 mr-2"
                      src="./sg_logo.png"
                      draggable={false}
                      width={96}></img>
                    GUERRERO
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-4 flex items-center justify-center text-left gap-2">
              <p className="text-gray-500  max-w-sm">
                I'M SYSTEM ENGINEER{" "}
                <b className="text-sg_black">FULL STACK DEVELOPER</b>,
                PASSIONATE TO{" "}
                <b className="text-sg_black">CONNECT WITH PEOPLE</b> THROUGH THE{" "}
                <b className="text-sg_black">DESIGN & PROGRAMMING</b>. <br />
                <br />I BELIEVE THAT THE PERFECT COMBINATION OF BOTH CAN CREATE{" "}
                <b className="text-sg_black">AMAZING THINGS</b> & IF YOU ARE
                SEARCHING THAT, DEFINITELY YOU ARE ON THE{" "}
                <b className="text-sg_black">RIGHT PLACE</b>.
              </p>
              <span className="animate-bounce  duration-150 delay-200 verticalText text-sg_mustard">
                Scroll Down &rarr;{" "}
              </span>
            </div>
          </div>
        </Section>

        <Section opacity={opacitySecondSection}>
          <div className="w-1/2 p-10">
            <h2 className="font-semibold sm:text-7xl lg:text-[10rem] text-sg_mustard">
              WHAT IF ?{" "}
            </h2>
            <h3 className="	md:text-3xl lg:text-7xl leading-none text-sg_black font-black">
              We bring ideas back to life
            </h3>
          </div>
        </Section>

        <Section opacity={opacityThirdSection}>
          <div className=" w-full h-screen">
            <h2 className="font-semibold font-serif text-2xl">Animate bird</h2>
          </div>
        </Section>

        <Section opacity={opacityLastSection}>
          <div className=" w-full h-screen">
            <h2 className="font-semibold font-serif text-2xl">Experience</h2>
            <p>
              "Post everything you do and have fun doing it." - Bruno Simon{" "}
            </p>
          </div>
        </Section>

        <footer className="h-screen w-full flex flex-col justify-center bg-sg_black text-sg_gray">
          <div>
            <h2 className="font-semibold font-serif text-2xl">
              Today is your lucky day
            </h2>
            <p className="text-gray-500">
              🤙 I'm very expensive but you won't regret it
            </p>
            <p>
              <a>Linkedin</a>
              <a>Github</a>
              <a>Email</a>
              &copy; sg-sebastianguerrero 📞{" "}
            </p>
          </div>
          <div>Skills</div>
        </footer>
      </div>
    </Scroll>
  );
};

export default OverlayText;
