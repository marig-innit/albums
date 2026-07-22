import React from 'react'

const Navbar = () => {
  return (
       <section class="row">
    <div class="col-md-12">
        <nav class="navbar navbar-expand-xl bg-secondary">
        {/* <!-- brand  --> */}
            <a href="/" class="navbar-brand"><h4><i class="text-dark">MusicBooms 💿🎧</i></h4></a>
        {/* <!-- button  --> */}
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#icon">
              <span class="navbar-toggler-icon"></span>
            </button>
        {/* <!-- division containing links  --> */}
         <div class="collapse navbar-collapse" id="icon">
            {/* <!-- left links --> */}
             <div class="navbar-nav">
                <a href="/" class="nav-link">Home</a>
                <a href="/signin" class="nav-link">Signin</a>
                <a href="/signup" class="nav-link">Signup</a>
                <a href="/addproduct" class="nav-link">Addproduct</a>
                <a href="" class="nav-link"></a>
                <a href="" class="nav-link"></a>
             </div>
         </div>
        </nav>
    </div>
   </section> 
  )
}

export default Navbar