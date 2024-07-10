import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay:5000})])

  return (
    <div className="embla w-full h-96 lg:h-[500px]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="https://images.unsplash.com/photo-1650801521881-56f5288efabd?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://images.unsplash.com/photo-1650747857310-c359fd3ee5c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://images.unsplash.com/photo-1656259754534-3b5d38fcd28c?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}
