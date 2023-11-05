import { useNavigate } from "react-router-dom"
import { SignIn } from "../config/firebase"
import Button from '@mui/material/Button'

function Signin() {
    const navigate = useNavigate()

    const signin = () => {
        try {
            SignIn()
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <div style={{ textAlign: 'center', borderRadius: '10px', padding: '10px', lineHeight: '3', margin: 'auto', width: '400px', height: '300px', border: '1px solid deeppink', marginTop: '40px', marginBottom: '40px' }}>
            <h2>Welcome!</h2>
            <h4>Log in with your google account to continue.</h4>
            <Button style={{ margin: 'auto' }} variant="contained" onClick={signin}>Connect with Google</Button>
        </div>
    )
}
export default Signin