import React from 'react'

const Footer = () => {
  return (
    <div>
     <section class="row bg-secondary p-4">
        <div class="col-md-4">
            <h3 class="text-center text-white">About Us</h3>
            <p class="text-white">Welcome to our store, where music lovers can discover and own the albums they love. We are passionate about connecting fans with authentic music from a wide range of artists and genres, from timeless classics to the latest releases.</p>
        </div>
        <div class="col-md-4">
            <h3 class="text-center text-white">Contact Us</h3>
            <form action="">
                <input type="email" placeholder="Enter your Email" class="form-control"/><br />
                <textarea placeholder="Leave a comment" class="form-control"></textarea> <br/>
                <input type="submit" value="Send Message" class="btn btn-outline-danger"/>
            </form>
        </div>
        <div class="col-md-4">
           <h3 class="text-center text-white">Stay Connected</h3>
           <a href="https://www.facebook.com">
            <img src="images/fb.png" alt="facebook"/>           
           </a> 
           <a href="https://www.instagram.com">
            <img src="images/in.png" alt="instagram"/>
           </a>
           <a href="https://www.twitter.com">
            <img src="images/x.png" alt="twitter"/>
            
           </a>
        </div>
     </section>
     <footer className="bg-dark p-4 text-center">
        <b className="text-danger">Developed by Mathenyu.&copy;2026.All rights reserved</b>
     </footer>
    </div>
  )
}

export default Footer