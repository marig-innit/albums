import axios from 'axios'
import {useState} from 'react'
import { Link } from "react-router-dom"

const Signup = () =>{
    // daclare the state 
    const  [username,setUsername] = useState ("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")

    // 3.states for hosting data 
    const [loading,setLoading] = useState("")
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")

    // function to signup 
    const handlesubmit = async(e) =>{
        e.preventDefault()
        setLoading("Please wait...")
        // create an empty digital envelope to store user inputs 
        const formdata = new FormData()
        formdata.append("username",username)
        formdata.append("email",email)
        formdata.append("password",password)
        formdata.append("phone",phone)

        try {
            const response = await axios.post("https://mathenyu.alwaysdata.net/api/signup",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
            
        }
    }
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 card shadow p-5">
                <h1 className="text-secondary">SignUp 👤</h1>
                {/* bind the state here */}
                <h1 className='text-info'>{loading}</h1>
                <h1 className='text-success'>{success}</h1>
                <h1 className='text-danger'>{error}</h1>
                <form action=""  onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="👤  Enter Username" onChange={(e)=>setUsername(e.target.value)} /><br />
                    <input type="email" className="form-control" placeholder="✉️  Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    <input type="password" className="form-control" placeholder="🔑  Enter Password" onChange={(e)=>setPassword(e.target.value)} /><br />
                    <input type="number" className="form-control" placeholder="📱  Enter Phone" onChange={(e)=>setPhone(e.target.value)} /><br />
                    <input type="submit" className="form-control btn btn-primary" value="SignUp" /><br />
                    <p>Already have an account? <Link to="/signin">Sign In 👥</Link> </p>
                </form>
            </div>
        </div>
    )
}
export default Signup