import React, { useEffect } from 'react';
import { gsap } from "gsap";
import Button from '../../Components/Button/Button.jsx';
import './LandingPage1.css';

const LandingPage1 = () => {
    useEffect(() => {
        const words = document.querySelectorAll(".word");
        const catImg = document.querySelector(".cat-img");
    
      gsap.fromTo(catImg,
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
    
      gsap.to(catImg, {
        y: "-=20",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
      });
    
        words.forEach((word) => {
          const letters = word.textContent.split("");
          word.textContent = "";
          letters.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
          });
        });
    
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { stagger: 0.05 },
          paused: true,
        });
    
        words.forEach((word, i) => {
          if (i) {
            tl.from(word.childNodes, {
              y: -100,
              ease: "expo.out"
            }, "+=1");
            tl.to(words[i - 1].childNodes, {
              y: 100,
              ease: "expo.in"
            }, "<-=0.3");
          }
        });
    
        tl.fromTo(words[0].childNodes, {
          y: -100
        }, {
          y: 0,
          ease: "expo.out",
          immediateRender: false,
        }, "+=1")
        .to(words[words.length - 1].childNodes, {
          y: 100,
          ease: "expo.in"
        }, "<-=0.3");
    
        gsap.from(words[0].childNodes, {
          y: -100,
          ease: "expo.out",
          stagger: 0.05,
          onComplete: () => tl.play(),
        });
    
        return () => {
          tl.kill();
        };
      }, []);
      return (
        <div className="first-page">
        <img src="src/assets/cat1.png" alt="Cat" className="cat-img"/>
        <div className="container-text">
          <div className="rotating-text">
            <p>
              Matematica este&nbsp;
              <span className="words-wrapper">
                <span className="word w-1">distractiva.</span>
                <span className="word w-2">accesibila.</span>
                <span className="word w-3">gratuita.</span>
                <span className="word w-4">digitalizata.</span>
                {/* <span className="word w-5">homophobic.</span> */}
              </span>
            </p>
          </div>
          <Button label="Invata acum!" href="#" className="button1"/>
        </div>
      </div>
      );
}

export default LandingPage1;