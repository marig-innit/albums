import React from 'react'

const Videos = () => {
  return (
    <div className='container mt-5'>   
        {/* section 1 */}
        <h2 className="text-center text-success mb-4">Superbowl Performance</h2>
        <section className="row">
            {/* child 1 goes here */}
            <div className="col-md-4 mb-4">
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/IXXxciRUMzE?si=tetBDckbGr_mh9Qz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <h5 className="mt-2 text-center">Lizzo</h5>
                <p className="text-center text-muted">About Dmn time by Grammy award winner Lizzo.</p>
            </div>
            {/* child 2 goes here */}
            <div className="col-md-4 mb-4">
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/F0cdbR5ognY?si=Vki-8CwLIW-YxJis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <h5 className="mt-2 text-center">Doechii</h5>
                <p className="text-center text-muted">Produced in 2025 by Doechii,one of the Top 100 artists in the world.</p>
            </div>
            {/* child 3 goes here */}
            <div className="col-md-4 mb-4">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/0M1UCYRZAtM?si=ALGcJEEbZFqpxQil" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  <h5 className="mt-2 text-center">Shawn Mendes</h5>
                <p className="text-center text-muted">Best producing artist of all time.why why why by Shawn Mendes.</p>
            </div>
        </section>
        {/* end of section 1 */}
        <hr className='my-5'/>

    </div>
  )
}

export default Videos