import About from '@/components/About'
import ContactSection from '@/components/ContactSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import ResponsiveExcellence from '@/components/ResponsiveExcellence'
import TestimonialsSection from '@/components/TextimonialsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ExperienceSection/>
      <ResponsiveExcellence/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page