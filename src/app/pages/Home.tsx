import React from 'react'
import { BackgroundBeamsWithCollisionDemo } from '../tobeinput/backbeams'
import { TailwindcssButtons } from '../components/frontpagebutton'
import Layout from './Layout'
const Landing = () => {
  return (
    <Layout>
    <div className='h-screen'>
        <BackgroundBeamsWithCollisionDemo/>
        <TailwindcssButtons/>
    </div>
    </Layout>

  )
}

export default Landing;