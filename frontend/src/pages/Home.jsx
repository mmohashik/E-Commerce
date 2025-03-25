import React from 'react'
import Slider from '../components/Slider'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Slider />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  )
}

export default Home
