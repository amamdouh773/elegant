import React from 'react'

const Header = ({text}:{text:string}) => {
  return (
       <p className="text-primary text-header underline decoration-primary underline-offset-[15px] mb-20">{text}</p>
  )
}

export default Header
