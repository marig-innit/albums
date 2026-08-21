import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//      <section class="row bg-secondary p-4">
//         <div class="col-md-4">
//             <h3 class="text-center text-white">About Us</h3>
//             <p class="text-white">Welcome to BookRack, your trusted source for quality coursebooks and learning materials. We provide carefully selected resources for students, teachers, schools, and institutions across various subjects and levels. Our goal is to make learning easier by offering reliable books, friendly service, and a convenient shopping experience.</p>
//         </div>
//         <div class="col-md-4">
//             <h3 class="text-center text-white">Contact Us</h3>
//             <form action="">
//                 <input type="email" placeholder="Enter your Email" class="form-control"/><br />
//                 <textarea placeholder="Leave a comment" class="form-control"></textarea> <br/>
//                 <input type="submit" value="Send Message" class="btn btn-outline-danger"/>
//             </form>
//         </div>
//         <div class="col-md-4">
//            <h3 class="text-center text-white">Stay Connected</h3>
//            <a href="https://www.facebook.com">
//             <img src="images/fb.png" alt="facebook"/>           
//            </a> 
//            <a href="https://www.instagram.com">
//             <img src="images/in.png" alt="instagram"/>
//            </a>
//            <a href="https://www.twitter.com">
//             <img src="images/x.png" alt="twitter"/>
            
//            </a>
//         </div>
//      </section>
//      <footer className="bg-dark p-3  text-center">
//         <b className="text-danger">Developed by Mathenyu.&copy;2026.All rights reserved</b>
//      </footer>
//     </div>
//   )
// }

const Footer = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <section className="row bg-secondary p-4 m-0">
          
          <div className="col-md-4">
            <h3 className="text-center text-white">About Us</h3>
            <p className="text-white">
              Welcome to BookRack, your trusted source for quality coursebooks
              and learning materials. We provide carefully selected resources
              for students, teachers, schools, and institutions across various
              subjects and levels. Our goal is to make learning easier by
              offering reliable books, friendly service, and a convenient
              shopping experience.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="text-center text-white">Contact Us</h3>

            <form>
              <input
                type="email"
                placeholder="Enter your Email"
                className="form-control"
              />

              <br />

              <textarea
                placeholder="Leave a comment"
                className="form-control"
              ></textarea>

              <br />

              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-danger"
              />
            </form>
          </div>

          <div className="col-md-4">
            <h3 className="text-center text-white">Stay Connected</h3>

            <a href="https://www.facebook.com">
              <img src="images/fb.png" alt="facebook" />
            </a>

            <a href="https://www.instagram.com">
              <img src="images/in.png" alt="instagram" />
            </a>

            <a href="https://www.twitter.com">
              <img src="images/x.png" alt="twitter" />
            </a>
          </div>

        </section>
      </div>

      <footer className="bg-dark p-3 text-center">
        <b className="text-danger">
          Developed by Mathenyu. &copy;2026. All rights reserved
        </b>
      </footer>
    </div>
  );
};

export default Footer