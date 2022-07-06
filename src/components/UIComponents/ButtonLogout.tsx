import React, { FC } from 'react'
import Logout from '../icons/Logout'

interface props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  widthAndHeightInREM?: number
  margin?: string
  backgroundColor?: string
  className?: string
}
const ButtonLogout: FC<props> = ({ onClick, className }) => {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        style={{
          border: 'none',
          display: 'flex',
          alignItems: 'center',

          padding: '.2rem',
          justifyContent: 'center',
        }}
        className={className}
      >
        <Logout />
      </button>
    </div>
  )
}

export default ButtonLogout
