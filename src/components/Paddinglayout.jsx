import React from 'react'

const Paddinglayout = ({children,padding}) => {
  return (
    <div className={`${padding ? padding : "" } flex_col gap-14`}>
        {children}
    </div>
  )
}

export default Paddinglayout
