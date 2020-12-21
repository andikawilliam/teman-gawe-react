import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}
import TemanGaweLogo from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  goToSection(id) {
    let targetId = id.toLowerCase();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#" + targetId, offsetY: 80 },
      ease: "power4"
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <div
          className="text-center text-xs md:text-sm sm:items-end py-8 sm:grid sm:grid-cols-4 sm:gap-4 sm:pb-8 sm:pt-4"
        >
          <div className="px-2 md:px-10">
            <div className="flex justify-center flex-shrink-0 pt-4 lg:pb-0">
              <TemanGaweLogo
                className="top-0 max-w-full "
                src="/teman-gawe-logo.png"
                width={120}
                height={90}
              />
            </div>
          </div>
          <div className="pt-4 h-full">
            <p className="my-2 text-xl font-bold">
              Menu
            </p>
            <div id="contact" className="grid grid-cols-2">
              <p 
                className="cursor-pointer"
                onClick={ () => this.goToSection("home") }>
                Home
              </p>
              <p 
                className="cursor-pointer"
                onClick={ () => this.goToSection("menu") }>
                Menu
              </p>
              <p 
                className="cursor-pointer"
                onClick={ () => this.goToSection("about") }>
                About
              </p>
              <p 
                className="cursor-pointer"
                onClick={ () => this.goToSection("contact") }>
                Contact
              </p>
            </div>
          </div>
          <div className="pt-4 h-full">
            <p className="my-2 text-lg font-bold">Contact</p>
            <p>
              <a href="index.html">
                temangawecoffee@gmail.com
              </a>
            </p>
          </div>
          <div className="pt-4 h-full">
            <p className="my-2 text-lg font-bold">
              Socials
            </p>
            <div className="font-omnes md:text-lg">
              <a
                className="fa fa-instagram bg-green-grass p-1 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/temangawe/"
              ></a>
              <a
                className="bg-green-grass rounded-full p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/temangawe/"
              >
                <FontAwesomeIcon icon={ faInstagram }/> @temangawe
              </a>
            </div>
          </div>      
        </div>
        <div
          className="bg-gradient-to-t from-red-800 to-red-teman w-full text-white text-center text-sm lg:text-base font-thin pt-2 h-10 px-8 md:px-20"
        >
          © Teman Gawe. All rights reserved
        </div>
      </div>
    )
  }
}