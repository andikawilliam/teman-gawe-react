export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="block cursor-pointer nav-grow-shadow uppercase hover:opacity-70 transition-opacity duration-300 mt-6 sm:mt-10 lg:ml-6 lg:mt-0 lg:inline-block"
        onClick={ () => this.props.onClick(this.props.name)}
      >
        { this.props.name }
      </div>
    )
  }
}