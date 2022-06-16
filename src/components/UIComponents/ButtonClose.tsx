import React, { FC } from 'react'
import CrossIcon from '../icons/CrossIcon'

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  widthAndHeightInREM?: number
  margin?: string
  backgroundColor?: string
  className?: string
  borderRadius?: string
}
const ButtonClose: FC<props> = ({
  onClick,
  margin,
  widthAndHeightInREM = 1.8,
  backgroundColor = 'red',
  className,
  borderRadius = '50%',
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
        borderRadius,
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={className}
    >
      <CrossIcon />
    </button>
  )
}

export default ButtonClose
