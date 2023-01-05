import React from 'react'
import html from "../images/html-5.png"
import css from "../images/css-3.webp"
import js from "../images/js.png"
const About = () => {
    const heading = {
        textAlign:"center",
        marginTop:"6vh",
        fontSize:"42px"
    }

    const marqueeStyle = {
        marginTop:"6vh",
        fontSize:"42px"  
    }
  return (
    <div>
      <h1 style={heading}>About Us</h1>
      <marquee behavior="" direction="right" style={marqueeStyle} scrollamount='20'><h1>Latest Cources</h1></marquee>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={html}/>
          <p className="leading-relaxed">Hypertext Markup Language, a standardized
system for tagging text files to achieve font, colour, graphic,
and hyperlink effects on World Wide Web pages.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Complete HTML</h2>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={css}/>
          <p className="leading-relaxed">CSS is the acronym of “Cascading Style Sheets”.
CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Complete CSS</h2>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={js}/>
          <p className="leading-relaxed">Javascript is an object-oriented computer programming
language commonly used to create interactive effects within web browsers. add dynamic functionality in web pages</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Complete Javascript</h2>
        </div>
      </div>
    </div>
  </div>
</section>
<hr />
    </div>
  )
}

export default About
