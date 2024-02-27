import { useState } from "react"
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Landing() {
    const [name,setName] = useState("");
    // const history = useHistory()
  return (
    <div>
        <input type="text" onChange={(e)=> {
     setName(e.target.value);
    }}>
    </input>
     <Link to={`/room/?name=${name}`}> Join</Link>
    </div>
  )
}

export default Landing;