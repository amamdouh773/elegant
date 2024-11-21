import React from 'react'

const HeaderComponent = ({text,style}:{text:string,style?:string}) => {
  return (
       <p className={"text-primary text-header underline decoration-primary decoration-2 underline-offset-[15px] mb-20 "+style}>{text}</p>
       
  )
}

export default HeaderComponent
