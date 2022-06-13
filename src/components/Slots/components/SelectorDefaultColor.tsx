import styles from './SelectorDefaultColor.module.scss'

const SelectorDefaultColor = ({ onChange, valuesForPrimaryAndSecondaryColor, agree }) => {
  const { primaryColor, secondaryColor } = valuesForPrimaryAndSecondaryColor

  const result = agree.primaryColor === primaryColor && agree.secondaryColor === secondaryColor
  console.log(result)
  return (
    <div
      className={styles.container}
      style={{ 'box-shadow': [result ? ' 0 0 0 2px white, 0 0 0 4px black' : ''] }}
    >
      <div className={styles.divColors} style={{ 'background-color': `${secondaryColor}` }}></div>
      <div className={styles.divColors} style={{ 'background-color': `${primaryColor}` }}></div>
      <input type={'checkbox'} onChange={onChange} />
    </div>
  )
}

export default SelectorDefaultColor
