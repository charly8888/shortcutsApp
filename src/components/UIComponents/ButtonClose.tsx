import React, { FC } from 'react'
import CrossIcon from '../icons/CrossIcon'

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  widthAndHeightInREM?: number
  margin?: string
  backgroundColor?: string
}
const ButtonClose: FC<props> = ({
  onClick,
  margin = '1rem',
  widthAndHeightInREM = 1.5,
  backgroundColor = 'red',
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: `${widthAndHeightInREM}rem`,
        height: `${widthAndHeightInREM}rem`,
        margin,
        backgroundColor: `${backgroundColor}`,
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: '50%',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CrossIcon />
    </button>
  )
}

export default ButtonClose
