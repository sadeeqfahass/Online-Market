import React from 'react'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="left">
            <h1 className="main-heading">Dawanau International Commodity Market</h1>
            <p className="sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi? Nulla dolore corporis esse consequatur quasi, maxime illo nostrum cupiditate perspiciatis est vitae rem aut officia laborum earum adipisci voluptas!</p>
            <a href="#" className="btn">Browse Products <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="right">
            <img src="africaMap.png" alt="" />
            <img src="ginger.webp" alt="" className='img-round ginger'/>
            <img src="hibiscusLeaves.jpeg" alt="" className='img-round hibiscus'/>
            <img src="maize.jpeg" alt="" className='img-round maize'/>
            <img src="sesameSeeds.webp" alt="" className='img-round sesame'/>
            <img src="soyaBean.jpeg" alt="" className='img-round soyabean'/>
        </div>
      </section>
    </>
  )
}

export default Hero
