import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  goToMenu() {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#menu", offsetY: 70 },
      ease: "power4"
    })
  }

  render() {
    return (
      <div id="home" className={ this.props.className }>
        <div
          className="font-poppins text-left text-black-gawe font-bold text-10vw sm:text-6vw lg:text-4.5vw"
        >   
          Get your daily coffee
          only at <span className="whitespace-nowrap text-red-800"> TEMAN GAWE</span>
        </div>
        <button
          className="tracking-wider bg-red-800 text-white text-sm font-bold rounded-lg mt-2 h-10 lg:h-12 w-40 sm:mt-4 sm:text-base md:w-56"
          onClick={ this.goToMenu }
        >
          <FontAwesomeIcon icon={ faMugHot } />
          <span className="ml-2">Carte du Jour</span>
        </button>
      </div>
    )
  }
}