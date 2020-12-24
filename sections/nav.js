import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

import NavMenu from "../components/nav-menu";
import NavBurger from "../components/nav-burger";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideBar: false
    }
    this.goToSection = this.goToSection.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  componentDidMount() {
    gsap.fromTo(
      "#navcube", 
      { opacity: 0, scale: 0.2 },
      {
        scrollTrigger: {
          id: "cube",
          trigger: "#home",
          start: "60% 20%",
          end: "65% 20%",
          scrub: 0.5,
        },
        opacity: 1, scale: 1, ease: 'power1'
      }
    );
    gsap.fromTo(
      "#navtemangawe", 
      { x: '-40px' },
      {
        scrollTrigger: {
          id: "temangawe",
          trigger: "#home",
          start: "60% 20%",
          end: "65% 20%", 
          scrub: 0.5,
        },
        x: 0, ease: 'power1'
      }
    );
  }
  componentWillUnmount() {
    ScrollTrigger.getById("cube").kill(true);
    ScrollTrigger.getById("temangawe").kill(true);
  }

  goToSection(id) {
    let targetId = id.toLowerCase();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#" + targetId, offsetY: 80 },
      ease: "power4"
    })
    
    if(this.state.activeSideBar == true) {
      this.toggleSideBar();
    }
  }

  toggleSideBar() {
    this.setState(state => ({
      activeSideBar: !state.activeSideBar
    }));
  }

  render() {
    return (
      <div className="font-poppins fixed z-40 w-full">
        <nav
          className="flex items-center justify-between bg-nav px-4 py-3 lg:py-2 lg:px-12"
        >
          <div
            className="flex flex-shrink-0 cursor-pointer"
            onClick={ () => this.goToSection("home") }
          >
            <img
              id="navcube"
              className="relative filter-white h-8 w-8 pb-2 md:h-10 md:w-10 md:pb-2 mr-2"
              src={require("../public/teman-gawe-cube.svg")}
            />
            <a
              id="navtemangawe"
              className="relative font-semibold text-white text-xl md:text-2xl tracking-wide"
            >
              TEMAN GAWE
            </a>
          </div>
          <div className="relative w-8 h-8 lg:hidden">
            <NavBurger
              onClick={ this.toggleSideBar }
              active={ this.state.activeSideBar }
            />
          </div>
          <div
            id="navmenu"
            className={
              "justify-center transition-width duration-300 mobile-sidebar desktop-navbar " +
              (this.state.activeSideBar ? "w-3/5" : "")
            }
          >
            <div
              className="text-lg font-bold text-left ml-8 sm:text-3xl lg:mx-0 lg:text-sm lg:flex-grow"
            >
              <NavMenu name="home" onClick={ this.goToSection }/>
              <NavMenu name="about" onClick={ this.goToSection }/>
              <NavMenu name="menu" onClick={ this.goToSection }/>
              <NavMenu name="contact" onClick={ this.goToSection }/>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
