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
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none reverse none',
      }
    });

    return () => {
      if (split.revert) split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="landing-page" ref={containerRef}>
      <div className="content-wrapper">
          <p ref={textRef}>
            Welcome to the Catverse<br/>
            Explore the feline universe
          </p>
        <img src="src/assets/dopeCat.png" alt="Cool cat" className="cat-image" />
       </div>
    </div>
  );
};

export default LandingPage2;