import axios from "axios"
import { useState } from "react"

const Addproduct = () =>{
    const [productname,setProductName] = useState("")
    const [productcategory,setProductCategory] = useState("")
    const [Productdescription,setProductDescription] = useState("")
    const [productcost,setProductCost] = useState("")
    const [productphoto,setProductPhoto] = useState("")
    // define the states for hosting data 
    const [loading,setLoading] = useState("")
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
    // function to handle submit
    const handlesubmit = async(e) =>{
        e.preventDefault()
        setLoading("Please wait...")
        // create empty envelope
        const formdata = new FormData()
        formdata.append("product_name",productname)
        formdata.append("product_category",productcategory)
        formdata.append("product_description",Productdescription)
        formdata.append("product_cost",productcost)
        formdata.append("product_photo",productphoto)
        try {
            const response = await axios.post("https://mathenyu.alwaysdata.net/api/addproduct",formdata)
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
                <h1>Upload Products📦📦</h1>
                {/* bind the states here */}
                <h1 className="text-warning">{loading}</h1>
                <h1 className="text-success">{success}</h1>
                <h1 className="text-danger">{error}</h1>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="📋 Enter Product Name" required onChange={(e)=>setProductName(e.target.value)}/><br />
                    <input type="text" className="form-control" placeholder="🛍️ Enter Product Category" required onChange={(e)=>setProductCategory(e.target.value)}/><br />
                    <textarea name="" id="" className="form-control" placeholder="📝 Describe your Product" required onChange={(e)=>setProductDescription(e.target.value)}></textarea><br />
                    <input type="number" className="form-control" placeholder="💰 Enter Product Cost" onChange={(e)=>setProductCost(e.target.value)} /><br />
                    <b>Browse/Upload Product Image</b>
                    <input type="file" className="form-control" required accept="image/*" onChange={(e)=>setProductPhoto(e.target.files[0])}/><br />
                    <input type="submit" value ="Upload Product" className="btn  bg-primary text-white"/>
                </form>
            </div>
        </div>
    )
}
export default Addproduct