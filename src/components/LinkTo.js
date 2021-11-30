import { Link } from 'react-router-dom'

function LinkTo(props) {
  return (
    <div className="LinkTo">
      <Link 
        to={props.to} 
        className={props.className}>
          {/* <props.icon /> */}
          {props.innerText}
      </Link>
    </div>
  )
}

export default LinkTo