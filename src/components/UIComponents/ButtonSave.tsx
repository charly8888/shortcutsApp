import React, { FC } from 'react'
import CheckIcon from '../icons/CheckIcon'

interface props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  widthAndHeightInREM?: number
  margin?: string
  backgroundColor?: string
  borderRadius?: string
}
const ButtonSave: FC<props> = ({
  onClick,
  margin = '0',
  widthAndHeightInREM = 1.8,
  backgroundColor = '#13b176',
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
        right: 0,
        borderRadius,
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CheckIcon />
    </button>
  )
}

export default ButtonSave
