import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LandingPage2.css';

const LandingPage2 = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !containerRef.current) return;

    const split = new SplitType(textRef.current, {
      types: 'lines, words',
      lineClass: 'split-line',
      wordClass: 'split-word'
    });

    gsap.set(split.words, { y: '100%', opacity: 0 });

    gsap.to(split.words, {
      y: '0%',
      opacity: 1,
      duration: 3,
      stagger: 0.1,
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
        <h1>gratuit. distractiv.<br/> eficient. </h1>
          <p ref={textRef}>
          Cu Mate10, ai parte de o experiență de învățare inteligentă, rapidă și adaptată perfect nevoilor tale. Nu mai e nevoie să te lupți singur cu manualele sau să memorezi mecanic formule – aici înveți prin metode dovedite, care transformă orice concept abstract în ceva tangibil și ușor de înțeles.
          </p>
        </div>
        <img src="src/assets/dopeCat.png" alt="Cool cat" className="cat-image" />
       </div>
    </div>
  );
};

export default LandingPage2;