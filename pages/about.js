import TextParagraph from '../components/text-paragraph'
import GaweKopiCookie from 'next/image'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about" className={ this.props.className }>
        <div className="lg:flex lg:justify-between">
          <TextParagraph
            className="mt-4 w-3/4 sm:w-3/5 lg:w-2/5"
            topic="What"
            highlight="Teman Gawe"
            paragraph="
              is a coffee establishment founded in Yogyakarta, Indonesia.
            " 
          />
          <TextParagraph
            className="mt-4 w-3/4 sm:w-3/5 lg:w-2/5"
            topic="Origins"
            highlight="We started out"
            paragraph="
              with a modest passion for coffee, which grew into a full-time 
              endeavor for making coffee for the people around us.
            "
          />
        </div>
        <div className="absolute bottom-0 pb-64 sm:pb-8 lg:pb-72 lg:pr-16 lg:flex lg:justify-between xl:pb-35vh">
          <TextParagraph
            className="w-3/5 sm:w-1/2 lg:w-1/3 lg:mt-12 xl:w-2/5 xl:mt-20"
            topic="Why"
            highlight="Inspired"
            paragraph="
              by how the people around us rely on good coffee to work, we chose
              the name ‘Teman’ (friend) and ‘Gawe’ (work). We provide high 
              quality coffee at competitive prices, because everyone deserves a
              great coffee.
            " 
          />
          <div className="hidden sm:block sm:relative sm:w-1/2 sm:mt-10 sm:h-56 lg:w-2/5 lg:mt-10 lg:h-64 xl:h-21vw xl:w-35vw ">
            <GaweKopiCookie
              className="rounded-xl"
              src="/sketch-coffee.jpg"
              layout="fill"
            />
          </div>
        </div>
      </div>
    )
  }
}