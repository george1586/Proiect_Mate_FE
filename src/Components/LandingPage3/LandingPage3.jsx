import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LandingPage3.css';

const LandingPage3 = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const catImg = document.querySelector(".cat-image1");
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !containerRef.current) return;

    const split = new SplitType(textRef.current, {
      types: 'lines, words',
      lineClass: 'split-line',
      wordClass: 'split-word'
    });

    gsap.set(catImg, {
      y: "-10%",
      opacity: 0,
      scale: 0.9,
    });

    gsap.to(catImg, {
            y: "-10%",
            opacity: 1,
            duration: 1,
            ease: "sine.inOut",
            scale: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 100%',
              end: 'bottom 25%',
              toggleActions: 'play reset play reset',
            }});

    gsap.set(split.lines, { y: '100%', opacity: 0 });


    gsap.to(split.lines, {
      y: '0%',
      opacity: 1,
      duration: 3,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play reset play reset',
      }
    });

    return () => {
      if (split.revert) split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="landing-page" ref={containerRef}>
      <div className="content-wrapper2">
        <img src="src/assets/smartCat.png" alt="Cool cat" className="cat-image1" />
        <div className='text-container1'>
        <h1>bazat pe știință</h1>
          <p ref={textRef}>
          Folosim metode demonstrate științific și abordări creative pentru a transforma orice lecție într-o experiență de învățare eficientă.De la algebra de bază până la probleme complexe, progresezi în ritmul tău, cu feedback instant care te ajută să înveți din greșeli. 
          </p>
        </div>
       </div>
    </div>
  );
};

export default LandingPage3;