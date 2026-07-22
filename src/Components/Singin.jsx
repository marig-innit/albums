import axios from 'axios'
import {useState} from 'react'
import { Link,useNavigate } from "react-router-dom"

const Signin = () =>{
    let navigate = useNavigate();
    // daclare the state 
    const [email,setEmail] = useState ("")
    const [password,setPassword] = useState ("")

    // declare the states for posting data 
    const [loading,setLoading] = useState ("")
    const [success,setSuccess] = useState ("")
    const [error,setError] = useState ("")

    // state for showing and hiding the password
    const[showPassword,setShowPassword] = useState(false)


    // function to handlesubmit 
    const handlesubmit = async (e) =>{
        e.preventDefault()
        setLoading("Please wait...")
        // create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("email",email)
        formdata.append("password",password)
        try {
            const response = await axios.post("https://mathenyu.alwaysdata.net/api/signin",formdata)
            setSuccess(response.data.message)
            setLoading("")
            
            // redirect user to getproducts page 
            // NB:Upon login successful 
            if(response.data.user){
                // it means login successfully
                navigate("/") 

            }
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
        }

        
    }


    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 card shadow p-5">
                <h1 className="text-secondary">Sign In</h1>
                <h1 className='text-warning'>{loading}</h1>
                <h1 className='text-success'>{success}</h1>
                <h1 className='text-danger'>{error}</h1>
                <form action="" onSubmit={handlesubmit}>
                    <input type="email" className="form-control" placeholder="📤  Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    {/* <input type="password" className="form-control" placeholder="🔒  Password" onChange={(e)=>setPassword(e.target.value)} /><br /> */}
                    <div className='input-group'>
                        <input type={showPassword ? "text" : "password"} className='form-control' placeholder="🔑  Enter Password" onChange={(e)=>setPassword(e.target.value)} />
                        <span className='input-group-text' style = {{cursor : "pointer"}}
                        onClick = {()=>setShowPassword(!showPassword)} >
                            {showPassword ? "🔒" : "👁️"}
                        </span>
                    </div>
                    <br />
                    <button className="form-control bg-primary text-dark">Sign In</button>
                    <p>Don't have an account? <Link to="/signup">Sign Up 👥</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Signin