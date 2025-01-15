const Cards = (props) => {
    let {title,text} = props
  return (
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default Cards
