import TextParagraph from '../components/text-paragraph'

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
        <div
          className="absolute bottom-0 pb-56 sm:pb-56 lg:pb-72 lg:pr-16 lg:flex lg:justify-between xl:pb-60vh"
        >
          <TextParagraph
            className="w-3/5 sm:w-1/2 lg:w-1/3 lg:mt-12 xl:w-2/5 xl:mt-20"
            topic="Why"
            highlight="Inspired"
            paragraph="
              by how the people around us rely on good coffee to work, we chose
              the name ‘Teman’ (friend) and ‘Gawe’ (work). 
            " 
          />
          <TextParagraph
            className="mt-4 w-3/5 sm:w-1/2 lg:w-1/3 lg:mt-12 xl:w-2/5 xl:mt-20"
            topic="Why"
            highlight="Our mission"
            paragraph="
              is to provide high quality coffee at affordable prices, because 
              everyone deserves a great coffee.
            " 
          />
        </div>
      </div>
    )
  }
}