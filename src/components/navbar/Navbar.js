import React from 'react'
import { Button, Space } from 'antd';
const Navbar = () => {
  return (
    <div>
   <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">James Williams</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
      <a className="mr-5 hover:text-gray-900" href='/about'>About</a>
      <a className="mr-5 hover:text-gray-900" href='/resume'>Resume</a>
      <a className="mr-5 hover:text-gray-900" href='/contact'>Contact</a>
    </nav>
    <Space wrap>
    <Button type="primary">Sign Up</Button>
    <Button type="primary">Login</Button>
  </Space>
  </div>
</header>
<hr />
    </div>
  )
}

export default Navbar
