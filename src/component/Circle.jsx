function Circle(props) {
  return (
    <div>
        <div className="circleContainer">
        <img src={props.src} alt="" />
        <h5>{props.text}</h5>
        </div>
    </div>
  )
}

export default Circle