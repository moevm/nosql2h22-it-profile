import avatar from "../../../../asserts/avatar.jpg"
import "./style.scss"

export default function Avatar() {
  return (
    <div className="avatar--field">
        <img src={avatar}/>
    </div>
  )
}
