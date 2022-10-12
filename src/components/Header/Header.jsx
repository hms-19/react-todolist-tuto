import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <h3 className='text-center fs-2 fw-bold'>
            {title}
        </h3>
    </div>
  )
}

export default Header