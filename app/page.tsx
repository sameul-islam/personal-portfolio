import About from '@/components/About'
import ExperienceSection from '@/components/ExperienceSection'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import ResponsiveExcellence from '@/components/ResponsiveExcellence'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ExperienceSection/>
      <ResponsiveExcellence/>
      <ProjectsSection/>
    </div>
  )
}

export default page