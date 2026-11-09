
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import '../shared/Home.scss'

gsap.registerPlugin(ScrollTrigger)

const fashionImage =
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=2000&q=90'

function Home() {
  const homeRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.navbar', {
        y: -24,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.hero-content > *', {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.15,
        ease: 'power3.out',
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
        .to('.hero-image', {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
        }, 0)
        .to('.hero-content', {
          yPercent: -115,
          autoAlpha: 0,
          ease: 'none',
        }, 0)
        .to('.hero-image img', {
          scale: 1,
          ease: 'none',
        }, 0)

      gsap.to('.fixed-fashion-image', {
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.arrivals-scene',
          start: 'bottom bottom',
          end: 'bottom bottom-=80',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: '.arrivals-card-image',
          start: 'top 100px',
          endTrigger: '.arrivals-scene',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to('.arrivals-card-image', {
        autoAlpha: 0,
        ease: 'none',
      }, 0.9)

      gsap.timeline({
        scrollTrigger: {
          trigger: '.editorial-image',
          start: 'top 100px',
          endTrigger: '.editorial-section',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to('.editorial-image', {
        autoAlpha: 0,
        ease: 'none',
      }, 0.9)

      gsap.timeline({
        scrollTrigger: {
          trigger: '.campaign-image',
          start: 'top 100px',
          endTrigger: '.campaign-section',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to('.campaign-image', {
        autoAlpha: 0,
        ease: 'none',
      }, 0.9)

      gsap.timeline({
        scrollTrigger: {
          trigger: '.lookbook-grid',
          start: 'top 100px',
          endTrigger: '.lookbook-section',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to('.lookbook-grid', {
        autoAlpha: 0,
        ease: 'none',
      }, 0.9)
    }, homeRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={homeRef} className="homepage">

      <Navbar />

      <section className="hero" aria-label="Fashion season introduction">
        <div className="hero-content">
          <p className="hero-content__eyebrow">NEW SEASON / 2026</p>
          <h1>
            BE YOUR <span>STYLE.</span>
          </h1>
          <p className="hero-content__description">
            Fashion is not just what you wear. It&apos;s who you are.
          </p>
          <span className="hero-content__scroll">SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-image">
          <img src={fashionImage} alt="2026 fashion editorial" />
          <span className="hero-image__caption">ATELIER / SPRING 2026</span>
        </div>
      </section>

      <section className="arrivals-scene" id="new-arrivals">
        <div className="fixed-fashion-image" aria-hidden="true">
          <img src={fashionImage} alt="" />
        </div>

        <div className="arrivals-section">
          <div className="arrivals-header">
            <p>THE LATEST EDITION / 2026</p>
            <h2>NEW ARRIVALS.</h2>
          </div>

          <div className="arrivals-card">
            <div className="arrivals-card-image">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=90"
                alt="Friends exploring the new collection"
              />
            </div>

            <div className="arrivals-card-content">
              <p className="arrivals-card-content__eyebrow">01 / NEW COLLECTION</p>
              <h3>EFFORTLESS<br />ELEGANCE.</h3>
              <p className="arrivals-card-content__description">
                Discover a new perspective on modern fashion. Carefully selected
                pieces designed for timeless elegance.
              </p>
              <a href="#new-arrivals">
                DISCOVER MORE <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section" id="collection">
        <div className="editorial-content">
          <p className="editorial-content__eyebrow">THE ATELIER EDIT / 03</p>
          <h2>MADE TO<br />MOVE YOU.</h2>
          <p className="editorial-content__description">
            Considered silhouettes. Confident details. Discover pieces made to
            feel as good as they look, wherever the day takes you.
          </p>
          <a className="editorial-content__link" href="#new-arrivals">
            EXPLORE THE COLLECTION <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=90"
            alt="Model wearing a contemporary fashion look"
            loading="lazy"
          />
          <span>03 / SPRING 2026</span>
        </div>
      </section>

      <section className="campaign-section" id="atelier">
        <div className="campaign-content">
          <p className="campaign-content__eyebrow">ATELIER / THE WAY FORWARD</p>
          <h2>FIND YOUR<br />OWN FORM.</h2>
          <p className="campaign-content__description">
            Personal style is never standing still. Make room for new
            perspectives, unexpected details, and the pieces that feel like you.
          </p>
          <a className="campaign-content__link" href="#new-arrivals">
            FIND YOUR NEXT LOOK <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="campaign-image">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=90"
            alt="Fashion portrait from the Atelier campaign"
            loading="lazy"
          />
          <span>04 / THE ATELIER CAMPAIGN</span>
        </div>
      </section>

      <section className="lookbook-section" id="lookbook">
        <header className="lookbook-header">
          <p>THE ATELIER WARDROBE / 2026</p>
          <h2>THE LOOKBOOK.</h2>
          <span>Three moods. Your own point of view.</span>
        </header>

        <div className="lookbook-grid">
          <a className="lookbook-card" href="#collection">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&q=85"
              alt="A polished, modern look"
              loading="lazy"
            />
            <span className="lookbook-card__number">01 / THE MINIMALIST</span>
            <span className="lookbook-card__arrow" aria-hidden="true">↗</span>
          </a>
          <a className="lookbook-card" href="#new-arrivals">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=85"
              alt="A relaxed everyday fashion look"
              loading="lazy"
            />
            <span className="lookbook-card__number">02 / OFF-DUTY</span>
            <span className="lookbook-card__arrow" aria-hidden="true">↗</span>
          </a>
          <a className="lookbook-card" href="#atelier">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=85"
              alt="A confident statement look"
              loading="lazy"
            />
            <span className="lookbook-card__number">03 / IN THE SPOTLIGHT</span>
            <span className="lookbook-card__arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

    </main>
  )
}

export default Home
