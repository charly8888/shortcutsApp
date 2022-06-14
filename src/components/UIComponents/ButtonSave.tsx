import React, { FC } from 'react'
import CheckIcon from '../icons/CheckIcon'

interface props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  widthAndHeightInREM?: number
  margin?: string
  backgroundColor?: string
}
const ButtonSave: FC<props> = ({
  onClick,
  margin = '1rem',
  widthAndHeightInREM = 1.5,
  backgroundColor = '#13b176',
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
        borderRadius: '50%',
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
