import React from 'react'
import "../styles/Headers.css"

const Headers = () => {
  return (
   <>
   <section className='section-navbar'>
    <div className="container">
      <div className="header ">
      <div className="img">
        <img className='img-fluid' src="https://gico.io/spcica/images/logo.png" alt="" />
      </div>
      <div className="mobile">
        <img className="img"src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" />
      </div>
      <div className="liks">
      <a href="/">Home</a>
      <a href="/">About-us</a>
      <a href="/">Recipes</a>
      <a href="/">Categories</a>
      <a href="/">Blogs</a>
      <a href="/">Contact</a>

      </div>
      
      </div>
    

    </div>

   </section>
   
   </>
  )
}

export default Headers