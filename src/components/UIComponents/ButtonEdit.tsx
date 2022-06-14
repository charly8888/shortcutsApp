import React, { FC } from 'react'
import EditIcon from '../icons/EditIcon'

interface props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  widthAndHeightInREM?: number
  margin?: string
  backgroundColor?: string
  className?: string
}
const ButtonEdit: FC<props> = ({
  onClick,
  margin = '1rem',
  widthAndHeightInREM = 1.5,
  backgroundColor,
  className,
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

        padding: '.2rem',
        justifyContent: 'center',
      }}
      className={className}
    >
      <EditIcon />
    </button>
  )
}

export default ButtonEdit
