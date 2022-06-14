import React, { FC } from 'react'
import styles from './SelectorDefaultColor.module.scss'
interface props {
  agree: {
    primaryColor: string
    secondaryColor: string
  }
  valuesForPrimaryAndSecondaryColor: {
    primaryColor: string
    secondaryColor: string
  }
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
const SelectorDefaultColor: FC<props> = ({
  onChange,
  valuesForPrimaryAndSecondaryColor,
  agree,
}) => {
  const { primaryColor, secondaryColor } = valuesForPrimaryAndSecondaryColor

  const result = agree.primaryColor === primaryColor && agree.secondaryColor === secondaryColor
  return (
    <div
      className={styles.container}
      style={{ boxShadow: result ? ' 0 0 0 2px white, 0 0 0 4px black' : '' }}
    >
      <div className={styles.divColors} style={{ backgroundColor: `${secondaryColor}` }}></div>
      <div className={styles.divColors} style={{ backgroundColor: `${primaryColor}` }}></div>
      <input type={'checkbox'} onChange={onChange} />
    </div>
  )
}

export default SelectorDefaultColor
