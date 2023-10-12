import { useState } from "react"
import { register } from "../config/firebase"
import { useNavigate } from "react-router-dom"

function Signup(){
    const [fullname , setFullname] = useState('')
    const [age , setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const signup = () =>{
        register(email, password, fullname, age)
    }
    return(
        <div style={{width:400, height:350, border: '1px solid #61dafb', backgroundColor:'#e7ebd5',}}>
            <h2>Sign Up</h2>
            <input className="input" onChange={e => setFullname(e.target.value)} type="text" placeholder="Enter your Full Name" /> <br />
            <input className="input" onChange={e => setAge(e.target.value)} type="number" placeholder="Enter your Age" /> <br />
            <input className="input" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" /> <br />
            <input className="input" onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter a password" /> <br />
            <button onClick={signup}>Sign up</button> <br />
            <p>Already have an account.
                <span className="App-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}> Click here</span>
            </p>
        </div>
    )
}

export default Signup