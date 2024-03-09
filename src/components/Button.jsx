import React from 'react'

const Button = ({children,onclick,style}) => {
  return (
    <button onClick={onclick} className={style} type='button'>{children}</button>
  )
}

export default Button
