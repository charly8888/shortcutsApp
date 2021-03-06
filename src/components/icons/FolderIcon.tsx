import { PropsWithChildren } from 'react'

interface Props {
  className?: string
  colorBack?: string
  colorFront?: string
}

function FolderIcon({ className, colorBack, colorFront }: PropsWithChildren<Props>) {
  return (
    <svg viewBox='0 0 48 48' width='100%' className={className}>
      <path fill={colorBack} d='M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z' />
      <path
        fill={colorFront}
        d='M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z'
      />
    </svg>
  )
}
export default FolderIcon
