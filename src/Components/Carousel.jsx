import React from 'react'

const Carousel = () => {
  return (
        <section class="row">
        <div class="col-md-12">
            <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                {/* <!-- division containing images  --> */}
                  <div class="carousel-inner" style={{backgroundColor:"ButtonShadow"}}>
                    {/* <!-- div with image 1 --> */}
                      <div class="carousel-item active text-center">
                        <img src="images/eg.jpg" alt="album1" width="80%"/>
                      </div>
                    {/* <!-- div with image 2  --> */}
                     <div class="carousel-item text-center">
                        <img src="images/bm.jpg" alt="album2" width="80%" class=""/>
                     </div>
                    {/* <!-- div with image 3  --> */}
                     <div class="carousel-item text-center">
                        <img src="images/mh.jpg" alt="album3" width="80%"/>
                     </div>
                    {/* <!-- div with image 4  --> */}
                     <div class="carousel-item text-center">
                        <img src="images/hp.jpg" alt="album4" width="80%"/>
                     </div>
                  </div>
                {/* <!-- previous control icon  --> */}
                  <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark"></span>
                  </a>
                {/* <!-- next control icon  --> */}
                 <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark"></span>
                 </a>
            </div>
        </div>
    </section>
  )
}

export default Carousel