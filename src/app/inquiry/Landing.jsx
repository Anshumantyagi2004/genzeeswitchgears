import CategoryRangeL from '@/components/landing/CategoryRangeL'
import TestimonialSection from '@/components/Home/Testimonials'
import Example from '@/components/landing/Example'
import Hero from '@/components/landing/Hero'
import Industries from '@/components/landing/Industries'
import ProductRangeL from '@/components/landing/ProductRangeL'
import Whychoose from '@/components/landing/WhyChooseUs'
import CTASection from '@/components/Main/CTA'
import React from 'react'

const Landing = () => {
  return (
    <>
    <Hero/>
    <CategoryRangeL popup={true}/>
    <Whychoose/>
    <CTASection/>
    <ProductRangeL />
    <Industries/>
    <Example/>
    <TestimonialSection/>
    </>
  )
}

export default Landing