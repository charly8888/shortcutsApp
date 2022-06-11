import { nanoid } from 'nanoid'
import { typesOfSlots } from '../../types'

export const setGridFirstTime = () => {
  const numerosDeGrillasMaximoALoAncho = Math.floor((window.innerWidth - 16 * 4) / (7 * 16))
  const numerosDeGrillasMaximoALoAlto = Math.floor(window.innerHeight / (7.5 * 16))
  const numeroDeGrillasMaximas = numerosDeGrillasMaximoALoAncho * numerosDeGrillasMaximoALoAlto
  const newarr: typesOfSlots[] = []

  for (let i = 0; i < numeroDeGrillasMaximas; i++) {
    const id = nanoid()
    newarr.push({ type: 'empty', id })
  }
  return newarr
}
