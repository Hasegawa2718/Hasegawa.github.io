import { NextPage } from 'next'
import React, { useRef } from 'react'

import { About, Top, Skill } from '@/components/layout'
import { ProgressBar } from '@/components/screen'

const IndexPage: NextPage = () => {
  const topRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)

  return (
    <main className='font-mono text-gray-200'>
      <ProgressBar topRef={topRef} aboutRef={aboutRef} skillsRef={skillRef} />
      <div className='my-10 flex flex-col items-center gap-20'>
        <Top topRef={topRef} />
        <About aboutRef={aboutRef} />
        <Skill skillRef={skillRef} />
      </div>
    </main>
  )
}

export default IndexPage
