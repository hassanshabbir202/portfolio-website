import React from 'react'
import { Button, Space } from 'antd';
import myimage from "../images/img.PNG"
const HeroSection = () => {

   const myStyle = {
    height:"400px",
    width:"480px"
   }

  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">My Name is James Wiliams
      </h1>
      <p className="mb-8 leading-relaxed">My Name is James Williams and I am a Full Stack Developer Strong <br />
       Knowledge Of Frontend and Backend I am Solving the All Of Errors <br />
      Hight Experience Of this Field!.</p>
      <div className="flex justify-center">
      <Space wrap>
    <Button type="primary">Visit Resume</Button>
  </Space>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={myimage}  style={myStyle}/>
    </div>
  </div>
</section>
<hr />
    </div>
  )
}

export default HeroSection
