import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../LandingPage2/LandingPage2.css';

const LandingPage4 = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const catImg = document.querySelector(".cat-image2");
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !containerRef.current) return;

    const split = new SplitType(textRef.current, {
      types: 'lines, words',
      lineClass: 'split-line',
      wordClass: 'split-word'
    });

    gsap.set(catImg, {
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
      <div className="content-wrapper1">
        <div className='text-container'>
        <h1>învățare personalizată </h1>
          <p ref={textRef}>
          Combinând în mod optim inteligența artificială și lingvistica, lecțiile sunt create pentru a te ajuta să înveți la nivelul și în ritmul adecvat. Fără teorii inutile, doar ce trebuie să știi, explicat pe înțelesul tuturor.</p>
        </div>
        <img src="src/assets/chillCat.jpg" alt="Cool cat" className="cat-image2" />
       </div>
    </div>
  );
};

export default LandingPage4;