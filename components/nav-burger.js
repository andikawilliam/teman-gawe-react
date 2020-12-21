export default function NavBurger(props) {
  return (
    <div
      className={
        "cursor-pointer absolute z-30 " + 
        (props.active ? "active-bar" : "")
      }
      onClick={props.onClick}
    > 
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}