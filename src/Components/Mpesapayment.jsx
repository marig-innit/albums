import axios from "axios"
import { useState } from "react"
import React from "react"
import { useLocation } from "react-router-dom"
const Mpesapayment = () =>{

    const {singleproduct} = useLocation().state || {}
    // image path goes here 
    const imagepath = "https://mathenyu.alwaysdata.net/static/images/"
    // declare the states here 
    const [phone,setPhone] = useState("")
    const [loading,setLoading] = useState("")
    const [success,setSuccess] = useState ("")
    const [error,setError] = useState("")
    // function to handle submit
    const handlesubmit = async(e)=>{
        e.preventDefault()
        setLoading ("Please wait...")
        const formdata = new FormData()
        formdata.append("phone",phone)
        formdata.append("amount",singleproduct.product_cost)

        try {
            const response = await axios.post("https://mathenyu.alwaysdata.net/api/mpesa_payment")
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
            
        }


    }

    return(
        <div className="row justify-content-center">
            <div className="col-md-6 card shadow p-4">
                {/* image goes here */}
                <img src={imagepath + singleproduct.product_photo} alt="" />
                <h5>{singleproduct.product_name}</h5><br />
                <p>{singleproduct.product_description}</p>
                <b className="text-warning">{singleproduct.product_cost}</b><br />
                <span className="badge bg-success">{singleproduct.product_category}</span><br />
                <h4 className="text-warning">{loading}</h4>
                <h4 className="text-success">{success}</h4>
                <h4 className="text-danger">{error}</h4>
                <form action="" onSubmit = {handlesubmit}>
                    <input type="tel" className="form-control" placeholder="Enter phone 254xxxxxxxxx" onChange={(e)=>setPhone(e.target.value)}/><br />
                    <button className="btn btn-primary">Make Payment</button>
                </form>

            </div>
          
        </div>
    )
}
export default Mpesapayment