import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import Carousel from './Carousel'

const Getproducts  = () =>{
    let navigate = useNavigate()
    // declare the states for getting products 
    const[loading,setLoading] = useState ("")
    const[products,setProducts] = useState ([])
    const[error,setError] = useState ("")

    // state declaration for search 
    const[search,setSearch] = useState("")

    // state declaration for load more 
    const[visibleCount,setVisibleCount] = useState(8)

    // filter logic goes here 
    const filtered_products = products.filter((item) => item.product_name.toLowerCase().includes(search.toLowerCase())||
    item.product_description.toLowerCase().includes(search.toLowerCase())
    );

    // function to get products
    const getproducts = async () =>{
        setLoading("Please wait...")
        try {
            const response = await axios.get("https://mathenyu.alwaysdata.net/api/getproducts")
            setProducts(response.data)
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

// call the function 
 useEffect(()=>{
    getproducts()
 })
//  log to see if we have products 
console.log(products);

// image path 
const imagepath = "https://mathenyu.alwaysdata.net/static/images/"
    return(
        <div className='row container-fluid justify-content justify-content'>
            {/* carousel goes here */}
              <Carousel/>    
              <div className="row justify-content-center mt-3 mb-3">
                <input className="form-control w-50" type="search" placeholder="Search Products..." value={search} onChange={(e)=> setSearch(e.target.value)}></input>  
              </div>       
            <h1 className="text-secondary">Available Albums</h1>
            {/* map the products */}
            {filtered_products.slice(0,visibleCount).map((singleproduct)=>(
                
            <div className='col-md-3 p-3 mb-5'>
                <div className='card shadow p-2'>
                    {/* image goes here  */}
                    <img src={imagepath + singleproduct.product_photo} alt="" height={400} />
                    <div className='card-body'>
                        <h5 className='text-dark'>{singleproduct.product_name}</h5>
                        <p>{singleproduct.product_description.slice(0,50)}...</p>
                        <b className='text-danger'>Ksh{singleproduct.product_cost}</b><br />
                        <span className='badge bg-primary p-2'>{singleproduct.product_category}</span><br /><br />
                        <button className='btn btn-outline-success w-100' onClick={()=>navigate("/mpesa",{state:{singleproduct}})}>Purchase Now</button>
                    </div>
                </div>
            </div>
            ))}
            <div className='text-center mt-3'>
                {visibleCount< filtered_products.length && (
                    <button className='btn btn-primary' onClick={() => setVisibleCount(visibleCount + 8)}>
                        Load More
                    </button>
                )}

            </div>
        </div>
    )
}
export default Getproducts