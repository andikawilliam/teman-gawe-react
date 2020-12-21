import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import TemanGaweLogoBox from 'next/image'

export default class CoffeeCup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    gsap.fromTo(
      ".coffee-cup .fill", 
      { y: '150px' },
      {
        scrollTrigger: {
          trigger: "#menu",
          start: "50% 40%",
          end: "70% 40%",
          toggleActions: "play none none reverse"
        },
        y: '-5px', duration: 1, delay: 0.4
      }
    );
    gsap.fromTo(
      ".coffee-cup .pour", 
      { y: '-100%' },
      {
        scrollTrigger: {
          trigger: "#menu",
          start: "50% 40%",
          end: "70% 40%",
          toggleActions: "play none none reset"
        },
        y: 0, duration: 0.4
      }
    );
  }
  
  render() {
    return (
      <div className="container text-current mx-4 sm:mx-auto z-10">
        <div className="relative coffee-cup opacity-90">
          <div className="pour"></div>
          <div className="px-1 pt-4 h-full w-full absolute z-10">
            <TemanGaweLogoBox
              src="/teman-gawe-logo-box.png"
              width={65}
              height={65}
            />
          </div>
          <div className="fill">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px" 
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
            >
              <path
                fill="#04ACFF"
                id="waveShape"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z" 
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}