import ArrowNavigation from './ArrowNavigation'
import CompanyLogo from './CompanyLogo'
import TestimonialCard from './TestimonialCard'
import testimonials from '../../data/testimonials'
import { useState } from 'react'

const RecommendationsSection = () => {

  const [current, setCurrent] = useState(0)

  const testimonial = testimonials[current]

  const prev = () =>
    setCurrent(prev => (prev === 0 ? testimonials.length -1 : prev -1))

  const next = () =>
    setCurrent(prev => (prev === testimonials.length -1 ? 0 : prev +1))


  return (
    <section className='min-h-screen py-20 px-4 text-center bg-gray-100 dark:bg-gray-900'>
      <h2 className='text-3xl font-semibold text-gray-800 dark:text-white'>
        Testimonials
      </h2>
      <h3 className='text-4xl font-bold text-blue-600 dark:text-blue-400 mb-16'>
        What People Say
      </h3>

      {/* Render the current testimonial using TestimonialCard component */}
      <TestimonialCard testimonial={testimonial} />

      {/* Navigation Arrows */}
      <ArrowNavigation
        prev={prev} 
        next={next} 
      />
    
      {/* Logos */}
    </section>
  )
}

export default RecommendationsSection
