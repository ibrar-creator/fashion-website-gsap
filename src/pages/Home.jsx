
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Navbar from '../components/Navbar'
import "../shared/Home.scss"
function Home() {
  const homeRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      timeline
        .from('.navbar', {
          y: -30,
          opacity: 0,
          duration: 0.8,
        })
        .from('.hero-content > *', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
        })
        .from('.hero-image', {
          scale: 1.08,
          opacity: 0,
          duration: 1.2,
        }, '-=0.4')
    }, homeRef)

    return () => ctx.revert()
  }, [])
// Sticky image expansion on scroll
gsap.to('.hero-image', {
  height: '100vh',
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=50vh',
    scrub: true,
  },
})
  return (
    <main ref={homeRef} className="homepage">

      <Navbar />

     <section className="hero">

  <div className="hero-content">
    <p>NEW SEASON / 2026</p>

    <h1>
      BE YOUR <span>STYLE.</span>
    </h1>

    <p>
      Fashion is not just what you wear.
      It's who you are.
    </p>
  </div>

  <div className="hero-image-wrapper">
    <div className="hero-image">
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=2000&q=90"
        alt="Fashion editorial"
      />
    </div>
  </div>

</section>

{/* SECTION 03 - NEW ARRIVALS */}



{/* BACKGROUND IMAGE */}
<div className="fixed-fashion-image">
  <img
    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=2000&q=90"
    alt="Fashion editorial"
  />
</div>

{/* CONTENT SECTION */}
<section className="arrivals-section">

  <div className="arrivals-header">
    <p>THE LATEST EDITION / 2026</p>
    <h2>NEW ARRIVALS.</h2>
  </div>

  <div className="arrivals-card">
    <div className="arrivals-card-image">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=90"
        alt="New collection"
      />
    </div>

    <div className="arrivals-card-content">
      <p>01 / NEW COLLECTION</p>
      <h3>EFFORTLESS<br />ELEGANCE.</h3>
      <p>
        Discover a new perspective on modern fashion.
        Carefully selected pieces designed for timeless elegance.
      </p>
      <a href="#new-arrivals">DISCOVER MORE ↗</a>
    </div>
  </div>

</section>



    </main>
  )
}

export default Home
