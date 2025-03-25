import React from 'react'
import Slider from '../components/Slider'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Slider />
      <LatestCollection />
      <BestSeller />
    </div>
  )
}

export default Home
