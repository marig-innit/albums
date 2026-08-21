import { useEffect, useState } from "react"

const Navbar = () => {

  const [user , setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem ("user"));
    setUser(loggedUser);
  },[]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
       <section class="row">
    <div class="col-md-12">
        <nav class="navbar navbar-expand-xl bg-secondary">
        {/* <!-- brand  --> */}
            <a href="/" class="navbar-brand"><h4><i class="text-dark">BookRack</i></h4></a>
        {/* <!-- button  --> */}
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#icon">
              <span class="navbar-toggler-icon"></span>
            </button>
        {/* <!-- division containing links  --> */}
         <div class="collapse navbar-collapse" id="icon">
            {/* <!-- left links --> */}
             <div class="navbar-nav">
                <a href="/" class="nav-link">Home</a>
                
                
                <a href="/addproduct" class="nav-link">AddBook</a>

                {user ? (
                  <>
                  <span style={{marginLeft:"800px", marginTop : "10px"}} className="nav_link">Welcome {user.username}</span>
                  <button style={{marginLeft:"10px"}} onClick={logout} className="btn btn-success">Logout</button>
                  
                  </>
                ) : (
                  <>
                  <a href="/signin" class="nav-link">Signin</a>
                  <a href="/signup" class="nav-link">Signup</a>
                  </>
                )
              
              }
               
             </div>
         </div>
        </nav>
    </div>
   </section> 
  )
}

export default Navbar