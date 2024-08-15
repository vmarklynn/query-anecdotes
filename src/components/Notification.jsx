import { useReducer } from "react"


const Notification = ({ text }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={style}>
      <p>{text}</p>

    </div>
  )
}

export default Notification
