import { useState } from "react"
import { login } from "../config/firebase"
import { useNavigate } from "react-router-dom"

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signin = async () => {
        try {
            await login(email, password)
            navigate('/dashboard')
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width: 400, height: 300, border: '1px solid blueviolet', backgroundColor: '#e7ebd5', }}>
            <h2>Sign In</h2>
            <input className="input" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" />
            <input className="input" onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <button style={{width:100, margin:'auto'}} onClick={signin}>Sign in</button>
            <p>Don't have an account.
                <span className="App-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>Click here</span>
            </p>
        </div>
    )
}

export default SignIn