export default class TextParagraph extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div
        id={ this.props.topic }
        className={ this.props.className }
      >
        <p 
          className="font-raleway text-black-gawe text-lg sm:text-xl lg:text-2xl xl:text-1.6vw xl:leading-2.5vw sm:tracking-wide"
        >
          <span className="font-bold">{ this.props.highlight }</span>
          { this.props.paragraph }
        </p>
      </div>
    )
  }
}