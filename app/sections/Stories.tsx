import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Slider from '../components/Slider'

const Stories = () => {
  return (
    <div className='flex justify-between flex-col items-start m-14 pb-10'>
      <HeaderComponent text='Success Stories' />
      <video src="../about-video.mp4" controls={true} width={800} className='self-center'  />
      <Slider  />
    </div>
  )
}

export default Stories
